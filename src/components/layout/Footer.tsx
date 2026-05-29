import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { CLINIC_INFO } from "../../lib/constants";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="site-footer"
      className="bg-ink text-cream pt-32 pb-20 border-t border-sand/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* 1. HUGE LOOPER FOOTER MARQUEE STATEMENT */}
      <div className="border-b border-cream/5 pb-20 mb-24">
        <Marquee direction="left" speed={25} pauseOnHover={false}>
          {[1, 2, 3, 4, 5].map((idx) => (
            <span
              key={idx}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sand/15 tracking-tight px-4 whitespace-nowrap"
            >
              Where care feels like home ·{" "}
            </span>
          ))}
        </Marquee>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
          
          {/* Col 1 - Stats / Details */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center">
              <img 
                src="https://familyclinic.health/images/logo.svg" 
                alt="Family Clinic Health Care" 
                className="h-20 sm:h-24 w-auto object-contain select-none bg-white/[0.04] p-3 rounded-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-xs text-sand/70 font-body leading-relaxed max-w-sm">
              English-speaking luxury medical clinic in Vicenza, Italy, serving the American military community, international families, and private Italian patients.
            </p>

            <div className="flex flex-col gap-4 font-sans text-[10px] text-sand/80 mt-2">
              <div className="flex items-start gap-3">
                <MapPin size={12} className="text-gold shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={12} className="text-gold shrink-0" />
                <span>PH: {CLINIC_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={12} className="text-gold shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2 - Directories links - centered better on desktop */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-5">
            <span className="font-sans text-[10px] text-sage uppercase tracking-widest font-extrabold">DIRECTORIES</span>
            <ul className="flex flex-col gap-4 font-body text-xs text-sand/80">
              <li><Link to="/primary-care" className="hover:text-gold hover:pl-1 transition-all">Primary Care</Link></li>
              <li><Link to="/specialist-care" className="hover:text-gold hover:pl-1 transition-all">Specialist Care</Link></li>
              <li><Link to="/diagnostics" className="hover:text-gold hover:pl-1 transition-all">On-site Testing</Link></li>
              <li><Link to="/medical-liaison" className="hover:text-gold hover:pl-1 transition-all">Medical Liaison</Link></li>
            </ul>
          </div>

          {/* Col 3 - General Links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="font-sans text-[10px] text-sage uppercase tracking-widest font-extrabold">RESOURCES</span>
            <ul className="flex flex-col gap-4 font-body text-xs text-sand/80">
              <li><Link to="/about" className="hover:text-gold hover:pl-1 transition-all">Story & Values</Link></li>
              <li><Link to="/insurance" className="hover:text-gold hover:pl-1 transition-all">Insurance Guide</Link></li>
              <li><Link to="/faq" className="hover:text-gold hover:pl-1 transition-all">FAQ Database</Link></li>
              <li><Link to="/contact" className="hover:text-gold hover:pl-1 transition-all">Appointments</Link></li>
            </ul>
          </div>

          {/* Col 4 - Base coordinates */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="font-sans text-[10px] text-sage uppercase tracking-widest font-extrabold">US BASE DISTANCES</span>
            <div className="flex flex-col gap-4 bg-cream/5 border border-cream/10 p-6 rounded-2xl font-sans text-[10px] text-sand/80 leading-relaxed shadow-sm">
              <div>
                <p className="text-cream font-bold uppercase tracking-wider mb-1">CASERMA EDERLE</p>
                <p className="text-sand/50">6 km distance · 12 min drive</p>
                <p className="text-sand/50">Bus Link Line 1 or 5 &rarr; change Line 2</p>
              </div>
              <div className="border-t border-cream/10 pt-4">
                <p className="text-cream font-bold uppercase tracking-wider mb-1">CAMP DEL DIN</p>
                <p className="text-sand/50">4 km distance · 8 min drive</p>
                <p className="text-sand/50">Bus Link Line 2 Direct to Rosselli</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & healthcare director information (verbatim stats) */}
        <div className="border-t border-cream/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <p className="text-[10px] font-mono text-sand/65">
              © {new Date().getFullYear()} Family Clinic Health Care. All rights reserved.
            </p>
            <p className="text-[10px] font-mono text-sand/40 max-w-xl leading-relaxed">
              Partita IVA: 04229560244 · Direttore Sanitario: Dr. Andrea Lucietti · Autorizzazione Sanitaria n. 1943/2026.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] text-sand/65">
            <a href="/llms.txt" className="hover:text-gold">llms.txt</a>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 hover:text-gold transition-colors custom-cursor-active cursor-pointer"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
