import { Service, Testimonial, ChoiceFeature, JourneyStep } from "./types";

export const IMAGES = {
  clinicHero: "/src/assets/images/luxury_dental_hero_1780825348666.png",
  smilingHero: "/src/assets/images/smiling_patient_hero_1780825364644.png",
  implantDetail: "/src/assets/images/dental_implant_detail_1780825381189.png",
  cosmeticDentistry: "https://images.unsplash.com/photo-1579684389782-64d84b5e902a?q=80&w=600&auto=format&fit=crop",
  orthodontics: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
  teethWhitening: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=600&auto=format&fit=crop",
  pediatric: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop",
  surgery: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
  restoration: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=600&auto=format&fit=crop"
};

export const SERVICES: Service[] = [
  {
    id: "implants",
    title: "Dental Implants",
    description: "Premium titanium and zirconia roots biocompatibly fused to recreate complete, functional, lifetime dental anatomy.",
    benefits: ["Prevents bone volume loss", "98.5% titanium fusion rate", "Indistinguishable from natural teeth"],
    duration: "45 - 90 Mins / Session",
    iconName: "ShieldCheck",
    category: "Implantology",
    image: IMAGES.implantDetail
  },
  {
    id: "rehab",
    title: "Full Mouth Rehabilitation",
    description: "Multi-disciplinary neuromuscular restoration addressing bite alignment, facial structure collapse, and comprehensive chewing function.",
    benefits: ["Complete bite restoration", "Reverses structural aging", "Custom multi-layered crowns"],
    duration: "Customized Program",
    iconName: "Maximize",
    category: "Implantology",
    image: IMAGES.clinicHero
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Pain-free micro-endodontics using reciprocating rotary systems and ultra-precise digital apex locator technologies.",
    benefits: ["Saves compromised teeth", "Virtually painless therapy", "3D thermofilled sealants"],
    duration: "30 - 60 Mins",
    iconName: "Activity",
    category: "Restorations",
    image: IMAGES.surgery
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Laser-activated cold-light whitening treatments safely lifting stains up to 8 shades in a secure, sensitive-free session.",
    benefits: ["Instantly brightens smile", "Tailored protective gels", "Long-lasting surface defense"],
    duration: "45 Mins",
    iconName: "Sparkles",
    category: "Aesthetic",
    image: IMAGES.teethWhitening
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Ultra-thin, handmade ceramic veneers and hand-sculpted lumineers designed to shape, align, and refine dental morphology.",
    benefits: ["Handcrafted custom shades", "Minimal preparation needed", "Brilliant natural translucency"],
    duration: "2 Sessions",
    iconName: "UserCheck",
    category: "Aesthetic",
    image: IMAGES.cosmeticDentistry
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    description: "Mathematical facial-proportion analysis mapping your smile curves, lip posture, and dental dimensions using 3D digital scanners.",
    benefits: ["Interactive 3D simulation", "Facial harmony planning", "完全 customized dimensions"],
    duration: "1 - 2 Sessions",
    iconName: "Heart",
    category: "Aesthetic",
    image: IMAGES.smilingHero
  },
  {
    id: "crowns",
    title: "Dental Crowns",
    description: "All-ceramic E-Max and translucent Prettau zirconia crowns offering unparalleled strength, durability, and optical properties.",
    benefits: ["No dark metal outlines", "Flawless light reflection", "Lifetime chipping warranty"],
    duration: "2 Sessions",
    iconName: "Award",
    category: "Restorations",
    image: IMAGES.restoration
  },
  {
    id: "bridges",
    title: "Dental Bridges",
    description: "State-of-the-art restorative frameworks bridging missing dentition with perfectly sculpted abutments and artificial pontics.",
    benefits: ["Restores seamless arches", "Redistributes chewing loads", "Resistant to staining"],
    duration: "2 Sessions",
    iconName: "Grid",
    category: "Restorations",
    image: IMAGES.restoration
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Aseptic, trauma-minimized dental extractions utilizing micro-surgical instruments to maximize surrounding bone preservation.",
    benefits: ["Preserves immediate socket", "Ultra-fast recovery protocols", "Comfort-first anesthesia"],
    duration: "20 - 45 Mins",
    iconName: "XCircle",
    category: "Oral Surgery",
    image: IMAGES.surgery
  },
  {
    id: "wisdom",
    title: "Wisdom Tooth Removal",
    description: "Surgical management of impacted third molars utilizing advanced piezosurgery to minimize post-operative swelling and discomfort.",
    benefits: ["Eliminates nerve compression", "Piezosurgical bone safety", "Accelerated healing programs"],
    duration: "30 - 60 Mins",
    iconName: "Layers",
    category: "Oral Surgery",
    image: IMAGES.surgery
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Braces",
    description: "Advanced alignment therapies from high-speed self-ligating Damon braces to invisible 3D printed smart polyurethane aligners.",
    benefits: ["Virtually invisible options", "Shorter active treatment times", "Promotes periodontal hygiene"],
    duration: "Monthly Progress Visits",
    iconName: "Compass",
    category: "Orthodontics",
    image: IMAGES.orthodontics
  },
  {
    id: "preventive",
    title: "Preventive Dentistry",
    description: "Bio-compatible fluoride applications, micro-abrasive polishing, and meticulous ultrasonic scaling keeping periodontal tissue pristine.",
    benefits: ["Blocks cavity development", "Stops chronic halitosis", "Protects arterial cardiovascular health"],
    duration: "30 Mins",
    iconName: "LifeBuoy",
    category: "Preventive",
    image: IMAGES.clinicHero
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Specialized, fear-free dental programs for younger smiles focusing on developmental guidance, behavior pacing, and sealants.",
    benefits: ["Anxiety-free clinical pacing", "Early bite trend monitoring", "Enamel-strengthening plans"],
    duration: "20 - 45 Mins",
    iconName: "Smile",
    category: "Preventive",
    image: IMAGES.pediatric
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    description: "Priority triage paths for acute odontogenic pulpitis, fractured crowns, facial trauma, or loose implants demanding immediate relief.",
    benefits: ["Guaranteed prompt relief", "24/7 tele-consultation support", "Fast infection management"],
    duration: "Immediate Triage",
    iconName: "AlertTriangle",
    category: "Emergency",
    image: IMAGES.surgery
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Dr. Anirudh Reddy",
    role: "Senior Consultant Architect",
    rating: 5,
    comment: "The precision with which Sri Shakthi's doctors executed my double dental implants is world-class. From initial digital 3D scans to absolute perfect dental seating, the experience was premium, seamless, and entirely pain-free.",
    treatment: "Dental Implants & Zirconia Crown",
    date: "May 2026"
  },
  {
    id: "test2",
    name: "Priya Sharma",
    role: "Executive Director",
    rating: 5,
    comment: "I was extremely anxious about my Smile Designing project. But the team mapped my facial features mathematically, simulated the outcome, and delivered handcrafted veneers that completely redefined my confidence. Absolute luxury!",
    treatment: "Cosmetic Veneers & Smile Makeover",
    date: "April 2026"
  },
  {
    id: "test3",
    name: "Karthik Goud",
    role: "Tech Entrepreneur",
    rating: 5,
    comment: "This isn't a typical waiting-room hospital; it feels like a modern luxury space. Their Damon self-ligating orthodontics and high-performance microscope system made my complex therapy feel incredibly easy.",
    treatment: "Advanced Orthodontics",
    date: "June 2026"
  },
  {
    id: "test4",
    name: "Meenakshi Rao",
    role: "Creative Director",
    rating: 5,
    comment: "The full mouth rehabilitation restored my bite completely. Sri Shakthi Dental Clinic possesses top-of-the-line diagnostic machinery. No more clicking joints, no more sensitivity. They are master craftsmen in dental science.",
    treatment: "Full Mouth Rehabilitation",
    date: "March 2026"
  }
];

