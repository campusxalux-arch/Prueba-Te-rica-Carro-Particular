/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TipoIdentificacion = 
  | "Cédula de ciudadanía"
  | "Cédula de extranjería"
  | "Pasaporte"
  | "Permiso Especial";

export type TipoLicencia =
  | "A1"
  | "A2"
  | "B1"
  | "B2"
  | "B3"
  | "C1"
  | "C2"
  | "C3";

export interface UserRegistration {
  tipoIdentificacion: TipoIdentificacion | "";
  numeroIdentificacion: string;
  nombreCompleto: string;
  edad: number | "";
  empresa: string;
  antiguedad: number | "";
  tipoLicencia: TipoLicencia | "";
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0 to 3
  category: string;
}

export interface AnswerDetail {
  preguntaId: number;
  pregunta: string;
  elegida: string;
  correcta: string;
  esCorrecta: boolean;
  category?: string;
}

export interface ExamResult {
  fecha: string;
  hora: string;
  tipoIdentificacion: TipoIdentificacion;
  numeroIdentificacion: string;
  nombreCompleto: string;
  edad: number;
  empresa: string;
  antiguedad: number;
  tipoLicencia: TipoLicencia;
  correctas: number;
  incorrectas: number;
  puntaje: number; // 0 to 100
  resultado: "Aprobado" | "No aprobado";
  tiempoEmpleado: string; // MM:SS format
  detalles: AnswerDetail[];
}

export interface SyncStatus {
  status: "idle" | "syncing" | "success" | "error";
  message?: string;
  savedLocal?: boolean;
}
