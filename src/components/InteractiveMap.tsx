import { motion } from "motion/react";
import { Phone, MessageSquare, Compass, MapPin, ExternalLink, ShieldCheck, Clock } from "lucide-react";

export default function InteractiveMap() {
  const directionsUrl = "https://maps.app.goo.gl/9z34idVshZz5aN7P8"; // Genuine link to location in Devarayamjal
  const whatsappUrl = "https://wa.me/916303053196?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20luxury%20dental%20consultation.";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15214.375086036733!2d78.5204481!3d17.5750058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb83002341b527%3A0x6bba8d234d026bd6!2sSri%20Shakthi%20Dental%20Clinic%20and%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1717751234567!5m2!1sen!2sin";

  return (
    <div className="w-full max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-500" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Contact info column */}
        <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-8 bg-slate-950/85">
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
              STRATEGIC PLACEMENT
            </span>

            <h3 className="font-serif text-2xl md:text-3.5xl text-slate-100 font-light leading-tight">
              Sri Shakthi <br />
              <span className="text-gold-gradient font-normal">Command Centre</span>
            </h3>

            {/* Address */}
            <div className="flex items-start space-x-3.5 pt-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/40 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="space-y-1.5">
                <span className="block font-mono text-[10px] text-slate-500 uppercase">LOCATION ADDRESS</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  NVR COMPLEX,<br />
                  Near Mogulla Ramakrishna Reddy Function Hall,<br />
                  72, Yamjal Road, Thumukunta,<br />
                  Devarayamjal, Telangana 500078
                </p>
              </div>
            </div>

            {/* Contact numbers */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-950 border border-amber-800/40 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-amber-300" />
              </div>
              <div className="space-y-1.5">
                <span className="block font-mono text-[10px] text-slate-500 uppercase">PRIORITY PHONE</span>
                <p className="text-xs text-slate-300 font-sans">
                  <a href="tel:+916303053196" className="text-slate-100 hover:text-amber-300 transition">
                    +91 63030 53196
                  </a>
                </p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <div className="space-y-1.5">
                <span className="block font-mono text-[10px] text-slate-500 uppercase">SURGICAL HOURS</span>
                <p className="text-xs text-slate-300 font-sans">
                  Monday – Saturday: <span className="text-slate-100">10:00 AM – 8:30 PM</span> <br />
                  Sunday: <span className="text-slate-100 font-semibold text-amber-300">Appointment Only</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="space-y-3 pt-6 border-t border-slate-900">
            <span className="block font-mono text-[10px] text-slate-500 uppercase">DIRECT ENCRYPTED ACTION</span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+916303053196"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition hover:border-slate-700 font-mono text-[11px]"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>VOICE CONNECT</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition hover:border-slate-700 font-mono text-[11px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 focus:ring-1 hover:brightness-110 text-slate-950 font-medium font-mono text-[11px]"
            >
              <Compass className="w-4 h-4 text-slate-950 animate-pulse" />
              <span>LAUNCH GOOGLE DIRECTIONS MAPPING</span>
              <ExternalLink className="w-3 h-3 text-slate-950 ml-1" />
            </a>
          </div>
        </div>

        {/* Embedded Iframe Map Column */}
        <div className="lg:col-span-7 h-[350px] lg:h-auto relative bg-slate-950">
          {/* Subtle grid border overlay */}
          <div className="absolute inset-0 border-l border-slate-900 pointer-events-none z-10" />
          
          <iframe
            src={mapEmbedUrl}
            title="SRI SHAKTHI DENTAL CLINIC AND IMPLANT CENTRE location map"
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-120 saturate-[60%] opacity-85"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Quick Floating Map Label */}
          <div className="absolute right-4 bottom-4 bg-slate-950/80 backdrop-blur-md border border-slate-850 p-2.5 rounded-lg z-20 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <div className="text-[10px] font-mono leading-tight">
              <span className="block text-slate-100">STERILITY ACCREDITED</span>
              <span className="text-slate-500">Government Compliant Hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