export const CHOICE_FEATURES: ChoiceFeature[] = [
  {
    id: "tech",
    title: "Advanced Guided Implant Tech",
    description: "CBCT 3D guided computer planning matches the implant perfectly with bone density structures mapped down to 0.1mm margins.",
    iconName: "Cpu",
    badge: "99% Success Rate"
  },
  {
    id: "team",
    title: "Distinguished Implantologist Board",
    description: "Led by internationally trained experts specialized in immediate dental loading and complex neuromuscular occlusal rehabilitation.",
    iconName: "Award",
    badge: "Expertise"
  },
  {
    id: "equip",
    title: "Futuristic Modern Equipment",
    description: "Equipped with low-radiation digital radiography, reciprocating rotary endodontic microscopes, and cold-laser sterilizers.",
    iconName: "Zap",
    badge: "Precision"
  },
  {
    id: "comfort",
    title: "Neuromuscular Pain Triage",
    description: "We utilize bio-regulated luxury comfort setups, electronic painless anesthesia, and custom acoustic zoning for absolute peace.",
    iconName: "HeartHandshake",
    badge: "Zero Anxiety"
  },
  {
    id: "care",
    title: "Ultra-Customized Concierge Therapy",
    description: "Your facial anatomy determines everything. Individual custom composite molds and custom-mapped treatment maps designed for you.",
    iconName: "MessageSquare",
    badge: "1:1 Treatment"
  },
  {
    id: "hygiene",
    title: "Aseptic Triple-Autoclave Environment",
    description: "Exceeding international biosafety guidelines with positive-pressure HEPA filtration and continuous computerized dry heat sterilizers.",
    iconName: "CheckSquare",
    badge: "Class 100 Sterile"
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Comprehensive Digital Consultation",
    subtitle: "Mapping Dental Topography",
    description: "We capture high-fidelity panoramic radiographs and map intraoral micro-surfaces using advanced 3D scanning technology.",
    details: ["Macro DSLR smile photography", "Bone volume CBCT assessment", "Custom biological safety check"],
    iconName: "Scan"
  },
  {
    step: 2,
    title: "Precision Bio-Engineering & Analysis",
    subtitle: "Anatomy Modeling & Virtual Assembly",
    description: "Our board maps bone density structures and creates custom crown profiles in simulation to ensure long-term clinical safety.",
    details: ["Occlusal stress profile modeling", "Bone implant placement path projection", "Perfect spacing and gap planning"],
    iconName: "Cpu"
  },
  {
    step: 3,
    title: "Curated Treatment Tailoring",
    subtitle: "Custom Multi-Disciplinary Consensus",
    description: "You sit with our senior implantologist and view a real-time virtual simulation of your structural treatment path prior to starting.",
    details: ["Aesthetic tone mapping", "Session-by-session pacing schedule", "Fixed transparent pricing plans"],
    iconName: "CalendarRange"
  },
  {
    step: 4,
    title: "Minimally Invasive Dental Execution",
    subtitle: "Surgically Precise Micro-Therapy",
    description: "The dental procedure is completed under computer-controlled local anesthesia, minimizing discomfort and swelling.",
    details: ["Guided laser-micro incisions", "Autologous rich platelet-fibrin support", "Real-time vitals monitoring"],
    iconName: "CheckCircle"
  },
  {
    step: 5,
    title: "Accelerated Cellular Recovery",
    subtitle: "Bio-stimulation & Repair Supervision",
    description: "A customized recovery cycle including photo-biomodulation therapy is initiated to accelerate tissue healing.",
    details: ["Organic cold laser stimulation", "Custom dental care packages", "Personal rehabilitation officer"],
    iconName: "Activity"
  },
  {
    step: 6,
    title: "Radiant Smile Revelation",
    subtitle: "Functional and Visual Liberation",
    description: "We secure your custom handcrafted ceramic veneers or permanent implants. Experience a dynamic, functional white smile.",
    details: ["Neuromuscular bite confirmation", "Dynamic photography session", "Lifetime digital warranty registration"],
    iconName: "Sparkles"
  }
];

export const STATS = [
  { value: "15,000+", label: "Transformational Smiles Designed", detail: "Since inception" },
  { value: "4,200+", label: "Successful Premium Implants Placed", detail: "99.1% osseointegration rate" },
  { value: "18+", label: "Years of Collective Board Expertise", detail: "Global training" },
  { value: "0M", label: "Reported Patient Anxiety Incidents", detail: "Painless technologies" }
];
