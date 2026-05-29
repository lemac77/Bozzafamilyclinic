import { ArrowRight, Clock, Languages, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

export function WhoWeAre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 220 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 1.15, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  const pillars = [
    {
      icon: Languages,
      title: "100% English Spoken",
      description: "No translation barriers. Every doctor, nurse, and administrative liaison speaks fluent, native-level English.",
    },
    {
      icon: FileCheck,
      title: "Direct US Insurance Billing",
      description: "We work directly with Tricare and major American insurance carriers. Our Medical Liaison team handles all approvals and paperwork.",
    },
    {
      icon: Clock,
      title: "Zero Waiting Lists",
      description: "Direct scheduling via WhatsApp, on-time appointments, and on-site diagnostic report delivery without months of delay.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-tr from-[#D6E7E8] via-[#F3EFE9] to-[#FCFAF7] border-b border-sand/30 relative overflow-hidden">
      {/* High-visibility warm and cool ambient blobs that drift dynamically */}
      <motion.div
        animate={{
          x: [0, 50, -45, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[12%] -left-[12%] w-[600px] h-[600px] rounded-full bg-teal/[0.22] blur-[100px] pointer-events-none mix-blend-multiply"
      />
      
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[12%] -right-[12%] w-[550px] h-[550px] rounded-full bg-gold/[0.18] blur-[100px] pointer-events-none mix-blend-multiply"
      />

      <motion.div
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-sage/[0.18] blur-[100px] pointer-events-none mix-blend-multiply"
      />
      
      {/* Decorative vertical running luxury bar lines for that high-end editorial feel */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-sand/25 hidden md:block" />
      <div className="absolute right-4 top-0 bottom-0 w-[1px] bg-sand/25 hidden md:block" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Title & Introduction */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <Eyebrow className="text-teal tracking-[0.25em]">WHO WE ARE</Eyebrow>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-light leading-[1.1] tracking-tight">
              A clinic <br className="hidden sm:inline" />
              <span className="font-semibold text-teal relative">
                built around the patient
                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-[2px] bg-teal/20" />
              </span>, <br />
              not the system.
            </h2>

            <p className="text-base sm:text-lg text-graphite font-body leading-relaxed max-w-xl">
              We started Family Clinic with a simple belief: navigated medical care should be personal and direct. For families, international patients, and the military community at Vicenza, we designed a swift healthcare option with absolute transparency.
            </p>

            <div className="pt-2">
              <Button 
                variant="text" 
                href="/about" 
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-teal hover:text-teal/85 transition-colors duration-200"
              >
                Learn more about our mission
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column: Three Clean, High-impact Pillars with Premium Card Styling & Staggered Gentle Floating */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -120px 0px" }}
            className="lg:col-span-6 space-y-5"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="w-full"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4.5 + idx * 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ 
                      y: -14, 
                      scale: 1.02,
                      transition: { duration: 0.25 }
                    }}
                    className="flex gap-4 sm:gap-6 items-start p-6 sm:p-7 bg-cream/75 hover:bg-cream/95 backdrop-blur-md rounded-2xl border border-sand/40 hover:border-teal/30 shadow-md hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal/[0.1] to-teal/[0.02] border border-teal/15 text-teal flex items-center justify-center shrink-0 group-hover:from-teal group-hover:to-teal/90 group-hover:text-cream group-hover:border-transparent transition-all duration-350 shadow-sm">
                      <Icon size={18} className="stroke-[2]" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wide text-ink uppercase">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-graphite font-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
