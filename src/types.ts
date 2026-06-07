export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  iconName: string; // Dynamic icons from lucide-react
  category: "Implantology" | "Aesthetic" | "Restorations" | "Oral Surgery" | "Orthodontics" | "Preventive" | "Emergency";
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
}

export interface ChoiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface AppointmentInput {
  name: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  message: string;
}
