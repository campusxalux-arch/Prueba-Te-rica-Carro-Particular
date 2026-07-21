/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Compass, 
  AlertCircle, 
  Wifi, 
  Signal, 
  Battery 
} from "lucide-react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import ExamSession from "./components/ExamSession";
import ExamResultCard from "./components/ExamResultCard";
import { UserRegistration, Question, AnswerDetail } from "./types";
import { QUESTION_BANK, getRandomQuestions } from "./data/questions";

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
        fetchedQuestions = getRandomQuestions(QUESTION_BANK);
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
    <div className="min-h-screen bg-slate-900 sm:bg-slate-950 flex flex-col items-center justify-center font-sans text-slate-800 p-0 sm:p-4 print:p-0 print:bg-white">
      {/* Smartphone Device Frame Container */}
      <div className="w-full max-w-md sm:max-w-[430px] min-h-screen sm:min-h-[820px] sm:max-h-[900px] sm:my-auto sm:rounded-[44px] sm:border-[8px] sm:border-slate-800/90 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-slate-50 flex flex-col relative overflow-hidden transition-all print:border-none print:shadow-none print:m-0 print:max-w-none print:rounded-none print:bg-white print:h-auto print:max-h-none">
        
        {/* Smartphone Status Bar (Top bar) */}
        <div className="bg-[#032363] text-white px-5 pt-2 pb-1.5 flex items-center justify-between text-[11px] font-semibold tracking-tight select-none shrink-0 print:hidden">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 opacity-90">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Co-Branded Header */}
        <Header />

        {/* Global Error Banner */}
        {error && (
          <div className="bg-rose-50 border-b border-rose-100 text-rose-800 px-4 py-2.5 text-xs flex items-center gap-2 font-medium shrink-0 print:hidden">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Main Mobile App Scrollable Body */}
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          <AnimatePresence mode="wait">
            {step === "registration" && (
              <motion.div
                key="registration-step"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full space-y-3"
              >
                {/* Mobile Hero Badge & Header */}
                <div className="text-center pt-1 pb-1">
                  <span className="inline-block px-3 py-1 bg-blue-100/80 text-blue-800 text-[10px] font-extrabold rounded-full uppercase tracking-wider mb-1.5">
                    Evaluación de Conductores
                  </span>
                  <h1 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-snug">
                    Evaluación <span className="text-blue-600">Teórica</span>
                  </h1>
                </div>

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
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 text-center w-full flex flex-col items-center justify-center my-auto min-h-[360px]"
              >
                <div className="relative flex items-center justify-center mb-6">
                  <div className="absolute w-16 h-16 border-4 border-slate-100 rounded-full" />
                  <div className="absolute w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  >
                    <Compass className="w-8 h-8 text-blue-600" />
                  </motion.div>
                </div>

                <h3 className="font-sans font-bold text-lg text-slate-900">
                  Preparando Evaluación
                </h3>

                <motion.p 
                  className="text-xs text-slate-500 mt-1.5 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  {loadingText}
                </motion.p>

                <div className="mt-6 p-3.5 bg-blue-50/80 border border-blue-100 rounded-2xl text-left">
                  <p className="text-[11px] text-blue-800 leading-relaxed">
                    Cada examen consta de <strong>40 preguntas</strong> seleccionadas aleatoriamente: <strong>8 Mecánica</strong>, <strong>12 Conducción</strong>, <strong>10 Infraestructura</strong> y <strong>10 Normativa</strong>.
                  </p>
                </div>
              </motion.div>
            )}

            {step === "exam" && (
              <motion.div
                key="exam-step"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col"
              >
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
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
        </main>

        {/* Smartphone Bottom Home Bar */}
        <div className="py-2.5 bg-slate-50 shrink-0 print:hidden text-center">
          <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

