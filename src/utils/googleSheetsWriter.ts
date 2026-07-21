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
 * Ensures sheets "Resultados" and "Detalles_Respuestas" exist, creating them if necessary.
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
  // Format current date and time
  const fecha = now.toLocaleDateString("es-CO", { timeZone: "America/Bogota" });
  const hora = now.toLocaleTimeString("es-CO", { timeZone: "America/Bogota" });

  const headers = {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  try {
    // Step 1: Ensure sheets exist. We can do a request to fetch spreadsheet metadata.
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

    const hasResultados = sheetNames.includes("Resultados");
    const hasDetalles = sheetNames.includes("Detalles_Respuestas");
    const hasBloques = sheetNames.includes("Resultados_Por_Bloques");

    // Step 2: Create sheets and add headers if they don't exist
    const requests: any[] = [];
    if (!hasResultados) {
      requests.push({
        addSheet: {
          properties: { title: "Resultados" }
        }
      });
    }
    if (!hasDetalles) {
      requests.push({
        addSheet: {
          properties: { title: "Detalles_Respuestas" }
        }
      });
    }
    if (!hasBloques) {
      requests.push({
        addSheet: {
          properties: { title: "Resultados_Por_Bloques" }
        }
      });
    }

    if (requests.length > 0) {
      console.log("[Sheets] Creando hojas necesarias en el documento...");
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

    // Step 3: Write headers to "Resultados" if it was just created
    if (!hasResultados) {
      await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados!A1:N1?valueInputOption=USER_ENTERED`,
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
              "Puntaje (Sobre 100)", 
              "Resultado", 
              "Tiempo Empleado"
            ]]
          })
        }
      );
    }

    // Step 4: Write headers to "Detalles_Respuestas" if it was just created
    if (!hasDetalles) {
      await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Detalles_Respuestas!A1:H1?valueInputOption=USER_ENTERED`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            values: [[
              "Fecha", 
              "Hora", 
              "Número Identificación", 
              "Nombre Completo", 
              "Pregunta Número", 
              "Pregunta Texto", 
              "Respuesta Elegida", 
              "¿Es Correcta?"
            ]]
          })
        }
      );
    }

    // Step 4.5: Write headers to "Resultados_Por_Bloques" if it was just created
    if (!hasBloques) {
      await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados_Por_Bloques!A1:M1?valueInputOption=USER_ENTERED`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            values: [[
              "Fecha",
              "Hora",
              "Número Identificación",
              "Nombre Completo",
              "Bloque 1: Mecánica (Preguntas)",
              "Bloque 1: Mecánica (Correctas)",
              "Bloque 1: Mecánica (% Acierto)",
              "Bloque 2: Seguridad Vial (Preguntas)",
              "Bloque 2: Seguridad Vial (Correctas)",
              "Bloque 2: Seguridad Vial (% Acierto)",
              "Bloque 3: Normas de Tránsito (Preguntas)",
              "Bloque 3: Normas de Tránsito (Correctas)",
              "Bloque 3: Normas de Tránsito (% Acierto)"
            ]]
          })
        }
      );
    }

    // Step 5: Append result row to "Resultados"
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
      data.correctas,
      data.incorrectas,
      data.puntaje,
      data.resultado,
      data.tiempoEmpleado
    ];

    const appendRes = await fetch(
      `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados!A1:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          values: [resultadosRow]
        })
      }
    );

    if (!appendRes.ok) {
      const errText = await appendRes.text();
      throw new Error(`Error al agregar fila a Resultados: ${errText}`);
    }

    // Calculate block statistics for block results sheet
    let b1Total = 0, b1Correct = 0;
    let b2Total = 0, b2Correct = 0;
    let b3Total = 0, b3Correct = 0;

    if (data.detalles && Array.isArray(data.detalles)) {
      data.detalles.forEach((det: any) => {
        const block = getBlockFromDetail(det);
        const isCorrect = det.esCorrecta;
        if (block === 1) {
          b1Total++;
          if (isCorrect) b1Correct++;
        } else if (block === 2) {
          b2Total++;
          if (isCorrect) b2Correct++;
        } else if (block === 3) {
          b3Total++;
          if (isCorrect) b3Correct++;
        }
      });
    }

    const b1Pct = b1Total > 0 ? Math.round((b1Correct / b1Total) * 100) : 0;
    const b2Pct = b2Total > 0 ? Math.round((b2Correct / b2Total) * 100) : 0;
    const b3Pct = b3Total > 0 ? Math.round((b3Correct / b3Total) * 100) : 0;

    const bloquesRow = [
      fecha,
      hora,
      data.numeroIdentificacion,
      data.nombreCompleto,
      b1Total,
      b1Correct,
      `${b1Pct}%`,
      b2Total,
      b2Correct,
      `${b2Pct}%`,
      b3Total,
      b3Correct,
      `${b3Pct}%`
    ];

    const appendBloquesRes = await fetch(
      `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Resultados_Por_Bloques!A1:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          values: [bloquesRow]
        })
      }
    );

    if (!appendBloquesRes.ok) {
      console.warn("[Sheets] No se pudo agregar los resultados por bloques:", await appendBloquesRes.text());
    }

    // Step 6: Append detail rows to "Detalles_Respuestas" if present
    let detailsCount = 0;
    if (data.detalles && Array.isArray(data.detalles) && data.detalles.length > 0) {
      const detallesRows = data.detalles.map((det, index) => [
        fecha,
        hora,
        data.numeroIdentificacion,
        data.nombreCompleto,
        index + 1,
        det.pregunta,
        det.elegida,
        det.esCorrecta ? "SÍ" : "NO"
      ]);

      const appendDetailsRes = await fetch(
        `https://sheets.googleapis.com/v1/spreadsheets/${parsedSpreadsheetId}/values/Detalles_Respuestas!A1:append?valueInputOption=USER_ENTERED`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            values: detallesRows
          })
        }
      );

      if (!appendDetailsRes.ok) {
        console.warn("[Sheets] No se pudo agregar el detalle de las respuestas:", await appendDetailsRes.text());
      } else {
        detailsCount = detallesRows.length;
      }
    }

    return {
      success: true,
      message: "Resultados sincronizados con Google Sheets con éxito.",
      details: {
        spreadsheetId: parsedSpreadsheetId,
        resultadosAgregados: 1,
        detallesAgregados: detailsCount
      }
    };

  } catch (error) {
    console.error("[Sheets] Error escribiendo resultados a Google Sheets:", error);
    throw error;
  }
}
