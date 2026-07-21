/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface ExamResultPayload {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombreCompleto: string;
  edad: number | string;
  empresa: string;
  antiguedad: number | string;
  tipoLicencia: string;
  correctas: number;
  incorrectas: number;
  puntaje: number;
  resultado: string;
  tiempoEmpleado: string;
  detalles?: Array<{
    pregunta: string;
    elegida: string;
    esCorrecta: boolean;
  }>;
}

/**
 * Parses spreadsheet ID from a Google Sheet URL or returns the input if it's already an ID.
 */
export function extractSpreadsheetId(urlOrId: string): string {
  if (!urlOrId) return "";
  const match = urlOrId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : urlOrId.trim();
}

/**
 * Helper to determine the block index for a question detail
 */
function getBlockFromDetail(det: any): number {
  const qId = det.preguntaId || 0;
  if (qId >= 1 && qId <= 54) return 1;
  if (qId >= 55 && qId <= 108) return 2;
  if (qId >= 109 && qId <= 147) return 3;

  const cat = (det.category || "").toLowerCase();
  if (cat.includes("mecánica") || cat.includes("mecanica") || cat.includes("bloque 1")) return 1;
  if (cat.includes("situación") || cat.includes("situacion") || cat.includes("vial") || cat.includes("bloque 2")) return 2;
  return 3;
}

/**
 * Writes exam results directly to Google Sheets using the Sheets API.
 * Ensures sheets "Participante" and "Resultados" exist, creating them if necessary.
 * 
 * Hoja 1 "Participante": Datos de registro + resultado global de examen (Aprobado/No aprobado).
 * Hoja 2 "Resultados": Datos del participante + porcentaje por módulo + resultado global.
 */
