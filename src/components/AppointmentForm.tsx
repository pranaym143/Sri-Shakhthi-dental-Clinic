import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Phone, User, Settings, ArrowRight, CheckCircle, Sparkles, AlertCircle, Bookmark, Tag } from "lucide-react";
import { AppointmentInput } from "../types";
import { SERVICES } from "../data";

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentInput>({
    name: "",
    phone: "",
    treatment: SERVICES[0].title,
    preferredDate: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name for the patient record.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg("Please provide a valid diagnostic contact number.");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg("Please pick a preferred slot for your dental assessment.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API response / booking generation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      setBookingId(`SSD-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 md:p-10 border border-slate-800 relative z-10 space-y-6"
          >
            {/* Ambient gold corner accent */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-cyan-500/5 blur-3xl rounded-full" />

            <div className="text-center space-y-2 pb-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
                EXCLUSIVE ENROLLMENT
              </span>
              <h3 className="font-serif text-2xl md:text-3.5xl text-slate-100 font-light">
                Request a Private <span className="text-gold-gradient font-normal">Consultation</span>
              </h3>
              <p className="text-xs text-slate-400 font-sans max-w-lg mx-auto">
                Secure your slot at Sri Shakthi Dental Clinic & Implant Centre. Our medical concierge returns your call within 15 minutes.
              </p>
            </div>

            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-xl text-xs flex items-center space-x-2.5"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Patient Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Anirudh Reddy"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/65 rounded-xl border border-slate-800 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 text-slate-200 placeholder:text-slate-600 transition"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Contact Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 63030 53196"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/65 rounded-xl border border-slate-800 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 text-slate-200 placeholder:text-slate-600 transition"
                  />
                </div>
              </div>

              {/* Treatment Required */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Diagnostic Treatment Service
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Tag className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/65 rounded-xl border border-slate-800 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 text-slate-300 transition appearance-none"
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.title} className="bg-slate-950 text-slate-300">
                        {serv.title} ({serv.category})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                    <Settings className="w-4 h-4 animate-spin-slow" />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Preferred Appointment Date <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/65 rounded-xl border border-slate-800 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 text-slate-300 transition date-input"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Secondary Clinical Notes or Dental Complaints (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                placeholder="Briefly state sensitivity, missing tooth history, or previous root canal procedures."
                className="w-full p-4 bg-slate-950/65 rounded-xl border border-slate-800 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 text-slate-200 placeholder:text-slate-600 transition"
              />
            </div>

            {/* Custom Interactive Agreement */}
            <p className="text-[10px] text-slate-500 text-center">
              By requesting an appointment, you register for the premium biological dental diagnostic sequence. Bio-sterility standards strictly maintained.
            </p>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-medium text-xs uppercase tracking-widest font-sans transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 active:scale-98 disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{isSubmitting ? "GENERATING PASS..." : "SECURE MY PRIORITY PASS"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-500/15 text-center space-y-6 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full" />

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/35 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-amber-300 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] text-amber-400 uppercase">
                ADMISSION CONFIRMED
              </span>
              <h3 className="font-serif text-3xl font-light text-slate-100">
                Clinical Pass <span className="text-gold-gradient font-normal">Generated</span>
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Your medical record is activated. Your priority counseling voucher is ready for reference below.
              </p>
            </div>

            {/* Boardroom style ticket pass */}
            <div className="max-w-md mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 text-left overflow-hidden relative shadow-2xl">
              {/* Ticket side notches */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950 border-r border-slate-800 z-10" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950 border-l border-slate-800 z-10" />
              
              {/* Ticket top bar */}
              <div className="bg-gradient-to-r from-amber-500/15 via-slate-900 to-cyan-500/15 p-4 border-b border-slate-900 flex justify-between items-center">
                <span className="font-mono text-[9px] text-slate-400 tracking-wider">SRI SHAKTHI PREMIUM DENTAL</span>
                <span className="font-mono text-xs text-amber-300 font-semibold">{bookingId}</span>
              </div>

              {/* Ticket main body */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500">PATIENT DETAIL</span>
                    <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">{formData.name}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500">CONTACT</span>
                    <span className="text-xs font-mono text-slate-300">{formData.phone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500">REQUESTED SERVICE</span>
                    <span className="text-xs font-semibold text-cyan-400">{formData.treatment}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500">APPOINTMENT SLOT</span>
                    <span className="text-xs font-mono text-amber-300">{formData.preferredDate}</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-800 pt-3 flex justify-between items-center">
                  <div className="flex items-center space-x-1 text-[9px] font-mono text-slate-500">
                    <Bookmark className="w-3 h-3 text-amber-400" />
                    <span>PRIORITY CODE 104-CLASS A</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-1 h-1 rounded-full bg-green-400 animate-ping" />
                    <span className="text-[8px] font-mono text-green-400 uppercase">Awaiting Concierge Call</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-2">
              <button
                onClick={() => setIsCompleted(false)}
                className="px-6 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 text-xs text-slate-400 transition font-mono uppercase tracking-wider"
              >
                REQUEST SECOND SLOT
              </button>
              <a
                href="https://wa.me/916303053196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-emerald-600/95 hover:bg-emerald-500 text-slate-100 text-xs font-semibold uppercase tracking-wider transition inline-flex items-center space-x-2"
              >
                <span>SPEED UP VIA WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
