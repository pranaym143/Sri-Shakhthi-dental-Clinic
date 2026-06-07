import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["ARTISTRY", "PRECISION", "OSSEOINTEGRATION", "AESTHETICS", "SRI SHAKTHI"];

  useEffect(() => {
    // Dynamic countdown speed
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        const diff = Math.floor(Math.random() * 4) + 2;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#030308] p-8 md:p-16 select-none"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center w-full">
        <span className="font-mono text-xs text-slate-500 tracking-[0.25em]">
          SRI SHAKTHI CLINICAL SUITE V1.0
        </span>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400">CONNECTING MEDICAL CORE</span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="relative mb-8 flex justify-center items-center">
          {/* Decorative Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 border border-dashed border-cyan-500/15 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-44 h-44 border border-cyan-500/5 rounded-full"
          />
          
          {/* Brand Mark Logo */}
          <div className="relative z-10 w-24 h-24 rounded-full glass-panel flex items-center justify-center border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <svg
              className="w-10 h-10 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.958 0-5.747-.951-8.026-2.582m16.052 0C19.29 15.11 15.931 18 12 18c-3.93 0-7.29-2.89-8.026-7.582"
              />
            </svg>
          </div>
        </div>

        {/* Morphing Word Tracker */}
        <div className="h-12 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentWordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-light text-slate-200"
            >
              {words[currentWordIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="font-mono text-[10px] text-slate-500 tracking-[0.15em] mt-2 uppercase">
          Synthesizing Luxury Bio-Acoustics
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="w-full flex flex-col space-y-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-slate-500 tracking-[0.1em]">ESTABLISHING TRUST</span>
            <span className="font-sans text-xs text-slate-400 font-medium">99.1% Digital Accuracy Guaranteed</span>
          </div>
          <span className="text-4xl md:text-6xl font-serif font-light text-cyan-400 tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-[2px] w-full bg-slate-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-amber-300"
          />
        </div>
      </div>
    </motion.div>
  );
}
