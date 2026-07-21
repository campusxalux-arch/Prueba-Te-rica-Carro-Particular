/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Compass, 
  AlertCircle, 
  ShieldCheck, 
  Clock,
  Database
} from "lucide-react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import ExamSession from "./components/ExamSession";
import ExamResultCard from "./components/ExamResultCard";
import { UserRegistration, Question, AnswerDetail } from "./types";
import { QUESTION_BANK } from "./data/questions";

type Step = "registration" | "loading" | "exam" | "results";

export default function App() {
  const [step, setStep] = useState<Step>("registration");
  const [registration, setRegistration] = useState<UserRegistration | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswerDetail[]>([]);
  const [timeSpent, setTimeSpent] = useState<string>("00:00");
  const [loadingText, setLoadingText] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Trigger when form is submitted
  const handleRegistrationSubmit = async (data: UserRegistration) => {
    setRegistration(data);
    setStep("loading");
    setLoadingText("Generando tu examen personalizado...");
    setError(null);

    try {
      // Small artificial delay for premium loading experience (vibe)
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      await delay(800);

      setLoadingText("Sincronizando banco de preguntas...");
      
      const headers: Record<string, string> = {
        "Accept": "application/json"
      };

      let fetchedQuestions: Question[] = [];
      try {
        const response = await fetch("/api/questions", { headers });
        if (response.ok) {
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const result = await response.json();
            if (result.questions && Array.isArray(result.questions) && result.questions.length > 0) {
              fetchedQuestions = result.questions;
            }
          } else {
            console.warn("Servidor devolvió contenido no-JSON para /api/questions, usando banco local.");
          }
        } else {
          console.warn("La respuesta del servidor no fue OK. Se utilizará el banco de preguntas local.");
        }
      } catch (err) {
        console.warn("No se pudo conectar con el servidor para obtener las preguntas, usando banco de preguntas local:", err);
      }

      await delay(600);

      if (fetchedQuestions.length === 0) {
        // Select 40 questions proportionally by block (37.5% block 1, 37.5% block 2, 25% block 3)
        const getBlockIndexForApp = (category: string, questionId: number): number => {
          const cat = (category || "").toLowerCase();
          if (questionId >= 1 && questionId <= 54) return 1;
          if (questionId >= 55 && questionId <= 108) return 2;
          if (questionId >= 109 && questionId <= 147) return 3;
          if (cat.includes("mecánica") || cat.includes("mecanica") || cat.includes("kit") || cat.includes("bloque 1")) return 1;
          if (cat.includes("situación") || cat.includes("situacion") || cat.includes("vial") || cat.includes("comportamiento") || cat.includes("maniobra") || cat.includes("señal") || cat.includes("senal") || cat.includes("auxilio") || cat.includes("riesgo") || cat.includes("pasiva") || cat.includes("prelación") || cat.includes("prelacion") || cat.includes("bloque 2")) return 2;
          return 3;
        };

        const b1 = QUESTION_BANK.filter(q => getBlockIndexForApp(q.category, q.id) === 1);
        const b2 = QUESTION_BANK.filter(q => getBlockIndexForApp(q.category, q.id) === 2);
        const b3 = QUESTION_BANK.filter(q => getBlockIndexForApp(q.category, q.id) === 3);

        const shuffleArray = (arr: typeof QUESTION_BANK) => [...arr].sort(() => 0.5 - Math.random());

        // Target: 15 from block 1, 15 from block 2, 10 from block 3
        const selected1 = shuffleArray(b1).slice(0, 15);
        const selected2 = shuffleArray(b2).slice(0, 15);
        const selected3 = shuffleArray(b3).slice(0, 10);

        fetchedQuestions = shuffleArray([...selected1, ...selected2, ...selected3]);
        console.log("Banco de preguntas local cargado con éxito en el cliente:", fetchedQuestions.length);
      }

      if (fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        setStep("exam");
      } else {
        throw new Error("No hay preguntas disponibles para iniciar la evaluación.");
      }
    } catch (err) {
      console.error("Error al iniciar el examen:", err);
      let errMsg = err instanceof Error ? err.message : "Fallo de conexión. Por favor reintente.";
      if (errMsg.includes("is not valid JSON") || errMsg.includes("Unexpected token")) {
        errMsg = "Error de formato en la respuesta del servidor. Por favor reintente.";
      }
      setError(errMsg);
      setStep("registration");
    }
  };

  // Trigger when exam is finished
  const handleExamComplete = (examAnswers: AnswerDetail[], elapsed: string) => {
    setAnswers(examAnswers);
    setTimeSpent(elapsed);
    setStep("results");
  };

  // Restart the process
  const handleRestart = () => {
    setRegistration(null);
    setQuestions([]);
    setAnswers([]);
    setTimeSpent("00:00");
    setStep("registration");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* Sleek Global Header */}
      <Header />

      {/* Global Error Banner */}
      {error && (
        <div className="bg-rose-50 border-b border-rose-100 text-rose-800 px-6 py-3.5 text-xs flex items-center gap-2 font-medium print:hidden">
          <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Dynamic Viewport */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        {step === "registration" || step === "loading" ? (
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Brand Column */}
            <div className="col-span-1 lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Plataforma de Certificación
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1]">
                EVALUACIÓN <span className="text-blue-600">TEÓRICA</span> PARA CONDUCTORES
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Bienvenido al portal oficial de evaluación técnica. Complete la información requerida para habilitar su examen de 40 preguntas.
              </p>

              {/* Informative Auto-Sync Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-800">
                  <Database className="w-5 h-5 text-emerald-600 animate-pulse" />
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-700">
                    Sincronización Automática
                  </h4>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tus respuestas y resultados finales se guardarán de manera <strong>100% automática</strong> y segura en el servidor central de Google Sheets al finalizar la prueba, sin necesidad de iniciar sesión o conectar una cuenta de Google.
                </p>

                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col items-start">
                    <div className="text-blue-600 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-900 uppercase">Duración</div>
                    <div className="text-xs text-slate-500">45 Minutos</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col items-start">
                    <div className="text-blue-600 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-900 uppercase">Aprobación</div>
                    <div className="text-xs text-slate-500">Min. 80/100</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Column */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step === "registration" && (
                  <motion.div
                    key="registration-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <RegistrationForm onSubmit={handleRegistrationSubmit} />
                  </motion.div>
                )}

                {step === "loading" && (
                  <motion.div
                    key="loading-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-[32px] shadow-2xl shadow-blue-900/10 border border-slate-100 p-8 sm:p-12 text-center w-full flex flex-col items-center justify-center min-h-[400px]"
                  >
                    {/* Visual loading wheel */}
                    <div className="relative flex items-center justify-center mb-8">
                      <div className="absolute w-20 h-20 border-4 border-slate-100 rounded-full" />
                      <div className="absolute w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                      >
                        <Compass className="w-10 h-10 text-blue-600" />
                      </motion.div>
                    </div>

                    <h3 className="font-sans font-bold text-xl text-slate-900">
                      Preparando Evaluación
                    </h3>
                    
                    {/* Pulsing loading subtitle text */}
                    <motion.p 
                      className="text-xs sm:text-sm text-slate-500 mt-2 font-medium"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      {loadingText}
                    </motion.p>

                    {/* Subtext info */}
                    <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl max-w-xs mx-auto">
                      <p className="text-xs text-blue-700 leading-relaxed">
                        Recuerda que cada examen consta de <strong>40 preguntas</strong> seleccionadas de forma aleatoria para garantizar la integridad de la prueba.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {step === "exam" && (
                <motion.div
                  key="exam-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex flex-col"
                >
                  {/* Minimal Header for exam mode */}
                  <div className="text-center mb-6">
                    <span className="font-semibold text-[10px] text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
                      Examen en Curso
                    </span>
                    <h1 className="font-sans font-extrabold text-2xl text-slate-900 mt-1 uppercase">
                      Evaluación Teórica
                    </h1>
                  </div>

                  <ExamSession 
                    questions={questions} 
                    userName={registration?.nombreCompleto || ""}
                    onComplete={handleExamComplete} 
                  />
                </motion.div>
              )}

              {step === "results" && registration && (
                <motion.div
                  key="results-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <ExamResultCard 
                    registration={registration}
                    answers={answers}
                    timeSpent={timeSpent}
                    onRestart={handleRestart}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Sleek Global Footer */}
      <footer className="p-6 text-center text-slate-400 text-xs border-t border-slate-200 bg-white print:hidden">
        © 2026 INSCOLSST - SIEC Sistema Integral de Evaluación de Competencias para la Conducción. Todos los derechos reservados.
      </footer>
    </div>
  );
}
