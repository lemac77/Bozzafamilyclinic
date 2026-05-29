import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown, ShieldCheck, HeartPulse, Sparkles, Languages, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CLINIC_INFO } from "../../lib/constants";

export function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-0.5 to 0.5)
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Split title manually for a premium stagger mask reveal
  const wordsRow1 = ["Private", "healthcare"];
  const wordsRow2 = ["the", "way", "it", "should", "be."];

  return (
    <div className="relative min-h-screen w-full flex items-center bg-cream py-20 md:py-28 overflow-hidden selection:bg-teal/10">
      
      {/* 1. Super Dynamic Mesh Background Gradient / Grid shifting on Mouse Move */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <motion.div 
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 80 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal/10 to-gold/5 blur-3xl opacity-80"
        />
        <motion.div 
          animate={{
            x: -mousePosition.x * 30,
            y: -mousePosition.y * 30,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 80 }}
          className="absolute -bottom-20 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-gold/5 to-teal/5 blur-3xl opacity-70"
        />
        {/* Fine background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B3B36_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and CTA Section */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant Clinic Pill Badge with live pulsing circle */}
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-2 rounded-full text-teal font-sans text-xs font-bold tracking-wider uppercase w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              Family Clinic Health Care Vicenza
            </motion.div>

            {/* Imposing Mask-Reveal Title with custom underlines and typography dynamics */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-ink tracking-tight leading-[1.08] mb-6">
              {/* Row 1 */}
              <div className="overflow-hidden block py-1">
                {wordsRow1.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block mr-3 ${word === "healthcare" ? "text-teal font-semibold relative" : ""}`}
                  >
                    {word}
                    {word === "healthcare" && (
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-1.5 left-0 h-[3px] bg-gold/40 rounded-full"
                      />
                    )}
                  </motion.span>
                ))}
              </div>

              {/* Row 2 */}
              <div className="overflow-hidden block py-1">
                {wordsRow2.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block mr-2 md:mr-3 ${
                      word === "should" || word === "be." ? "text-teal italic font-light font-display" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>

            {/* Elegant Supportive Statement with fade slide entrance */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-base sm:text-lg text-graphite font-body leading-relaxed max-w-xl mb-8"
            >
              Fluent English-speaking doctors. Direct billing with US insurances. Exceptional personal care from the moment you message us to the follow-up, with fast on-call responses.
            </motion.p>

            {/* Premium CTA Buttons with modern stagger effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="group text-center font-bold text-sm py-4.5 px-9 shadow-md hover:shadow-xl hover:bg-teal-dark font-sans rounded-full flex items-center justify-center gap-2"
              >
                Instant Booking on WhatsApp 
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                href="/contact"
                className="text-center text-ink !border-sand/85 hover:!bg-teal/5 font-sans rounded-full font-bold uppercase tracking-wider text-xs py-4.5 px-8"
              >
                Reach Liaison Team
              </Button>
            </motion.div>

            {/* Staggered Highlights Row with dynamic entries */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-sand/30">
              {[
                { icon: <Languages size={18} />, title: "Native Speakers", subtitle: "Speak in your primary language", delay: 0.75 },
                { icon: <ShieldCheck size={18} />, title: "Military Billing", subtitle: "Caserma Ederle & Del Din", delay: 0.82 },
                { icon: <Sparkles size={18} />, title: "Elite Standard", subtitle: "Private luxury consulting", delay: 0.89 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                  className="flex gap-3 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/5 flex items-center justify-center shrink-0 text-teal border border-teal/15 transition-all duration-300 group-hover:bg-teal group-hover:text-cream group-hover:shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm transition-colors duration-200 group-hover:text-teal">{item.title}</h4>
                    <p className="text-xs text-graphite/85 font-body leading-tight mt-0.5">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Imagery Section (Interactive Parallax tilt & Floating indicators) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10 lg:pl-4">
            
            {/* Dynamic floating badge "Medical availability" */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="absolute -left-8 -top-4 bg-cream/95 backdrop-blur-md border border-teal/15 shadow-xl py-3 px-4.5 rounded-2xl z-20 flex items-center gap-2.5 max-w-[210px] pointer-events-none hidden sm:flex"
            >
              <div className="w-6.5 h-6.5 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                <CheckCircle2 size={13} className="animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-sans font-bold text-teal tracking-wider uppercase">Availability</p>
                <p className="text-xs font-display font-semibold text-ink">Same/Next Day Visit</p>
              </div>
            </motion.div>

            {/* Glowing radial back-accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal/[0.04] to-gold/[0.03] rounded-full blur-3xl pointer-events-none -z-20 scale-100" />

            {/* 3D-feeling microtilt card container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                perspective: 1000,
              }}
              className="relative w-full aspect-[4/5] max-w-md sm:max-w-lg lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-cream z-10 overflow-hidden"
            >
              <motion.div
                animate={{
                  rotateY: mousePosition.x * 12,
                  rotateX: -mousePosition.y * 12,
                }}
                transition={{ type: "spring", damping: 25, stiffness: 60 }}
                className="w-full h-full relative"
              >
                {/* Premium image representing warm consultation room and modern aesthetic */}
                <img 
                  src="https://familyclinic.health/images/home_1.jpeg" 
                  alt="Family Clinic Vicenza" 
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent pointer-events-none" />
              </motion.div>
              
              {/* Bottom floating premium trust badge on top of image with entry delay */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-md p-5 rounded-2xl border border-sand/40 shadow-lg flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-cream font-bold text-sm shrink-0 shadow-inner">
                  FC
                </div>
                <div>
                  <p className="text-xs font-mono text-teal font-bold uppercase tracking-wider">Trusted Partner</p>
                  <p className="text-xs sm:text-sm font-display font-semibold text-ink">Serving Caserma Ederle & Del Din since 2018</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Asymmetrical background decorative cards with gentle floating animations */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-38 h-38 rounded-3xl bg-teal/5 -z-10 border border-teal/10 pointer-events-none hidden sm:block" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-gold/5 -z-15 pointer-events-none hidden sm:block" 
            />
          </div>

        </div>
      </Container>

      {/* Pulsing SCROLL Indicator fades out once user scrolls */}
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0.8, y: [0, 8, 0] }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40 select-none z-10 pointer-events-none"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.2em] font-medium text-teal">
              Explore Clinic
            </span>
            <ArrowDown size={14} className="text-teal" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
