import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function Counter({ value, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let start = 0;
    const end = value;
    const duration = 1.5 * 1000; // milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          start += Math.ceil(end / 100);
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(start);
          }
        }, Math.max(stepTime, 12));
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(handleObserve, { threshold: 0.1 });
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-2.5 bg-cream/70 rounded-xl border border-sand/30 backdrop-blur-sm shadow-sm">
      <span className="font-display text-2xl sm:text-3xl font-semibold text-teal tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-teal/80 mt-1">
        {label}
      </span>
    </div>
  );
}

const reasons = [
  {
    title: "Real English-speaking care",
    body: 'Our doctors and staff speak fluent or native English. Not "we\'ll find someone who knows a few words." Every visit, every conversation, every document — in your language.',
    image: "https://familyclinic.health/images/home_6.jpeg",
  },
  {
    title: "US insurance, actually handled",
    body: "Most clinics in Italy don't deal with American insurance. We do. Pre-authorizations, claims, reimbursement document packs — we know the process for the major US plans and we walk you through it.",
    image: "https://familyclinic.health/images/home_5.jpeg",
  },
  {
    title: "Fast access",
    body: "Long Italian waiting lists are not our model. When you need to be seen, we work to fit you in quickly — sometimes the same day, often the next. We won't promise a strict SLA, because medicine doesn't work that way, but speed is part of who we are.",
    image: "https://familyclinic.health/images/home_3.jpeg",
  },
  {
    title: "One coordinated team",
    body: "You're not handed off between strangers. The doctor who saw you knows the specialist who'll see you next. We share notes, we communicate, we follow up. Medicine as a team sport, not a relay race.",
    image: "https://familyclinic.health/images/home_4.jpeg",
  },
  {
    title: "Medical Liaison for US patients",
    body: "For our American patients, we go further: translation, escort to hospitals, insurance paperwork, pharmacy support. Care without the headache.",
    image: "https://familyclinic.health/images/home_10.jpeg",
  },
];

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play selector
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#EAE4DC] via-[#FAF6F0] to-[#E3DDD4] border-b border-sand/30 relative overflow-hidden">
      {/* High-fidelity warm and gold ambient blobs pulsing to create beautiful backdrop depth */}
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[12%] -right-[12%] w-[600px] h-[600px] rounded-full bg-gold/[0.18] blur-[100px] pointer-events-none mix-blend-multiply"
      />

      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -40, 50, 0],
          scale: [1, 0.95, 1.18, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[12%] -left-[12%] w-[550px] h-[550px] rounded-full bg-teal/[0.16] blur-[100px] pointer-events-none mix-blend-multiply"
      />

      <motion.div
        animate={{
          scale: [0.95, 1.25, 0.95],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-sage/[0.15] blur-[110px] pointer-events-none mix-blend-multiply"
      />

      {/* Decorative vertical running luxury bar lines */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-sand/25 hidden md:block" />
      <div className="absolute right-4 top-0 bottom-0 w-[1px] bg-sand/25 hidden md:block" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Selector Tabs (takes 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-start gap-6">
            <div>
              <Eyebrow className="text-teal tracking-[0.25em]">WHY US</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-ink leading-[1.1] tracking-tight mt-3">
                What makes us <br />
                <span className="font-semibold text-teal relative inline-block">
                  different
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/20" />
                </span>.
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {reasons.map((reason, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsHovered(true);
                    }}
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`group relative text-left py-4 px-6 rounded-2xl border transition-all duration-350 cursor-pointer ${
                      isActive
                        ? "bg-teal text-cream border-teal shadow-lg scale-[1.01]"
                        : "bg-cream/70 backdrop-blur-sm text-ink border-sand/40 hover:border-teal/30 hover:bg-cream/90 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold leading-none ${isActive ? "text-cream/70" : "text-teal"}`}>
                        0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-xs uppercase tracking-wider leading-none">
                        {reason.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Elegant Counters Row under selector cards */}
            <div className="grid grid-cols-3 gap-3.5 mt-2 bg-cream/35 backdrop-blur-sm border border-sand/30 rounded-2xl p-3.5">
              <Counter value={12} suffix="+" label="Specialties" />
              <Counter value={1000} suffix="+" label="Patients Served" />
              <Counter value={100} suffix="%" label="English-Speaking" />
            </div>
          </div>

          {/* Right Panel: Dynamic Media/Text Block (takes 6 cols) with premium floating animations */}
          <motion.div 
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="lg:col-span-6 flex flex-col gap-6 lg:pl-6 justify-start"
          >
            {/* Image Frame with hover scale */}
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl bg-sand/30 border border-sand/40 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={reasons[activeIndex].image}
                  alt={reasons[activeIndex].title}
                  width={800}
                  height={600}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-ink/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
            </div>

            {/* Display active description with elegant glass-morphic background */}
            <div className="bg-cream/80 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-sand hover:border-teal/30 shadow-xl min-h-[130px] flex items-center transition-all duration-300">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm sm:text-base text-graphite font-body leading-relaxed">
                    {reasons[activeIndex].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
