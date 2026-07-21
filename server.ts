/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { QUESTION_BANK, getRandomQuestions } from "./src/data/questions";
import { parseGoogleDocJSON } from "./src/utils/googleDocsParser";
import { writeResultsToSheets } from "./src/utils/googleSheetsWriter";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;
const GOOGLE_APPS_SCRIPT_URL = 
  process.env.GOOGLE_APPS_SCRIPT_URL || 
  "https://script.google.com/macros/s/AKfycbyIqA0w9m88r7HZMXeQEXvsPFvTK_qbG6QQLOgSWIoEk1TZqF90Ps66v2D-HirsEYNYOw/exec";

// Parse JSON request bodies
app.use(express.json());

// API Routes

/**
 * GET /api/questions
 * Attempts to retrieve questions dynamically from Google Docs using user's OAuth access token.
 * Falls back to Google Apps Script Web App or our local QUESTION_BANK fallback.
 */
app.get("/api/questions", async (req, res) => {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.replace(/^bearer\s+/i, "").trim();
  const customDocId = req.query.docId as string;
  const docId = customDocId || "14-Joj8-p_t9DkgKRb7Og23Xh_XrXDSqd3RZIEwhCOD4";

  // 1. Try DIRECT Google Docs API fetch if OAuth token is provided
  if (token) {
    try {
      console.log(`[API] Intentando obtener preguntas DIRECTAMENTE de Google Docs API para Documento: ${docId}`);
      const response = await fetch(`https://docs.google.com/v1/documents/${docId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const docData = await response.json();
        const parsedQuestions = parseGoogleDocJSON(docData);
        
        if (parsedQuestions.length > 0) {
          console.log(`[API] Se obtuvieron y procesaron ${parsedQuestions.length} preguntas DIRECTAMENTE de Google Docs API.`);
          // Return up to 40 random questions proportionally distributed
          const shuffled = getRandomQuestions(40, parsedQuestions);
          return res.json({
            source: "google_docs_direct",
            questions: shuffled
          });
        }
      } else {
        console.warn(`[API] Google Docs API devolvió código de error: ${response.status}`);
      }
    } catch (directErr) {
      console.error("[API] Error al consultar Google Docs API directamente:", directErr);
    }
  }

  // 2. Try Google Apps Script fallback if configured
  try {
    if (GOOGLE_APPS_SCRIPT_URL) {
      console.log(`[API] Intentando obtener preguntas desde Google Apps Script: ${GOOGLE_APPS_SCRIPT_URL}`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
        const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getQuestions`, {
          signal: controller.signal,
          headers: {
            "Accept": "application/json"
          }
        });
        
        clearTimeout(timeoutId);

        if (response.ok) {
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
              console.log(`[API] Se obtuvieron ${data.length} preguntas desde Google Apps Script.`);
              const shuffled = getRandomQuestions(40, data);
              return res.json({
                source: "google_docs_apps_script",
                questions: shuffled
              });
            }
          }
        }
      } catch (fetchErr) {
        console.warn("[API] Error al conectar con Google Apps Script:", fetchErr);
      }
    }
    
    // 3. Absolute Fallback: local questions
    console.log("[API] Usando banco de preguntas local como fallback.");
    const questions = getRandomQuestions(40);
    return res.json({
      source: "local_fallback",
      questions: questions
    });
  } catch (error) {
    console.error("[API] Error crítico en GET /api/questions:", error);
    const questions = getRandomQuestions(40);
    return res.json({
      source: "local_fallback_error",
      questions: questions,
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

/**
 * POST /api/results
 * Forwards exam results directly to Google Sheets using user's OAuth token or falls back to Google Apps Script.
 */
app.post("/api/results", async (req, res) => {
  try {
    const payload = req.body;
    const authHeader = req.headers["authorization"] || "";
    const token = authHeader.replace(/^bearer\s+/i, "").trim() || payload.accessToken;
    const spreadsheetId = payload.spreadsheetId;

    console.log("[API] Recibiendo resultados de examen para:", payload.nombreCompleto);

    // 1. Try DIRECT Google Sheets API write if both token and spreadsheetId are provided
    if (token && spreadsheetId) {
      try {
        console.log(`[API] Intentando guardar resultados DIRECTAMENTE en Google Sheet: ${spreadsheetId}`);
        const writeResult = await writeResultsToSheets(spreadsheetId, token, payload);
        return res.json(writeResult);
      } catch (directWriteErr) {
        console.error("[API] Error al escribir directamente en Google Sheets:", directWriteErr);
        // Fall through to Apps Script or standard error handling
      }
    }

    // 2. Fall back to Google Apps Script
    if (!GOOGLE_APPS_SCRIPT_URL) {
      return res.status(501).json({
        success: false,
        message: "Google Apps Script URL no configurada en el servidor y no se proporcionó SpreadsheetId con OAuth token.",
        savedLocal: true
      });
    }

    console.log("[API] Enviando resultados a Google Apps Script...");
    
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      redirect: "follow"
    });

    const responseText = await response.text();
    console.log(`[API] Respuesta de Google Apps Script (status ${response.status}):`, responseText);

    if (response.ok) {
      let responseData;
      let isJson = false;
      try {
        responseData = JSON.parse(responseText);
        isJson = true;
      } catch (e) {
        responseData = { message: responseText };
      }

      if (isJson && responseData.success === true) {
        return res.json({
          success: true,
          message: "Resultados guardados y sincronizados con Google Sheets correctamente.",
          details: responseData
        });
      } else {
        let errorMsg = "La respuesta de Google Apps Script no fue válida.";
        if (!isJson) {
          if (responseText.includes("Script function not found: doPost") || responseText.includes("doPost")) {
            errorMsg = "Error de Apps Script: No se encontró la función 'doPost'. Asegúrate de guardar el script y crear una NUEVA implementación de Aplicación Web en el editor de Google Apps Script.";
          } else if (responseText.includes("Script function not found: doGet") || responseText.includes("doGet")) {
            errorMsg = "Error de Apps Script: No se encontró la función 'doGet' en el script de Google.";
          } else if (responseText.includes("The JavaScript runtime exited unexpectedly")) {
            errorMsg = "Error en Google Sheets: El motor de Apps Script falló. Asegúrate de que el script esté vinculado (Extensiones > Apps Script) a tu archivo de cálculo de Google Sheets.";
          } else {
            errorMsg = "Error de Configuración: El script devolvió una página HTML en vez de una confirmación JSON. Verifica que la aplicación web esté desplegada con acceso configurado para 'Cualquiera' (Anyone) y que hayas completado el flujo de autorización.";
          }
        } else {
          errorMsg = responseData.error || responseData.message || errorMsg;
        }

        return res.status(400).json({
          success: false,
          message: errorMsg,
          error: responseText,
          savedLocal: true
        });
      }
    } else {
      return res.status(response.status).json({
        success: false,
        message: `Error de respuesta del servidor Google Sheets (status: ${response.status})`,
        error: responseText,
        savedLocal: true
      });
    }
  } catch (error) {
    console.error("[API] Error al enviar resultados:", error);
    return res.status(500).json({
      success: false,
      message: "No se pudo conectar con el servidor de Google Sheets. Los datos se guardarán localmente.",
      error: error instanceof Error ? error.message : String(error),
      savedLocal: true
    });
  }
});

// Setup Frontend Integration

async function start() {
  if (process.env.NODE_ENV !== "production") {
    // Integrate Vite development server middleware
    console.log("[SERVER] Iniciando servidor en modo DESARROLLO (Vite middleware)");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    console.log("[SERVER] Iniciando servidor en modo PRODUCCIÓN");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Servidor corriendo en http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("[SERVER] Error al iniciar el servidor:", err);
});
