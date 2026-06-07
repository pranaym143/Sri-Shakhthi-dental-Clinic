import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Maximize, 
  Activity, 
  Sparkles, 
  UserCheck, 
  Heart, 
  Award, 
  Grid, 
  XCircle, 
  Layers, 
  Compass, 
  LifeBuoy, 
  Smile, 
  AlertTriangle,
  ArrowRight,
  Clock,
  Check
} from "lucide-react";
import { Service } from "../types";

// Dynamic Icon Lookup to resolve Lucide dynamically
const iconMap: { [key: string]: any } = {
  ShieldCheck,
  Maximize,
  Activity,
  Sparkles,
  UserCheck,
  Heart,
  Award,
  Grid,
  XCircle,
  Layers,
  Compass,
  LifeBuoy,
  Smile,
  AlertTriangle,
};

interface ServiceCardProps {
  service: Service;
  onSelectAction: (service: Service) => void;
}

export default function ServiceCard({ service, onSelectAction }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[service.iconName] || ShieldCheck;

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectAction(service)}
      className="relative h-[440px] rounded-3xl overflow-hidden glass-panel-interactive cursor-pointer group border border-slate-800/80 flex flex-col justify-between"
    >
      {/* Background Image holding procedure */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-15 group-hover:scale-110 group-hover:opacity-[0.25] transition-all duration-700 ease-out filter grayscale hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        {/* Deep luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03040b] via-[#03040b]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03040b] to-transparent z-10" />
      </div>

      {/* Card Header Info */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col space-y-4">
        {/* Category & Badge */}
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/15">
            {service.category}
          </span>
          <div className="flex items-center space-x-1.5 text-slate-500 font-mono text-[9px]">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Dynamic Icon */}
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-cyan-400 group-hover:text-amber-400 transition-colors duration-500 shadow-md">
          <IconComponent className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h4 className="font-serif text-xl text-slate-100 font-light group-hover:text-cyan-300 transition-colors duration-300">
            {service.title}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Expandable clinical parameters */}
      <div className="relative z-10 p-6 md:p-8 pt-0 space-y-4">
        {/* Divider line */}
        <div className="w-full h-[1px] bg-slate-900 group-hover:bg-cyan-500/20 transition-all duration-500" />

        {/* Benefits list (Revealing on desktop hover optionally, always visible on mobile) */}
        <div className="space-y-2">
          {service.benefits.slice(0, 2).map((benefit, i) => (
            <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-300">
              <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
              <span className="font-sans font-light truncate">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Quick Action Button */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors">
            TAP FOR CLINICAL DETAILS
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 group-hover:bg-amber-400 group-hover:border-amber-400 flex items-center justify-center transition-all duration-500">
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
