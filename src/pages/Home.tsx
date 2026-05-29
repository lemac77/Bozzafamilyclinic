import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check, ShieldCheck, HeartPulse, Building2 } from "lucide-react";
import { Hero } from "../components/sections/Hero";
import { InsuranceMarquee } from "../components/sections/InsuranceMarquee";
import { WhoWeAre } from "../components/sections/WhoWeAre";
import { ServicesOverview } from "../components/sections/ServicesOverview";
import { WhyUs } from "../components/sections/WhyUs";
import { Reviews } from "../components/sections/Reviews";
import { HowToReach } from "../components/sections/HowToReach";
import { HoursContact } from "../components/sections/HoursContact";
import { Seo } from "../seo/Seo";
import { Container } from "../components/ui/Container";
import { medicalClinicSchema } from "../seo/schemas/medicalClinic";

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Title & Description & MedicalClinic JSON-LD Verbatim */}
      <Seo
        title="Family Clinic Vicenza · English Speaking Medical Clinic for Americans & Internationals"
        description="English-speaking medical clinic in Vicenza serving the American community, international families, and Italians. Primary care, specialists, diagnostics, and US insurance support."
        schema={medicalClinicSchema}
      />

      {/* Main Home Sections layout */}
      <main className="relative bg-cream">
        <Hero />

        {/* 1. WELCOME SECTION: Splendid Whole-Section Content Reveal Backdrop */}
        <section 
          className="relative py-14 md:py-18 overflow-hidden flex items-center border-b border-sand/30"
        >
          {/* Background Layer: Pristine Base Photo with Elegant Overlays */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <img
              src="https://familyclinic.health/images/home_1.jpeg"
              alt="Modern Clinic Parlor"
              width={1800}
              height={1200}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft, professional dark and ambient warm glass overlays for ultimate readability */}
            <div className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-ink/40" />
          </div>

          {/* Foreground content card with smooth staggered reveal */}
          <Container className="relative z-10 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "180px 0px" }}
              className="max-w-3xl mx-auto bg-cream/95 backdrop-blur-lg p-6 sm:p-10 md:p-12 rounded-[2rem] border border-cream/50 shadow-2xl"
            >
              <motion.span 
                variants={itemVariants}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-teal block mb-4.5 text-center"
              >
                Welcome to Family Clinic
              </motion.span>
              
              <motion.h2 
                variants={itemVariants}
                className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight font-medium text-center mb-8"
              >
                Medical excellence, <span className="italic font-light text-teal">tailored for you.</span>
              </motion.h2>

              <div className="space-y-6 max-w-2xl mx-auto">
                <motion.p 
                  variants={itemVariants}
                  className="font-display text-base sm:text-lg md:text-xl text-ink/95 leading-relaxed font-light italic text-center"
                >
                  “Family Clinic Health Care is an English-speaking medical clinic in Vicenza, Italy, serving the American military community at Caserma Ederle and Camp Del Din, international families, and Italian patients who want a faster, more personal healthcare experience.”
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xs sm:text-sm text-graphite font-body leading-relaxed text-center max-w-xl mx-auto"
                >
                  We offer primary care, twelve medical specialties, on-site diagnostics, and a Medical Liaison program that handles US insurance, translation, and specialist coordination.
                </motion.p>
              </div>

              {/* Grid with 4 Checkmarks, beautifully staggered */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 pt-6 border-t border-sand/30 max-w-2xl mx-auto"
              >
                <motion.div variants={checkmarkVariants} className="flex gap-2.5 items-start group">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-cream transition-colors duration-200">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-ink">American Support</h4>
                    <p className="text-[11px] text-graphite/85 font-body mt-0.5">Direct billing with US military insurances.</p>
                  </div>
                </motion.div>

                <motion.div variants={checkmarkVariants} className="flex gap-2.5 items-start group">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-cream transition-colors duration-200">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-ink">Specialist Network</h4>
                    <p className="text-[11px] text-graphite/85 font-body mt-0.5">Quick consultation with 12 medical specialties.</p>
                  </div>
                </motion.div>

                <motion.div variants={checkmarkVariants} className="flex gap-2.5 items-start group">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-cream transition-colors duration-200">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-ink">Zero Language Barrier</h4>
                    <p className="text-[11px] text-graphite/85 font-body mt-0.5">Native-level English doctors & coordination team.</p>
                  </div>
                </motion.div>

                <motion.div variants={checkmarkVariants} className="flex gap-2.5 items-start group">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-cream transition-colors duration-200">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-ink">Diagnostic Suite</h4>
                    <p className="text-[11px] text-graphite/85 font-body mt-0.5">On-site ultrasounds and instant blood tests.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* 2. Insurance Strip Marquee */}
        <InsuranceMarquee />

        {/* 3. Who We Are */}
        <WhoWeAre />

        {/* 4. Services Catalog Block Grid */}
        <ServicesOverview />

        {/* 5. Sticky Scroll Why Us */}
        <WhyUs />

        {/* 6. Horizontally draggable client reviews */}
        <Reviews />

        {/* 7. Geo routes diagram and styled Map Embed */}
        <HowToReach />

        {/* 8. Working schedule with quick WhatsApp actions */}
        <HoursContact />
      </main>
    </>
  );
}
