import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Phone, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  Clock, 
  Compass, 
  HeartHandshake, 
  Activity, 
  Cpu, 
  Maximize, 
  CheckSquare, 
  Layers, 
  MessageSquare, 
  Star,
  Check,
  CheckCircle,
  Scan,
  Zap,
  Info,
  CalendarDays
} from "lucide-react";

import { SERVICES, TESTIMONIALS, CHOICE_FEATURES, JOURNEY_STEPS, STATS, IMAGES } from "./data";
import { Service } from "./types";

import Loader from "./components/Loader";
import TransformationSlider from "./components/TransformationSlider";
import AppointmentForm from "./components/AppointmentForm";
import InteractiveMap from "./components/InteractiveMap";
import ServiceCard from "./components/ServiceCard";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleJourneyIndex, setVisibleJourneyIndex] = useState<number>(0);

  // Stats numerical counter effect simulation
  const [counterTrigger, setCounterTrigger] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setCounterTrigger(true), 1200);
    }
  }, [isLoading]);

  // Handle service filtering
  const categories = ["All", "Implantology", "Aesthetic", "Restorations", "Oral Surgery", "Orthodontics", "Preventive"];
  const filteredServices = SERVICES.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  // Carousel actions
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Scroll handler helper to smooth-scroll
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative font-sans text-slate-100 bg-[#03040b] min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative min-h-screen flex flex-col justify-between"
        >
          {/* BACKGROUND CINEMATIC SPACE SHIELD */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Dynamic floating light blobs */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-700/5 blur-[150px] rounded-full animate-pulse-slow" />
            <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full" />
            {/* Clean grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          </div>

          {/* TOP EXQUISITE HEADER NAVIGATION */}
          <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
              {/* Logo / Title Brand */}
              <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-3 group text-left cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:border-cyan-400/40 group-hover:text-cyan-400 transition-all duration-500">
                  <span className="font-serif text-lg font-semibold tracking-wider">SS</span>
                </div>
                <div>
                  <h1 className="font-serif text-sm tracking-[0.08em] font-light text-slate-100 uppercase">
                    SRI SHAKTHI
                  </h1>
                  <span className="block text-[8px] font-mono tracking-[0.2em] text-[#d4af37]">
                    IMPLANT CENTRE
                  </span>
                </div>
              </button>

              {/* Desktop anchor links */}
              <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-widest text-slate-300">
                <button onClick={() => scrollToSection("about")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">ABOUT</button>
                <button onClick={() => scrollToSection("services")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">SERVICES</button>
                <button onClick={() => scrollToSection("features")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">CHOOSE US</button>
                <button onClick={() => scrollToSection("implant-centre")} className="hover:text-cyan-400 transition cursor-pointer uppercase text-cyan-500">IMPLANT SPOTLIGHT</button>
                <button onClick={() => scrollToSection("transformations")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">BEFORE & AFTER</button>
                <button onClick={() => scrollToSection("journey")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">JOURNEY</button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-[#d4af37] transition cursor-pointer uppercase">CONTACT</button>
              </nav>

              {/* Desktop quick dial button & Book Action */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="tel:+916303053196" className="flex items-center space-x-1.5 text-xs font-mono text-slate-300 hover:text-amber-300 transition">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 63030 53196</span>
                </a>

                <button
                  onClick={() => scrollToSection("booking")}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-450 to-yellow-600 text-slate-950 font-medium text-[10px] tracking-widest uppercase transition-transform hover:shadow-lg hover:shadow-amber-500/10 active:scale-97 cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>
              </div>

              {/* Mobile expansion trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-slate-100 transition"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Nav expanding drawer */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-[#03040b] border-b border-slate-800 text-left overflow-hidden"
                >
                  <div className="p-6 space-y-4 flex flex-col font-mono text-xs tracking-widest text-slate-300">
                    <button onClick={() => scrollToSection("about")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">ABOUT</button>
                    <button onClick={() => scrollToSection("services")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">SERVICES</button>
                    <button onClick={() => scrollToSection("features")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">CHOOSE US</button>
                    <button onClick={() => scrollToSection("implant-centre")} className="hover:text-[#d4af37] py-2 text-left text-cyan-400 cursor-pointer">IMPLANT SPOTLIGHT</button>
                    <button onClick={() => scrollToSection("transformations")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">BEFORE & AFTER</button>
                    <button onClick={() => scrollToSection("journey")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">JOURNEY</button>
                    <button onClick={() => scrollToSection("contact")} className="hover:text-[#d4af37] py-2 text-left cursor-pointer">CONTACT</button>
                    
                    <div className="border-t border-slate-900 pt-4 flex flex-col space-y-3">
                      <a href="tel:+916303053196" className="flex items-center space-x-2 text-slate-200">
                        <Phone className="w-4 h-4 text-amber-400" />
                        <span>+91 63030 53196</span>
                      </a>
                      <button
                        onClick={() => scrollToSection("booking")}
                        className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-medium text-[10px] tracking-wide uppercase"
                      >
                        BOOK APPOINTMENT
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* MAIN WRAPPER CONTAINER */}
          <main className="flex-grow z-10 w-full relative">

            {/* HERO SECTION: Transforming Smiles Through Advanced Dental Excellence */}
            <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center py-16 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual content on left */}
                <div className="lg:col-span-7 space-y-8 text-left z-10">
                  {/* Elite Academy Style Accent Banner */}
                  <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/15 text-cyan-300 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>THE APEX OF SURGICAL DENTISTRY</span>
                  </div>

                  <h2 className="font-serif text-4xl md:text-6xl text-slate-100 font-light leading-tight tracking-tight">
                    Transforming Smiles <br />
                    Through <span className="text-gold-gradient font-normal">Advanced</span> <br />
                    Dental Excellence
                  </h2>

                  <p className="text-sm md:text-base text-slate-400 font-light max-w-xl font-sans leading-relaxed">
                    Premium Dental Care, Expert Implant Solutions, and Personalized Restoration mapped mathematically using top-of-the-line 3D bio-imaging setups in Telangana.
                  </p>

                  {/* Trust Indicators lists directly inside Hero */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    {[
                      { title: "Advanced Implants", label: "Guided CBCT Map" },
                      { title: "Modern Equipment", label: "Micro-Surgical Lab" },
                      { title: "Expert Care", label: "Specialist Board" },
                      { title: "Custom Treatment", label: "1:1 Bio-Symmetry" }
                    ].map((item, index) => (
                      <div key={index} className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-900/80">
                        <span className="block text-[11px] font-medium text-slate-200">{item.title}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hero buttons actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      onClick={() => scrollToSection("booking")}
                      className="group px-7 py-4.5 rounded-xl bg-[#d4af37] text-[#03040b] font-medium text-xs uppercase tracking-widest font-sans flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/5 hover:brightness-110 active:scale-98 transition-all"
                    >
                      <span>SECURE AN APPOINTMENT</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="tel:+916303053196"
                      className="px-7 py-4.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950/50 hover:bg-slate-900/60 text-slate-200 text-xs font-semibold uppercase tracking-widest font-mono flex items-center justify-center space-x-2 transition"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>TELE-CONNECT NOW</span>
                    </a>
                  </div>
                </div>

                {/* Spectacular floating 3D Tooth Model graphic on right */}
                <div className="lg:col-span-5 flex justify-center items-center relative py-8">
                  {/* Absolute Ambient Rings glowing behind image */}
                  <div className="absolute w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
                  <div className="absolute w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

                  {/* Geometric ring overlays */}
                  <div className="absolute w-84 h-84 border border-slate-800/20 rounded-full animate-spin-slow" />
                  <div className="absolute w-96 h-96 border border-dashed border-cyan-500/10 rounded-full animate-pulse" />

                  {/* Interactive dental image render container with micro-interactive float anim */}
                  <div className="relative z-10 w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float border border-slate-800/80 p-3 bg-slate-950/40 backdrop-blur-sm">
                    <img
                      src={IMAGES.smilingHero}
                      alt="Sri Shakthi Patient Smile"
                      className="w-full h-full object-cover rounded-2xl pointer-events-none filter saturate-110 brightness-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Technical HUD Overlay on image to look ultra luxury */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating HUD Badges */}
                    <div className="absolute bottom-4 left-4 z-20 bg-slate-950/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800 text-left">
                      <div className="flex items-center space-x-1.5 text-[9px] text-[#d4af37] font-mono uppercase tracking-wider">
                        <Award className="w-3.5 h-3.5" />
                        <span>BIO-MIMETIC FIT</span>
                      </div>
                      <span className="block text-xs font-bold font-serif text-slate-100 uppercase tracking-wide mt-1">IPS EMPRESS COATING</span>
                    </div>

                    <div className="absolute top-4 right-4 z-20 bg-cyan-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 tracking-wider font-mono text-[9px] text-cyan-300 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>CBCT GUIDED ACTUATOR</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>


            {/* STATS COUNTDOWN NUMBERS OVERVIEW */}
            <section className="py-12 bg-slate-950/40 border-y border-slate-900 overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {STATS.map((stat, i) => (
                    <div key={i} className="text-center md:text-left space-y-1">
                      <div className="text-3xl md:text-5xl font-serif font-light text-cyan-400">
                        {counterTrigger ? stat.value : "---"}
                      </div>
                      <div className="text-xs font-serif font-medium text-slate-200 uppercase tracking-wide">
                        {stat.label}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>


            {/* ABOUT CLINIC NARRATIVE SECTION */}
            <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left image framing with clinical narrative overlay */}
                <div className="lg:col-span-6 relative">
                  <div className="absolute -top-10 -left-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="relative rounded-3xl overflow-hidden border border-slate-800 p-4 bg-slate-950/40">
                    <img
                      src={IMAGES.clinicHero}
                      alt="Sri Shakthi Dental Surgery Suite"
                      className="w-full h-[360px] md:h-[440px] object-cover rounded-2xl filter brightness-95"
                      referrerPolicy="no-referrer"
                    />

                    {/* Clinical Certifications Floating Panel */}
                    <div className="absolute bottom-8 right-8 bg-[#03040b]/90 backdrop-blur-md p-5 rounded-2xl border border-[#d4af37]/25 max-w-xs text-left">
                      <span className="text-[9px] font-mono tracking-widest text-amber-400 uppercase block mb-1">GLOBAL ACCREDITATION</span>
                      <h5 className="font-serif text-slate-100 text-sm font-semibold uppercase">OSSEOINTEGRATION COMPLIANT</h5>
                      <p className="text-[10px] text-slate-400 font-sans mt-2">
                        Fully verified implants in accordance with the International Congress of Oral Implantologists guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clinical History & Philosophy on Right */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    OUR HERITAGE
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-slate-100 font-light leading-tight">
                    Where Medical Mastery <br />
                    Meets <span className="text-gold-gradient font-normal">Biological Sculpting</span>
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    Sri Shakthi Dental Clinic & Implant Centre stands as an award-winning micro-surgery healthcare institution in Telangana. Under direct specialist management, we fuse titanium and lithium-disilicate crowns into perfect functional dental anatomy.
                  </p>

                  <div className="space-y-4 pt-2">
                    {/* Key features milestones */}
                    {[
                      {
                        title: "Advanced Guided Implants",
                        desc: "Aseptic laser-prepared computer guided surgeries minimizing pain and recovery periods to hours."
                      },
                      {
                        title: "Bespoke Facial Symmetry Matching",
                        desc: "We analyze mandibular bone ratios and optical smile coordinates for perfect teeth dimensions."
                      },
                      {
                        title: "Gold-Class Sterilization",
                        desc: "Pre-sterilized single-use specialized diagnostic kits and continuous HEPA filtered positive-pressure environment."
                      }
                    ].map((feat, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-slate-950/40 p-4 rounded-xl border border-slate-900/60 hover:border-slate-800 transition">
                        <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div>
                          <h6 className="text-xs font-serif text-slate-200 uppercase tracking-wider font-semibold">{feat.title}</h6>
                          <p className="text-[11px] text-slate-400 font-sans mt-1">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>


            {/* DENTAL SERVICES PORTFOLIO & SELECTION TABS */}
            <section id="services" className="py-24 bg-slate-950/20 border-t border-slate-900 relative px-6">
              <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Category Selection Tabs Bar */}
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
                    THE CLINICAL MATRIX
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    Premium Surgical & <span className="text-gold-gradient font-normal">Aesthetic Formats</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    Choose from our luxury medical procedures portfolio. We treat every micro-anatomical variation with specialized board experts.
                  </p>

                  {/* Filter tabs list */}
                  <div className="flex flex-wrap justify-center gap-2 pt-6">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4.5 py-2 rounded-lg font-mono text-[10px] tracking-widest uppercase transition-all border ${
                          activeCategory === cat
                            ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                            : "bg-slate-950/60 text-slate-400 border-slate-850 hover:text-slate-100 hover:border-slate-800"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated Portfolio Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredServices.map((service) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        layout
                      >
                        <ServiceCard
                          service={service}
                          onSelectAction={(s) => setSelectedService(s)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

              </div>
            </section>


            {/* CLINICAL SERVICE DETAIL MODAL OVERLAY */}
            <AnimatePresence>
              {selectedService && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl"
                >
                  {/* Backdrop Closer */}
                  <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedService(null)} />

                  <motion.div
                    initial={{ y: 50, scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    exit={{ y: 50, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 180 }}
                    className="relative w-full max-w-2xl bg-[#03040b] border border-amber-500/20 rounded-3xl p-6 md:p-8 overflow-hidden max-h-[85vh] overflow-y-auto"
                  >
                    {/* Top close button */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition z-30"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Dynamic Image in Modal */}
                    <div className="h-48 md:h-56 relative w-full rounded-2xl overflow-hidden border border-slate-800">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-full object-cover filter brightness-[45%] saturate-70"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03040b] to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/15">
                          {selectedService.category}
                        </span>
                        <h4 className="font-serif text-2xl text-slate-100 font-light mt-2">
                          {selectedService.title}
                        </h4>
                      </div>
                    </div>

                    {/* Body content */}
                    <div className="space-y-6 pt-6">
                      <div className="space-y-2">
                        <span className="block font-mono text-[10px] text-slate-500 uppercase">PROCEDURAL OVERVIEW</span>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {selectedService.description}
                        </p>
                      </div>

                      {/* Diagnostic criteria blocks */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-950 border border-slate-900/80 p-3.5 rounded-xl">
                          <span className="block text-[8px] font-mono text-slate-500 uppercase">TYPICAL TIMEFRAME</span>
                          <span className="text-xs font-serif font-light text-slate-200 mt-1 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" />
                            {selectedService.duration}
                          </span>
                        </div>
                        <div className="bg-slate-950 border border-slate-900/80 p-3.5 rounded-xl">
                          <span className="block text-[8px] font-mono text-slate-500 uppercase">AESTHETIC DEVIATION</span>
                          <span className="text-xs font-serif font-light text-slate-200 mt-1 flex items-center gap-1.5 font-bold text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                            Grade 1 Premium Bio-Fit
                          </span>
                        </div>
                      </div>

                      {/* Benefits checked details */}
                      <div className="space-y-3">
                        <span className="block font-mono text-[10px] text-slate-500 uppercase">CLINICAL STABILITY PERKS</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {selectedService.benefits.map((ben, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl text-xs text-slate-300 border border-slate-900">
                              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                              <span className="font-sans text-left">{ben}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-900">
                        <span className="text-[10px] font-mono text-slate-500 leading-none">Aseptic sterilization protocol strict.</span>
                        <button
                          onClick={() => {
                            setSelectedService(null);
                            scrollToSection("booking");
                          }}
                          className="px-6 py-3 rounded-lg bg-[#d4af37] text-[#03040b] font-medium text-[11px] tracking-widest uppercase transition-transform hover:brightness-110 active:scale-97 cursor-pointer"
                        >
                          REQUEST INTAKE NOW
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>


            {/* WHY CHOOSE US EXCLUSION FEATURES PANEL */}
            <section id="features" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
                    EXQUISITE CREDENTIALS
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    Why Discerning Patients Choose <br />
                    <span className="text-gold-gradient font-normal">Sri Shakthi</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    Fusing digital radiograph calculations, internationally certified titanium dental implants, and absolute neuromuscular safety protocols.
                  </p>
                </div>

                {/* Choices cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {CHOICE_FEATURES.map((feat) => {
                    return (
                      <div
                        key={feat.id}
                        className="bg-slate-950/40 border border-slate-900/85 hover:border-amber-400/25 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6 group transition duration-500"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase bg-amber-500/5 px-2.5 py-1 rounded-full border border-amber-500/10">
                              {feat.badge}
                            </span>
                          </div>

                          <h5 className="font-serif text-lg text-slate-200 font-light group-hover:text-cyan-300 transition-colors">
                            {feat.title}
                          </h5>

                          <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                            {feat.description}
                          </p>
                        </div>

                        {/* Aesthetic HUD marker */}
                        <div className="w-full h-[1px] bg-slate-900" />
                        <div className="flex items-center space-x-2 text-[9px] font-mono text-slate-500">
                          <Activity className="w-3.5 h-3.5 text-amber-500" />
                          <span>MAPPED TO 0.1MM TOLERANCE</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>


            {/* CLIENT IMPLANT CENTRE SHOWCASE SPOTLIGHT */}
            <section id="implant-centre" className="py-24 bg-slate-950/65 border-t border-slate-900 relative px-6 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual rendering graphic left */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4 lg:order-last">
                  <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden border border-amber-500/25 p-4 bg-slate-950/60 shadow-3xl">
                    <img
                      src={IMAGES.implantDetail}
                      alt="3D Titanium Implant System render"
                      className="w-full h-full object-contain filter invert-[5%] hover:scale-105 transition duration-700 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* HUD coordinates */}
                    <div className="absolute bottom-4 left-4 bg-[#03040b]/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                      <span className="block font-mono text-[8px] text-slate-500">SUTURE PATH</span>
                      <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">GUIDED CBCT RIG</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 text-center uppercase tracking-widest">
                    Fig 1.1 BIOLOGICAL INTEGRATION INTERFACE
                  </span>
                </div>

                {/* Information content right */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    IMPLANTOLOGY SPOTLIGHT
                  </span>

                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-100 font-light leading-tight">
                    Sri Shakthi Specialized <br />
                    <span className="text-gold-gradient font-normal">Biological Implant System</span>
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                    As Telangana's premier dedicated dental implant clinic, we specialize in immediate loading systems and premium cortical titanium roots. Our computerized osseointegration mapping ensures lifetime clinical safety.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Cpu className="w-5 h-5" />
                        <h6 className="font-serif text-xs font-semibold uppercase tracking-wider text-slate-200">CBCT Mapping</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        Complete anatomical mapping of nerve pathways and bone structure down to micrometric indices.
                      </p>
                    </div>

                    <div className="bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-400">
                        <ShieldCheck className="w-5 h-5" />
                        <h6 className="font-serif text-xs font-semibold uppercase tracking-wider text-slate-200">Titanium Alloys</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        Biocompatible titanium implants matching molecular bone structures for complete permanent integration.
                      </p>
                    </div>
                  </div>

                  {/* Quick features timeline list */}
                  <div className="space-y-3 pt-2 font-mono text-[11px] text-slate-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Immediate loading implants — Crown secured inside 72 Hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Computer guided templates avoiding excessive sutures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>99.1% documented global long-term osseointegration rate</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>


            {/* SMILE TRANSFORMATION GALLERY (BEFORE/AFTER SLIDER) */}
            <section id="transformations" className="py-24 px-6 relative max-w-7xl mx-auto w-full">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
                    RESTORED BIOMECHANICS
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    The Smile <span className="text-gold-gradient font-normal">Transformation</span> Gallery
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    Inspect actual anatomical changes. Use the slider tool to evaluate surface tissue and tone corrections built by our medical board.
                  </p>
                </div>

                {/* Comparison component wrapper */}
                <TransformationSlider />
              </div>
            </section>


            {/* TREATMENT EXPERIENCE JOURNEY TIMELINE */}
            <section id="journey" className="py-24 bg-slate-950/45 border-t border-slate-900 relative px-6">
              <div className="max-w-7xl mx-auto space-y-12">
                
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
                    CLINICAL SEQUENCE
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    The Patient Treatment <span className="text-gold-gradient font-normal">Journey</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    From digital panoramic consultation to dynamic alignment confirmation, expect zero anxiety and absolute professionalism.
                  </p>
                </div>

                {/* Interactive Journey Horizontal / Vertical board */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
                  
                  {/* Step pick triggers left */}
                  <div className="lg:col-span-5 space-y-3">
                    {JOURNEY_STEPS.map((step) => {
                      const isActive = visibleJourneyIndex === step.step - 1;
                      return (
                        <button
                          key={step.step}
                          onClick={() => setVisibleJourneyIndex(step.step - 1)}
                          className={`w-full text-left p-4.5 rounded-2xl flex items-center space-x-4 border transition duration-300 cursor-pointer ${
                            isActive
                              ? "bg-slate-950 border-cyan-800 text-slate-100 shadow-lg shadow-cyan-500/5"
                              : "bg-slate-950/40 border-slate-900/60 text-slate-400 hover:border-slate-800"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-semibold ${
                            isActive ? "bg-cyan-500 text-[#03040b]" : "bg-slate-900 text-slate-500"
                          }`}>
                            0{step.step}
                          </div>
                          <div>
                            <span className="block text-[9px] font-mono text-slate-500 uppercase">STAGE {step.step}</span>
                            <span className="text-xs font-serif font-light uppercase tracking-wide">{step.title}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Step Panel content rendering right */}
                  <div className="lg:col-span-7">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={visibleJourneyIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="glass-panel rounded-3xl p-6 md:p-10 border border-slate-800 text-left relative space-y-6 min-h-[340px] flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                                {JOURNEY_STEPS[visibleJourneyIndex].subtitle}
                              </span>
                              <h4 className="font-serif text-2xl font-light text-slate-100">
                                {JOURNEY_STEPS[visibleJourneyIndex].title}
                              </h4>
                            </div>
                            <span className="text-5xl font-serif font-light text-slate-800/60 leading-none">
                              0{JOURNEY_STEPS[visibleJourneyIndex].step}
                            </span>
                          </div>

                          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans font-light">
                            {JOURNEY_STEPS[visibleJourneyIndex].description}
                          </p>
                        </div>

                        {/* Extra bullets checkpoints */}
                        <div className="space-y-3 pt-4 border-t border-slate-900">
                          <span className="block font-mono text-[10px] text-slate-500 uppercase">
                            DIAGNOSTIC CRITERIA MET
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {JOURNEY_STEPS[visibleJourneyIndex].details.map((det, i) => (
                              <div key={i} className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                <span className="font-sans text-[10px] text-slate-300 leading-tight block truncate">
                                  {det}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            </section>


            {/* PREMIUM PATIENT TESTIMONIALS CAROUSEL */}
            <section id="testimonials" className="py-24 px-6 relative max-w-7xl mx-auto w-full">
              <div className="space-y-12">
                
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
                    CHRONICLED TRANSFORMATION
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    The Elite Patient <span className="text-gold-gradient font-normal">Endorsements</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    Durable smiles reviewed by senior medical professionals, artists, and business executives in Telangana.
                  </p>
                </div>

                {/* Animated Carousel wrapper card */}
                <div className="max-w-4xl mx-auto relative flex items-center justify-center">
                  
                  {/* Previous trigger */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-slate-100 text-slate-400 transition duration-300 z-10 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6 animate-pulse" />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="w-full bg-slate-950/60 rounded-3xl p-6 md:p-10 border border-slate-900 flex flex-col justify-between space-y-8 min-h-[280px]"
                    >
                      <div className="space-y-4">
                        {/* Rating stars & date */}
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-1">
                            {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                            ))}
                          </div>
                          <span className="font-mono text-[9px] text-slate-500">
                            {TESTIMONIALS[testimonialIndex].date}
                          </span>
                        </div>

                        {/* Comment text */}
                        <p className="font-serif text-base md:text-xl text-slate-200 font-light italic leading-relaxed text-left">
                          "{TESTIMONIALS[testimonialIndex].comment}"
                        </p>
                      </div>

                      {/* Author credentials */}
                      <div className="flex justify-between items-end pt-4 border-t border-slate-900 text-left">
                        <div>
                          <span className="font-serif text-sm font-semibold text-slate-200 block uppercase tracking-wide">
                            {TESTIMONIALS[testimonialIndex].name}
                          </span>
                          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-0.5 block">
                            {TESTIMONIALS[testimonialIndex].role}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="block font-mono text-[8px] text-slate-500">PROCEDURE SECURED</span>
                          <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/15 mt-1 block">
                            {TESTIMONIALS[testimonialIndex].treatment}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Next trigger */}
                  <button
                    onClick={nextTestimonial}
                    className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-slate-100 text-slate-400 transition duration-300 z-10 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6 animate-pulse" />
                  </button>

                </div>

                {/* Quick slide count dots */}
                <div className="flex justify-center space-x-1.5 pt-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        testimonialIndex === idx ? "w-6 bg-amber-400" : "w-1.5 bg-slate-800"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </section>


            {/* APPOINTMENT BOOKING FORM PORTAL */}
            <section id="booking" className="py-24 bg-gradient-to-b from-[#03040b] via-slate-950/40 to-[#03040b] relative px-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />
              <AppointmentForm />
            </section>


            {/* CONTACT & GOOGLE MAPS ROUTING HUB */}
            <section id="contact" className="py-24 px-6 relative">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
                    PHYSICAL REACH
                  </span>
                  <h3 className="font-serif text-3xl md:text-4.5xl text-slate-150 font-light">
                    The Contact & <span className="text-gold-gradient font-normal">Localization</span> Centre
                  </h3>
                  <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                    Visit our surgical implant suites in Devarayamjal. Easily locate Sri Shakthi using GPS direction mapping below.
                  </p>
                </div>

                <InteractiveMap />
              </div>
            </section>

          </main>


          {/* LUXURY PREMIUM FOOTER */}
          <footer className="w-full bg-slate-950 border-t border-slate-900 py-16 px-6 z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
              
              {/* Brand Description column */}
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-amber-400/20 flex items-center justify-center font-serif text-sm font-bold text-amber-400">
                    SS
                  </div>
                  <div>
                    <h5 className="font-serif text-xs text-slate-100 tracking-wider uppercase font-bold">SRI SHAKTHI</h5>
                    <span className="block text-[8px] font-mono tracking-widest text-[#d4af37]">IMPLANT CENTRE</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                  Sri Shakthi Dental Clinic & Implant Centre delivers the highest standards of guided surgical restorations and cosmetic veneer alignment. Modern diagnostics in Telangana.
                </p>
                <div className="text-[10px] font-mono text-slate-500">
                  © 2026 Sri Shakthi Dental. All clinical records encrypted.
                </div>
              </div>

              {/* Procedures list column */}
              <div className="space-y-4">
                <h6 className="font-serif text-xs text-slate-200 uppercase tracking-wider font-semibold">PROCEDURAL RANGES</h6>
                <ul className="space-y-2 text-xs font-sans text-slate-400">
                  <li><button onClick={() => { setActiveCategory("Implantology"); scrollToSection("services"); }} className="hover:text-amber-300 transition text-left cursor-pointer">Dental Implants</button></li>
                  <li><button onClick={() => { setActiveCategory("Implantology"); scrollToSection("services"); }} className="hover:text-amber-300 transition text-left cursor-pointer">Full Mouth Rehab</button></li>
                  <li><button onClick={() => { setActiveCategory("Aesthetic"); scrollToSection("services"); }} className="hover:text-amber-300 transition text-left cursor-pointer">Smile Designing</button></li>
                  <li><button onClick={() => { setActiveCategory("Restorations"); scrollToSection("services"); }} className="hover:text-amber-300 transition text-left cursor-pointer">Root Canal RCT</button></li>
                  <li><button onClick={() => { setActiveCategory("Oral Surgery"); scrollToSection("services"); }} className="hover:text-amber-300 transition text-left cursor-pointer">Wisdom Tooth Removal</button></li>
                </ul>
              </div>

              {/* Quick links navigation */}
              <div className="space-y-4">
                <h6 className="font-serif text-xs text-slate-200 uppercase tracking-wider font-semibold">QUICK NAVIGATION</h6>
                <ul className="space-y-2 text-xs font-sans text-slate-400">
                  <li><button onClick={() => scrollToSection("about")} className="hover:text-amber-300 transition text-left cursor-pointer">Heritage & Doctors</button></li>
                  <li><button onClick={() => scrollToSection("features")} className="hover:text-amber-300 transition text-left cursor-pointer">Anxiety-Free tech</button></li>
                  <li><button onClick={() => scrollToSection("implant-centre")} className="hover:text-amber-300 transition text-left cursor-pointer">Cortical Fusion Showcase</button></li>
                  <li><button onClick={() => scrollToSection("transformations")} className="hover:text-amber-300 transition text-left cursor-pointer">Veneer Comparisons</button></li>
                  <li><button onClick={() => scrollToSection("booking")} className="hover:text-[#d4af37] transition text-left tracking-wider font-mono text-[10px] text-[#d4af37] cursor-pointer">BOOK APPOINTMENT</button></li>
                </ul>
              </div>

              {/* Coordinates block */}
              <div className="space-y-4">
                <h6 className="font-serif text-xs text-slate-200 uppercase tracking-wider font-semibold">COORDINATES</h6>
                <div className="text-xs text-slate-400 font-sans space-y-2.5">
                  <p className="leading-relaxed">
                    NVR Complex, Near Mogulla Function Hall,<br />
                    72, Yamjal Rd, Thumukunta,<br />
                    Devarayamjal, Dist. Medchal-Malkajgiri,<br />
                    Telangana 500078
                  </p>
                  <p className="font-mono text-[11px]">
                    Phone: <a href="tel:+916303053196" className="text-slate-200 hover:text-amber-300 transition">+91 63030 53196</a>
                  </p>
                  <p className="text-[10px] font-mono text-cyan-400">
                    Aseptic sterility compliance approved.
                  </p>
                </div>
              </div>

            </div>
          </footer>

        </motion.div>
      )}
    </div>
  );
}
