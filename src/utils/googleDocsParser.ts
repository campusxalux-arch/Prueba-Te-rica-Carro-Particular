/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from "../types";

interface DocParagraph {
  elements?: Array<{
    textRun?: {
      content: string;
    };
  }>;
}

interface DocTableCell {
  content?: Array<{
    paragraph?: DocParagraph;
  }>;
}

interface DocTableRow {
  tableCells?: DocTableCell[];
}

interface DocTable {
  tableRows?: DocTableRow[];
}

interface DocContent {
  paragraph?: DocParagraph;
  table?: DocTable;
}

interface GoogleDocJSON {
  body: {
    content: DocContent[];
  };
}

/**
 * Extracts plain text from a paragraph's elements
 */
function getParagraphText(paragraph: DocParagraph | undefined): string {
  if (!paragraph || !paragraph.elements) return "";
  return paragraph.elements
    .map(el => el.textRun?.content || "")
    .join("")
    .trim();
}

/**
 * Parses Google Docs API JSON into structured questions
 */
export function parseGoogleDocJSON(docData: GoogleDocJSON): Question[] {
  const questions: Question[] = [];
  
  try {
    const contents = docData.body?.content || [];
    
    // METHOD 1: Look for tables first
    const tables = contents.filter(item => item.table !== undefined);
    if (tables.length > 0) {
      const table = tables[0].table;
      const rows = table?.tableRows || [];
      
      // Row 0 is assumed to be header (Pregunta, Opción A, Opción B, etc.)
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.tableCells || [];
        
        if (cells.length >= 6) {
          const qText = cells[0].content?.map(c => getParagraphText(c.paragraph)).join("\n").trim() || "";
          const opA = cells[1].content?.map(c => getParagraphText(c.paragraph)).join("\n").trim() || "";
          const opB = cells[2].content?.map(c => getParagraphText(c.paragraph)).join("\n").trim() || "";
          const opC = cells[3].content?.map(c => getParagraphText(c.paragraph)).join("\n").trim() || "";
          const opD = cells[4].content?.map(c => getParagraphText(c.paragraph)).join("\n").trim() || "";
          
          let correctStr = cells[5].content?.map(c => getParagraphText(c.paragraph)).join("").trim().toLowerCase() || "";
          
          let correctAnswer = 0;
          if (correctStr.includes("b") || correctStr === "1") correctAnswer = 1;
          else if (correctStr.includes("c") || correctStr === "2") correctAnswer = 2;
          else if (correctStr.includes("d") || correctStr === "3") correctAnswer = 3;
          
          if (qText) {
            questions.push({
              id: i,
              question: qText,
              options: [opA, opB, opC, opD].filter(o => o !== ""),
              correctAnswer: correctAnswer,
              category: "Normas de comportamiento"
            });
          }
        }
      }
    }
    
    // METHOD 2: If no questions from tables, parse text paragraphs
    if (questions.length === 0) {
      let currentQuestion: Question | null = null;
      let qId = 1;
      
      for (const item of contents) {
        if (!item.paragraph) continue;
        const pText = getParagraphText(item.paragraph);
        if (!pText) continue;
        
        // Detect question (starts with number e.g. "1. ¿..." or is a question sentence)
        const isQuestionMatch = pText.match(/^(\d+)[\.\s]+(.*)/) || pText.startsWith("¿") || pText.endsWith("?");
        const isOptionPrefix = /^[a-dA-D][\.\)\s]/.test(pText);
        
        if (isQuestionMatch && !isOptionPrefix) {
          // Save previous question
          if (currentQuestion && currentQuestion.options.length >= 2) {
            questions.push(currentQuestion);
          }
          
          let cleanQText = pText;
          const match = pText.match(/^(\d+)[\.\s]+(.*)/);
          if (match) cleanQText = match[2];
          
          currentQuestion = {
            id: qId++,
            question: cleanQText,
            options: [],
            correctAnswer: 0,
            category: "General"
          };
        } else if (currentQuestion) {
          // Detect option: e.g. "a) Option", "b) Option", "*c) Option" or "A. Option"
          const isOptionMatch = pText.match(/^[\*\s]*([a-dA-D])[\.\)\s]+(.*)/);
          if (isOptionMatch) {
            let optionText = isOptionMatch[2].trim();
            const isCorrect = pText.includes("*") || pText.toLowerCase().includes("(correcta)");
            
            optionText = optionText.replace(/\*/g, "").replace(/\(correcta\)/gi, "").trim();
            currentQuestion.options.push(optionText);
            
            if (isCorrect) {
              currentQuestion.correctAnswer = currentQuestion.options.length - 1;
            }
          }
        }
      }
      
      // Push the last question
      if (currentQuestion && currentQuestion.options.length >= 2) {
        questions.push(currentQuestion);
      }
    }
  } catch (error) {
    console.error("[Parser] Error parsing Google Doc JSON:", error);
  }
  
  return questions;
}