export async function writeResultsToSheets(
  spreadsheetId: string,
  accessToken: string,
  data: ExamResultPayload
): Promise<{ success: boolean; message: string; details?: any }> {
  const parsedSpreadsheetId = extractSpreadsheetId(spreadsheetId);
  if (!parsedSpreadsheetId) {
    throw new Error("ID de Google Sheet inválido.");
  }

  const now = new Date();
  const fecha = now.toLocaleDateString("es-CO", { timeZone: "America/Bogota" });
  const hora = now.toLocaleTimeString("es-CO", { timeZone: "America/Bogota" });

  const headers = {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  try {
    // Step 1: Fetch spreadsheet metadata to check existing sheets
    const metaRes = await fetch(
      `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}`,
      { headers }
    );

    if (!metaRes.ok) {
      const errText = await metaRes.text();
      throw new Error(`No se pudo acceder a la hoja de cálculo: ${errText}`);
    }

    const meta = await metaRes.json();
    const sheetNames = (meta.sheets || []).map((s: any) => s.properties.title);

    const hasParticipante = sheetNames.includes("Participante");
    const hasResultados = sheetNames.includes("Resultados");

    // Step 2: Create sheets if missing
    const requests: any[] = [];
    if (!hasParticipante) {
      requests.push({
        addSheet: {
          properties: { title: "Participante" }
        }
      });
    }
    if (!hasResultados) {
      requests.push({
        addSheet: {
          properties: { title: "Resultados" }
        }
      });
    }

    if (requests.length > 0) {
      console.log("[Sheets] Creando pestañas requeridas ('Participante', 'Resultados')...");
      const createRes = await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}:batchUpdate`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ requests })
        }
      );

      if (!createRes.ok) {
        console.warn("[Sheets] Advertencia al crear pestañas:", await createRes.text());
      }
    }

    // Step 3: Write headers to "Participante" if missing or newly created
    if (!hasParticipante) {
      await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Participante!A1:N1?valueInputOption=USER_ENTERED`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            values: [[
              "Fecha", 
              "Hora", 
              "Tipo Identificación", 
              "Número Identificación", 
              "Nombre Completo", 
              "Edad", 
              "Empresa", 
              "Años Antigüedad", 
              "Tipo Licencia", 
              "Respuestas Correctas", 
              "Respuestas Incorrectas", 
              "Puntaje Global", 
              "Resultado Global", 
              "Tiempo Empleado"
            ]]
          })
        }
      );
    }

    // Step 4: Write headers to "Resultados" if missing or newly created
    if (!hasResultados) {
      await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados!A1:P1?valueInputOption=USER_ENTERED`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            values: [[
              "Fecha", 
              "Hora", 
              "Tipo Identificación", 
              "Número Identificación", 
              "Nombre Completo", 
              "Edad", 
              "Empresa", 
              "Años Antigüedad", 
              "Tipo Licencia", 
              "% Mecánica", 
              "% Situaciones de Conducción", 
              "% Infraestructura", 
              "% Normativa Vial", 
              "Puntaje Global", 
              "Resultado Global", 
              "Tiempo Empleado"
            ]]
          })
        }
      );
    }

    // Step 5: Append row to "Participante" (Sheet 1)
    const participanteRow = [
      fecha,
      hora,
      data.tipoIdentificacion,
      data.numeroIdentificacion,
      data.nombreCompleto,
      data.edad,
      data.empresa,
      data.antiguedad,
      data.tipoLicencia,
      data.correctas,
      data.incorrectas,
      data.puntaje,
      data.resultado, // "Aprobado" | "No aprobado"
      data.tiempoEmpleado
    ];

    const appendParticipanteRes = await fetch(
      `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Participante!A1:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          values: [participanteRow]
        })
      }
    );

    if (!appendParticipanteRes.ok) {
      const errText = await appendParticipanteRes.text();
      throw new Error(`Error al agregar fila a Participante: ${errText}`);
    }

    // Step 6: Calculate percentage per module for "Resultados" (Sheet 2)
    let mecTotal = 0, mecCorrect = 0;
    let condTotal = 0, condCorrect = 0;
    let infraTotal = 0, infraCorrect = 0;
    let normTotal = 0, normCorrect = 0;

    if (data.detalles && Array.isArray(data.detalles)) {
      data.detalles.forEach((det: any) => {
        const cat = (det.category || "").toLowerCase();
        const isCorrect = det.esCorrecta;

        if (cat.includes("mecán") || cat.includes("mecan")) {
          mecTotal++;
          if (isCorrect) mecCorrect++;
        } else if (cat.includes("situac") || cat.includes("conduc")) {
          condTotal++;
          if (isCorrect) condCorrect++;
        } else if (cat.includes("infraestruc")) {
          infraTotal++;
          if (isCorrect) infraCorrect++;
        } else if (cat.includes("normat") || cat.includes("norma") || cat.includes("tránsito") || cat.includes("transito") || cat.includes("vial")) {
          normTotal++;
          if (isCorrect) normCorrect++;
        } else {
          // Fallback by question ID
          const qId = det.preguntaId || 0;
          if (qId >= 1 && qId <= 8) {
            mecTotal++;
            if (isCorrect) mecCorrect++;
          } else if (qId >= 9 && qId <= 20) {
            condTotal++;
            if (isCorrect) condCorrect++;
          } else if (qId >= 21 && qId <= 30) {
            infraTotal++;
            if (isCorrect) infraCorrect++;
          } else {
            normTotal++;
            if (isCorrect) normCorrect++;
          }
        }
      });
    }

    const mecPct = mecTotal > 0 ? Math.round((mecCorrect / mecTotal) * 100) : 0;
    const condPct = condTotal > 0 ? Math.round((condCorrect / condTotal) * 100) : 0;
    const infraPct = infraTotal > 0 ? Math.round((infraCorrect / infraTotal) * 100) : 0;
    const normPct = normTotal > 0 ? Math.round((normCorrect / normTotal) * 100) : 0;

    // Append row to "Resultados" (Sheet 2)
    const resultadosRow = [
      fecha,
      hora,
      data.tipoIdentificacion,
      data.numeroIdentificacion,
      data.nombreCompleto,
      data.edad,
      data.empresa,
      data.antiguedad,
      data.tipoLicencia,
      `${mecPct}%`,
      `${condPct}%`,
      `${infraPct}%`,
      `${normPct}%`,
      data.puntaje,
      data.resultado, // "Aprobado" | "No aprobado"
      data.tiempoEmpleado
    ];

    const appendResultadosRes = await fetch(
      `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados!A1:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          values: [resultadosRow]
        })
      }
    );

    if (!appendResultadosRes.ok) {
      console.warn("[Sheets] No se pudo agregar la fila a Resultados:", await appendResultadosRes.text());
    }

    return {
      success: true,
      message: "Resultados sincronizados con Google Sheets con éxito en las hojas 'Participante' y 'Resultados'.",
      details: {
        spreadsheetId: parsedSpreadsheetId,
        participanteAgregado: 1,
        resultadosAgregados: 1
      }
    };

  } catch (error) {
    console.error("[Sheets] Error escribiendo resultados a Google Sheets:", error);
    throw error;
  }
}
