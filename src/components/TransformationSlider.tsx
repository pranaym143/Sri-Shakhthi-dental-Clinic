import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, HelpCircle, Activity, Star } from "lucide-react";

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // High quality premium dentists images to compare
  const beforeUrl = "/src/assets/images/damaged_tooth_before_1780826015008.png"; // Stained version
  const afterUrl = "/src/assets/images/restored_tooth_after_1780826029787.png"; // Perfect restored version

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl glass-panel rounded-3xl p-6 md:p-10 border border-slate-800/80 shadow-2xl relative overflow-hidden">
        {/* Dynamic ambient backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-300 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest border border-amber-500/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE COSMETIC SEAL</span>
            </span>

            <h3 className="font-serif text-3xl md:text-4xl text-slate-100 font-light leading-tight">
              Aesthetic and Functional <span className="text-gold-gradient font-normal">Symmetry</span>
            </h3>

            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Drag the golden timeline cursor to interactively preview our bio-engineered veneers mockup. Our restorative procedures mathematically balance the incisal curves, lip frame lines, and golden proportion values (1:1.618 ratio).
            </p>

            {/* Micro Stats inside slider panel */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-900 flex flex-col justify-center">
                <span className="text-2xl font-light text-cyan-400 font-serif">100%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Symmetry Matched</span>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-900 flex flex-col justify-center">
                <span className="text-2xl font-light text-amber-300 font-serif">8+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Shades Enhanced</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>Micro-structured IPS Empress Glass Veneers</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>Gum tissue lasers matching complete biomechanics</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>Zirconia structural implant framework</span>
              </div>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={containerRef}
              className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-800 shadow-3xl"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After: Perfect radiant state */}
              <img
                src={afterUrl}
                alt="After Sri Shakthi Smile Makeover"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-4 bottom-4 z-25 bg-emerald-500/80 backdrop-blur-md border border-emerald-400/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-emerald-100 uppercase">
                AFTER CARE
              </div>

              {/* Before: Distressed / Stained state (Rendered using high-quality custom filters so it feels ultra realistic) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-full h-full min-w-[300px] md:min-w-[500px]">
                  <img
                    src={beforeUrl}
                    alt="Before Sri Shakthi Dental Therapy"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ width: containerRef.current?.getBoundingClientRect().width }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute left-4 bottom-4 z-25 bg-amber-600/80 backdrop-blur-md border border-amber-400/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-amber-100 uppercase">
                  BEFORE TREATMENT
                </div>
              </div>

              {/* Drag line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-600 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center shadow-2xl z-40">
                  <div className="flex flex-col items-center justify-center space-y-0.5">
                    <span className="font-mono text-[8px] font-bold text-amber-300 tracking-tighter uppercase leading-none">DRAG</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions overlay */}
              <div className="absolute top-4 left-4 z-25 bg-slate-950/60 backdrop-blur-md rounded-lg p-2 flex items-center space-x-1.5 border border-slate-800">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="text-[10px] font-mono text-slate-300 tracking-wider">INTERACTIVE DIGITAL ANALYSIS</span>
              </div>
            </div>

            {/* Slider Hints */}
            <div className="flex items-center space-x-2 mt-4 text-[11px] font-mono text-slate-500">
              <span>Swipe or drag the handle to inspect tissue and tone differences.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
