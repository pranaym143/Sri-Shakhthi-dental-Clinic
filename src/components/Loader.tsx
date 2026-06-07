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
          <div className="relative z-10 w-28 h-28 rounded-full glass-panel flex items-center justify-center border border-cyan-500/25 shadow-2xl shadow-cyan-500/10 [perspective:800px] overflow-hidden">
            {/* Background HUD Calibration Layer (Static alignment) */}
            <svg
              className="absolute w-20 h-20 opacity-30 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Calibration Target Rings */}
              <circle cx="50" cy="50" r="42" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="1 5" />
              <circle cx="50" cy="50" r="28" stroke="#0891b2" strokeWidth="0.75" strokeDasharray="3 3" />
              
              {/* Horizontal & Vertical Dental Axes */}
              <line x1="10" y1="50" x2="90" y2="50" stroke="#0891b2" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#0891b2" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>

            {/* Rotating 3D Tooth Model Layer */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              animate={{ 
                rotateY: [0, 360],
                y: [0, -4, 0]
              }}
              transition={{ 
                rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-20 h-20 flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]"
            >
              <svg
                className="w-16 h-16"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Brilliant glowing neon cyan/blue gradient */}
                  <linearGradient id="neonToothGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#0891b2" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.15" />
                  </linearGradient>
                  
                  <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                    <stop offset="70%" stopColor="#0284c7" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Glow Sphere Behind */}
                <circle cx="50" cy="50" r="34" fill="url(#neonGlow)" />

                {/* Transparent Blue Glowing Tooth Contour */}
                <path
                  d="M32 28C32 18 42 16 50 19C58 16 68 18 68 28C68 41 64 55 60 70C59 74 57 84 54 84C51 84 50 76 48 72C46 76 45 84 42 84C39 84 37 74 36 70C32 55 28 41 28 28Z"
                  fill="url(#neonToothGrad)"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_10px_#22d3ee]"
                />

                {/* Inner transparent structural lines representing dentin & pulp canal */}
                <path
                  d="M38 32C38 25 44 23 50 25C56 23 62 25 62 32C62 42 59 52 56 63C55 66 54 71 52 71C50 71 49 66 48 63C47 66 46 71 44 71C42 71 41 66 40 63C37 52 38 42 38 32Z"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                  fill="none"
                  strokeDasharray="2 2"
                />

                {/* Pulp cavity / Root Canal Core (High-tech transparent pulse) */}
                <path
                  d="M48 35C48 32 49 31 50 31C51 31 52 32 52 35C52 42 53 48 54 54C54 56 53 58 52 58C51 58 50 56 50 54C50 56 49 58 48 58C47 58 46 56 46 54C47 48 48 42 48 35Z"
                  fill="#22d3ee"
                  fillOpacity="0.5"
                  stroke="#67e8f9"
                  strokeWidth="1"
                  className="animate-pulse"
                />

                {/* Aesthetic light reflections on the enamel */}
                <path
                  d="M32.5 32C33 24 40 21 47 22"
                  stroke="#e0f2fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />

                <path
                  d="M60 40C62 48 61 56 59 62"
                  stroke="#e0f2fe"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeOpacity="0.6"
                />
              </svg>
            </motion.div>
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
