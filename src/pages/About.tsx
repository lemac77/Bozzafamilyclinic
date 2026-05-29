import { ArrowRight, MessageSquare, Mail, Award, CheckCircle, Shield, Sparkles, HeartHandshake, History, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";
import { medicalClinicSchema } from "../seo/schemas/medicalClinic";
import { CLINIC_INFO } from "../lib/constants";

export function About() {
  const breadcrumb = buildBreadcrumbSchema("About", "/about");

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <Seo
        title="About Family Clinic Health Care · International Medical Clinic in Vicenza"
        description="Family Clinic Health Care is an English-speaking medical clinic in Vicenza serving American military, expat families, and Italian patients. Patient-first, coordinated, human."
        schema={[medicalClinicSchema, breadcrumb]}
      />

      <main className="bg-[#FAF8F5] pt-0 overflow-hidden">
        
        {/* Majestic Full-Image Page Hero with Slow Zoom-in */}
        <section className="relative min-h-[550px] md:min-h-[620px] lg:min-h-[700px] flex items-center text-cream overflow-hidden border-b border-sand/40 font-sans">
          
          {/* Zoom-in Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.15, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              src="https://familyclinic.health/images/about_0.jpeg" 
              alt="About our modern clinical team medical discussions Family Clinic" 
              width={1800}
              height={1200}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant luxury deep-teal and charcoal gradient backdrop for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-black/35 opacity-90 z-[1]" />
            <div className="absolute inset-0 bg-teal/10 pointer-events-none mix-blend-color z-[1]" />
          </div>

          <Container className="relative z-10 w-full pt-28 sm:pt-32 md:pt-40 lg:pt-44 pb-20 lg:pb-32">
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-left"
            >
              {/* Luxury capsule indicator - clean English only */}
              <motion.div 
                variants={heroItemVariants}
                className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-cream/10 border border-cream/20 rounded-full backdrop-blur-md w-fit"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E8E1CE]">
                  About Family Clinic
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                The patient comes first. <br />
                <span className="font-semibold text-teal relative inline-block">
                  Always.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/50" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg md:text-xl text-cream/90 font-body leading-relaxed max-w-xl mb-6 block"
              >
                Family Clinic exists because navigating health and wellness abroad shouldn’t be the thing that makes you feel worse. We provide complete bilingual clinical care.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Dynamic Bold Opener Section */}
        <section className="bg-gradient-to-b from-[#EAE2D3] to-[#FAF8F5] py-12 md:py-16 border-b border-sand/40 relative">
          <Container>
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-base sm:text-lg md:text-xl text-ink font-body leading-relaxed font-medium">
                Family Clinic Health Care is an English-speaking private medical clinic in Vicenza, Italy, founded to serve the international community — particularly Americans stationed at Caserma Ederle and Camp Del Din, expat families across Veneto, and Italians seeking a faster, more personal alternative to the public healthcare system. Our model centers on three things: real English-speaking care from every doctor, end-to-end patient coordination, and direct US insurance support.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Our Story Section with Side Image Frame */}
        <Section showDivider={false} className="bg-cream py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Elegant Image College Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative w-full flex justify-center"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-sand/60 w-full max-w-[420px] aspect-[13/16] sm:aspect-[3/4]">
                <img 
                  src="https://familyclinic.health/images/about_1.jpeg" 
                  alt="Our compassionate medical staff consulting inside clinic"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Offset decorative element */}
              <div className="absolute -bottom-6 -right-6 lg:-right-1 w-32 h-32 bg-teal/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 lg:left-1 w-40 h-40 bg-sand/35 rounded-3xl -z-10" />

              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-12 right-0 sm:-right-4 bg-[#FCFAF8] border border-sand/80 shadow-lg rounded-2xl p-4 md:p-5 max-w-[170px] z-20"
              >
                <div className="flex items-center gap-2 text-teal mb-1">
                  <Sparkles size={16} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Our Model</span>
                </div>
                <p className="font-display font-semibold text-ink text-sm sm:text-base leading-tight">Patient-First Direct Care</p>
              </motion.div>
            </motion.div>

            {/* Written Story Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <Eyebrow>WHY WE EXIST</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-2 mb-6 leading-[1.12]">
                Built around a <span className="font-semibold text-teal">simple frustration.</span>
              </h2>
              
              <div className="flex flex-col gap-6 text-sm sm:text-base text-graphite/95 font-body leading-relaxed">
                <p className="text-base font-semibold text-ink">
                  For years, Americans living in Vicenza faced the same problem: how do you access Italian healthcare when nobody at the clinic speaks your language, the insurance system doesn't recognize what you carry, and the documentation comes back in Italian that you can't hand to your doctor back home?
                </p>
                <p>
                  Family Clinic was built to be the answer to that question. Not as an "English-speaking option" added on top of an Italian clinic, but as a clinic designed from the ground up around international patients — with English as the operating language, US insurance handling as a core competency, and a Medical Liaison team that exists specifically to bridge the two healthcare worlds.
                </p>
                <p className="bg-sand/15 p-5 border-l-4 border-teal rounded-r-2xl text-xs sm:text-sm text-graphite font-medium">
                  Italians soon found us too. Not because they needed English, but because they recognized the model: appointments when you actually need them, your doctor talking to your specialist, no SSN bureaucracy. A different kind of clinic.
                </p>
              </div>
            </motion.div>

          </div>
        </Section>

        {/* Our Values Section with Springy Card Highlighting */}
        <Section showDivider={false} className="bg-gradient-to-r from-[#FAF8F5] to-[#EAE2D3] py-20 lg:py-28 border-y border-sand/40">
          <div className="max-w-3xl mb-16">
            <Eyebrow>WHAT WE STAND FOR</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-2 leading-tight">
              Three values, lived <span className="font-semibold text-teal">every day.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Value 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group bg-[#FCFAF8] p-8 sm:p-10 border border-sand/75 rounded-3xl hover:border-teal/30 hover:bg-cream hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.2 bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                <HeartHandshake size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-4 group-hover:text-teal transition-colors">
                Value 01 — Caring
              </h3>
              <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                Every patient is a person, not a number. We learn names, we remember context, we follow up. The way a family doctor used to be, before healthcare became a conveyor belt.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group bg-[#FCFAF8] p-8 sm:p-10 border border-sand/75 rounded-3xl hover:border-teal/30 hover:bg-cream hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.2 bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-4 group-hover:text-teal transition-colors">
                Value 02 — Efficient
              </h3>
              <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                Fast access, fast response, fast care — without rigid promises. Speed is a characteristic of how the team works, not an SLA we use as marketing.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group bg-[#FCFAF8] p-8 sm:p-10 border border-sand/75 rounded-3xl hover:border-teal/30 hover:bg-cream hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.2 bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-4 group-hover:text-teal transition-colors">
                Value 03 — Trustworthy
              </h3>
              <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                Transparency in costs, transparency in diagnosis, continuity across visits. You always know where you are in the process.
              </p>
            </motion.div>

          </div>
        </Section>

        {/* High-Fidelity Distinction Grid with Clean Left Side & Hover List Animations */}
        <Section showDivider={false} className="bg-cream py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <Eyebrow>DIFFERENTIATION</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-2 leading-[1.12]">
                No other clinic in <br className="hidden sm:block" />
                Vicenza combines <br className="hidden sm:block" />
                <span className="font-semibold text-teal">all of this.</span>
              </h2>
              <p className="text-sm sm:text-base text-graphite/95 mt-6 font-body leading-relaxed max-w-sm">
                We designed Family Clinic specifically to remove international friction, providing clear care standards and administrative ease that cannot be found elsewhere in Veneto.
              </p>
            </motion.div>
            
            <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Native and fluent English-speaking staff across every role",
                "Major US insurance plans handled directly, including TRICARE",
                "Medical Liaison Services for end-to-end concierge support",
                "Twelve medical specialties coordinated under one structure",
                "On-site diagnostics with same-visit interpretation",
                "Reports written in English with international medical coding",
                "Fast appointment access without complex waiting lists",
                "Real team coordination, not solo practitioners stitched together"
              ].map((item, id) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: id * 0.04 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex gap-4 items-start p-5 bg-sand/15 border border-sand/40 rounded-2xl hover:border-teal/30 hover:bg-[#FCFAF8] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <CheckCircle size={14} className="stroke-[2.5px]" />
                  </div>
                  <span className="text-xs sm:text-sm text-graphite leading-relaxed font-body font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </Section>

        {/* Who We Serve Section - Beautiful High Contrast Bento Layout */}
        <Section showDivider={false} className="bg-gradient-to-b from-cream to-[#ECE5D7] py-20 lg:py-28 border-t border-sand/40">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Eyebrow>OUR PATIENTS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-1 leading-tight">
              Three audiences. <span className="font-semibold text-teal">One standard of care.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Target 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#FCFAF8] border border-sand/70 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-teal/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-teal font-mono font-bold tracking-widest uppercase block mb-3 bg-teal/5 border border-teal/10 px-2.5 py-1 rounded-full w-fit">
                  MILITARY & DEPENDENTS
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-ink mb-4 leading-snug">
                  Americans at Caserma Ederle & Del Din
                </h3>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body mb-6">
                  Active duty military, dependents, civilian contractors, DoD employees. Often the first point of medical contact when stationed in Italy.
                </p>
              </div>
              <div className="h-[120px] rounded-2xl overflow-hidden border border-sand/30">
                <img 
                  src="https://familyclinic.health/images/about_2.jpeg" 
                  alt="Clinical environment family doctor clinic"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Target 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-[#FCFAF8] border border-sand/70 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-teal/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-teal font-mono font-bold tracking-widest uppercase block mb-3 bg-teal/5 border border-teal/10 px-2.5 py-1 rounded-full w-fit">
                  GLOBAL RESIDENTS
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-ink mb-4 leading-snug">
                  International Families & Expats
                </h3>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body mb-6">
                  Long-term residents from outside Italy who need a stable medical reference in English, for themselves and their families.
                </p>
              </div>
              <div className="h-[120px] rounded-2xl overflow-hidden border border-sand/30">
                <img 
                  src="https://familyclinic.health/images/about_3.jpeg" 
                  alt="Expat medical consultations"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Target 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-[#FCFAF8] border border-sand/70 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-teal/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-teal font-mono font-bold tracking-widest uppercase block mb-3 bg-teal/5 border border-teal/10 px-2.5 py-1 rounded-full w-fit">
                  LOCAL PRIVATE CARE
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-ink mb-4 leading-snug">
                  Italian Patients Whom We Serve
                </h3>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body mb-6">
                  Italians who want a private healthcare experience: fast, personalized, without the friction and bureaucracy of SSN waiting lists.
                </p>
              </div>
              <div className="h-[120px] rounded-2xl overflow-hidden border border-sand/30">
                <img 
                  src="https://familyclinic.health/images/about_4.jpeg" 
                  alt="Professional clinical healthcare services"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </Section>

        {/* Reassuring About Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#E5DBC5] block mb-4">
              DISCOVER THE COMFORT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Want to know if Family Clinic is the <span className="font-semibold text-teal">right fit?</span>
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              Send us a message on WhatsApp. We’ll listen to what you need and tell you honestly whether we can help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto"
              >
                WhatsApp the clinic <MessageSquare size={16} />
              </Button>
              <Button
                variant="outline"
                href={`mailto:${CLINIC_INFO.email}`}
                className="w-full sm:w-auto text-cream !border-cream/20 hover:!bg-cream/10 hover:!text-cream"
              >
                Email us <Mail size={16} />
              </Button>
            </div>
          </div>
        </Section>

      </main>
    </>
  );
}
