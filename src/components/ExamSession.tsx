/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  Volume2, 
  VolumeX 
} from "lucide-react";
import { Question, AnswerDetail } from "../types";

interface ExamSessionProps {
  questions: Question[];
  onComplete: (details: AnswerDetail[], timeSpent: string) => void;
  userName: string;
}

export default function ExamSession({ questions, onComplete, userName }: ExamSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState<AnswerDetail[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Stats
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  // Timer state
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start timer on mount
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Format seconds to MM:SS
  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex) / questions.length) * 100);

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return; // Prevent double clicks or changes

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    // Play subtle audio synth feedback using Web Audio API! (Highly Professional)
    if (soundEnabled) {
      playFeedbackBeep(isCorrect);
    }

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }

    // Save answer detail
    const newAnswer: AnswerDetail = {
      preguntaId: currentQuestion.id,
      pregunta: currentQuestion.question,
      elegida: currentQuestion.options[optionIndex],
      correcta: currentQuestion.options[currentQuestion.correctAnswer],
      esCorrecta: isCorrect,
      category: currentQuestion.category
    };

    setAnswers((prev) => [...prev, newAnswer]);
  };

  const handleNext = () => {
    if (!isAnswered) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Exam finished
      if (timerRef.current) clearInterval(timerRef.current);
      onComplete(answers, formatTime(secondsElapsed));
    }
  };

  // Web Audio API feedback
  const playFeedbackBeep = (isCorrect: boolean) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      if (isCorrect) {
        // High pleasant pitch for correct
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        // Low buzzer pitch for incorrect
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = "triangle";
        osc.frequency.setValueAtTime(220.0, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(146.83, ctx.currentTime + 0.15); // D3
        
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      console.warn("Audio Context block by browser:", e);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 pb-12">
      {/* Top Header stats */}
      <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm p-4 mb-4 border border-slate-100">
        <div className="flex items-center gap-2 text-slate-600">
          <Clock className="w-4 h-4 text-blue-500 animate-pulse" />
          <span className="font-mono font-bold text-slate-800 text-sm">
            {formatTime(secondsElapsed)}
          </span>
        </div>
        
        <div className="flex gap-3 text-xs font-bold font-mono">
          <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">
            Correctas: {correctCount}
          </span>
          <span className="px-2 py-1 bg-rose-50 text-rose-600 rounded-lg">
            Incorrectas: {incorrectCount}
          </span>
        </div>

        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          title={soundEnabled ? "Silenciar" : "Activar sonido"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Progress Bar Container */}
      <div className="mb-5 bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="bg-blue-600 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Runner Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className={`bg-white rounded-3xl shadow-lg border border-slate-100 p-6 relative overflow-hidden ${
            isAnswered && selectedOption !== currentQuestion.correctAnswer ? "animate-shake" : ""
          }`}
        >
          {/* Question Meta tags */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono tracking-widest bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full uppercase font-bold">
              {currentQuestion.category}
            </span>
            <span className="text-xs font-bold text-slate-400">
              Pregunta {currentIndex + 1} de {questions.length}
            </span>
          </div>

          {/* Question Text */}
          <h3 className="text-base font-bold text-slate-800 leading-snug mb-6">
            {currentQuestion.question}
          </h3>

          {/* Options list */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctAnswer;
              
              let buttonStyle = "border-slate-100 bg-slate-50 hover:bg-slate-100/70 hover:border-slate-200 text-slate-700";
              let iconElement = <HelpCircle className="w-5 h-5 text-slate-300 shrink-0" />;

              if (isAnswered) {
                if (isCorrect) {
                  // Always highlight correct answer in green
                  buttonStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-800 font-medium";
                  iconElement = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
                } else if (isSelected) {
                  // Selected incorrect option highlighted in red
                  buttonStyle = "border-rose-500 bg-rose-50/80 text-rose-800 font-medium";
                  iconElement = <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
                } else {
                  // Non-selected options are dimmed slightly
                  buttonStyle = "border-slate-100 bg-slate-50/40 text-slate-400 opacity-60 cursor-not-allowed";
                  iconElement = <div className="w-5 h-5 rounded-full border border-slate-200 shrink-0" />;
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-left rounded-2xl border px-4 py-3.5 text-xs sm:text-sm flex items-start gap-3 transition-all duration-200 ${buttonStyle} ${
                    !isAnswered ? "active:scale-[0.99] cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="font-mono font-bold text-xs uppercase bg-white border border-slate-200 rounded-lg w-6 h-6 flex items-center justify-center shrink-0 shadow-sm text-slate-500">
                    {String.fromCharCode(97 + idx)}
                  </span>
                  <span className="flex-1 mt-0.5 leading-tight">{option}</span>
                  {iconElement}
                </button>
              );
            })}
          </div>

          {/* Immediate Evaluation Feedback banner */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-6 p-4 rounded-2xl border flex items-center gap-3 ${
                  selectedOption === currentQuestion.correctAnswer
                    ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                    : "bg-rose-50 border-rose-100 text-rose-800"
                }`}
              >
                {selectedOption === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">✅ ¡Respuesta Correcta!</h4>
                      <p className="text-[11px] opacity-90 leading-tight">Excelente trabajo. Sigue así para asegurar tu aprobación.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">❌ Respuesta Incorrecta</h4>
                      <p className="text-[11px] opacity-90 leading-tight">La respuesta correcta era: <strong className="font-semibold">"{currentQuestion.options[currentQuestion.correctAnswer]}"</strong></p>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Control Actions / Next Button */}
      <div className="mt-5 flex justify-end">
        {isAnswered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all duration-200 cursor-pointer text-sm sm:text-base"
          >
            {currentIndex < questions.length - 1 ? (
              <>
                Siguiente Pregunta
                <ArrowRight className="w-5 h-5 text-blue-200" />
              </>
            ) : (
              <>
                Finalizar Evaluación
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
