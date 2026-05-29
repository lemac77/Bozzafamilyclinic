import { motion } from "motion/react";

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Underlying base gradient cream transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F2EDE4] to-[#E8E1CE] opacity-90" />

      {/* Exquisite micro-grid of fine luxury lines that slowly pulses */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(98,210,195,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(98,210,195,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
      />

      {/* Elegant framing margins */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-sand/10 hidden lg:block" />
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-sand/10 hidden lg:block" />

      {/* Drifting Luxury Fluid Blob 1 - Healing Mint/Teal */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.06, 0.12, 0.07, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-teal/40 blur-[110px] pointer-events-none mix-blend-multiply"
      />

      {/* Drifting Luxury Fluid Blob 2 - Soft Gold Accent */}
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 40, -30, 0],
          scale: [0.95, 1.1, 0.95, 1],
          opacity: [0.05, 0.1, 0.06, 0.05],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-[10%] -left-[5%] w-[450px] h-[450px] rounded-full bg-gold/30 blur-[110px] pointer-events-none mix-blend-multiply"
      />

      {/* Drifting Luxury Fluid Blob 3 - Neutral Sage */}
      <motion.div
        animate={{
          x: [0, 20, -40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.05, 1.1, 1],
          opacity: [0.03, 0.08, 0.04, 0.03],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[20%] left-[40%] w-[350px] h-[350px] rounded-full bg-sage/20 blur-[90px] pointer-events-none mix-blend-multiply"
      />

      {/* Floating elegant geometric sparkles (Editorial styling markers) */}
      <div className="absolute inset-0">
        {[
          { top: "20%", left: "12%", delay: 0 },
          { top: "35%", right: "18%", delay: 3 },
          { bottom: "30%", left: "25%", delay: 6 },
          { top: "60%", right: "8%", delay: 1.5 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className="absolute pointer-events-none"
            style={{ top: particle.top, left: particle.left, right: particle.right }}
          >
            {/* Elegant tiny vector cross */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-teal/40">
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
