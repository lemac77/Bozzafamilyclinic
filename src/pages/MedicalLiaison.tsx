import { useState } from "react";
import { Plus, Minus, ArrowRight, Check, MessageSquare, Mail, Award, Globe, HeartHandshake, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { HeroBackground } from "../components/ui/HeroBackground";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";
import { CLINIC_INFO } from "../lib/constants";

export function MedicalLiaison() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const breadcrumb = buildBreadcrumbSchema("Medical Liaison", "/medical-liaison");

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const faqs = [
    {
      q: "Is Medical Liaison included or separate from medical visits?",
      a: "Core Liaison services — translation during visits, English documentation, US insurance paperwork — are included as part of how Family Clinic serves American patients. More involved concierge services (escort to external hospitals, multi-step coordination, transport) are arranged case by case and explained transparently before being delivered.",
    },
    {
      q: "Can you help me even if my appointment isn't at Family Clinic?",
      a: "Yes. The Liaison can coordinate and accompany you to external Italian specialists or hospital procedures where Family Clinic doesn't cover the specific need. The medical record stays linked to your Family Clinic file.",
    },
    {
      q: "What insurance plans do you handle?",
      a: "All major US insurance plans, including TRICARE (across its variants), Aetna, Cigna, BCBS, UnitedHealthcare, Humana, GEHA, MetLife, and others. Send us your insurance card on WhatsApp before booking and we'll confirm your specific plan.",
    },
    {
      q: "How is Medical Liaison billed?",
      a: "Core integrated services are part of your visit pricing. Extended concierge services are quoted transparently in advance, before any work is done. No surprise charges.",
    },
    {
      q: "Do you handle TRICARE specifically?",
      a: "Yes. TRICARE handling depends on your specific plan (Prime, Select, For Life, Reserve Select, etc.) and your status. Send your card to confirm what applies to your situation.",
    },
    {
      q: "Can the Liaison help with end-of-tour documentation for transfer back to the US?",
      a: "Yes. We prepare complete medical record packs in English with international diagnostic and procedure coding, ready to be handed to your US healthcare system. This is especially common for military families nearing end of tour.",
    },
  ];

  return (
    <>
      <Seo
        title="Medical Liaison Services for Americans in Italy · Family Clinic"
        description="Concierge medical support for US patients in Vicenza, Italy. Insurance handling, English translation, specialist coordination, hospital escort. By Family Clinic Health Care."
        schema={breadcrumb}
      />

      <main className="bg-cream pt-0">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30 font-sans">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1800" 
              alt="Medical Liaison support and warm healthcare consultation coordinator" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Exquisite dark/warm gradient overlay for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-transparent opacity-95 z-[1]" />
            <div className="absolute inset-0 bg-teal/5 pointer-events-none mix-blend-color z-[1]" />
          </div>

          <Container className="relative z-10 w-full pt-28 sm:pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24">
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-left"
            >
              {/* Luxury capsule indicator */}
              <motion.div 
                variants={heroItemVariants}
                className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 bg-cream/10 border border-cream/20 rounded-full backdrop-blur-md w-fit"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E8E1CE]">
                  Medical Liaison Services
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                Healthcare without <br />
                <span className="font-semibold text-teal relative inline-block">
                  the headaches.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 sm:mb-10 block"
              >
                A concierge program built for international patients. We look after direct insurance billing, medical translations, and specialist appointments while you heal.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20"
              >
                <Button
                  variant="secondary"
                  href={CLINIC_INFO.whatsappLink}
                  isExternal
                >
                  Talk on WhatsApp <ArrowRight size={16} />
                </Button>
                <Button variant="outline" href={`tel:${CLINIC_INFO.phone}`} className="bg-cream/10 border-cream/20 hover:bg-cream hover:text-ink text-cream transition-colors backdrop-blur-sm">
                  Call the clinic
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* AEO Opener Paragraph */}
        <Section showDivider={false} className="!py-10 bg-gradient-to-b from-cream to-sand/10 border-b border-sand/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-graphite font-body leading-relaxed">
              Medical Liaison Services is Family Clinic's concierge program for American patients living in Italy, particularly the military and civilian community at Caserma Ederle and Camp Del Din. The Liaison team handles US insurance paperwork, English-Italian medical translation, coordination with external specialists and hospitals, escort during hospital procedures, and pharmacy support, so American patients can access Italian healthcare without navigating the language and bureaucracy alone.
            </p>
          </div>
        </Section>

        {/* Why Medical Liaison Exists */}
        <Section showDivider={false} className="bg-gradient-to-r from-[#E9E1D1] to-[#F1EAD9] border-y border-sand/40 py-16 md:py-20 lg:py-24 shadow-sm">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Box Column: Rendered on the Left for large screens, but stacked second on mobile */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-4">
              <div className="bg-[#FCFAF8] border border-sand/75 rounded-3xl p-8 sm:p-10 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-teal" />
                <p className="text-sm sm:text-base text-ink font-body leading-relaxed mb-4 font-semibold">
                  Italian healthcare is good, but it wasn't designed with international patients in mind. Forms are in Italian. Pharmacies don't always speak English. US insurance providers expect documentation in formats Italian clinics don't naturally produce.
                </p>
                <p className="text-sm sm:text-base text-graphite/95 font-body leading-relaxed mb-6">
                  Hospital procedures involve paperwork that, to someone who doesn't speak the language, feels like signing a blank check.
                </p>
                <div className="h-px bg-sand/30 my-5" />
                <p className="text-sm sm:text-base text-teal font-display font-medium leading-relaxed font-semibold">
                  Medical Liaison Services exists to remove all of that. It's not a translator service. It's a complete support layer that wraps around your medical experience in Italy, from the first phone call to the final insurance reimbursement.
                </p>
              </div>
            </div>

            {/* Title Column: Rendered on the Right for large screens, but stacked first on mobile */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-10">
              <Eyebrow>THE PROBLEM WE SOLVE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-3 mb-6 leading-[1.12]">
                Italian healthcare wasn't <br />
                <span className="font-semibold text-teal">built for you. We were.</span>
              </h2>
              <p className="text-sm sm:text-base text-graphite font-body leading-relaxed">
                Navigating foreign bureaucracy, insurance rules, and complex medical translations can feel overwhelming. We bridge this barrier with professional care.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Service Modules: Premium Alternating Layout with Smooth Animations */}
        
        {/* Module 01: Translation and Interpretation (bg-cream, text-ink) */}
        <Section showDivider={false} className="bg-cream py-16 md:py-20 lg:py-24 border-y border-sand/20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5">
              <Eyebrow>MODULE 01 · ACCESSIBLE MEDICAL INTERPRETATION</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-3 mb-6 leading-[1.12]">
                Translation and <span className="font-semibold text-teal">Interpretation.</span>
              </h2>
              <p className="text-base text-graphite font-body leading-relaxed">
                The most visible part of the job, and the most underestimated. Real medical translation isn't bilingualism: it's understanding US-Italian medical terminology bridging, knowing what an "EKG" is and what to write in Italian for the same thing, and knowing which words in Italian carry different clinical weight than their English counterparts.
              </p>
            </div>
            
            <div className="lg:col-span-7 lg:pl-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "In-clinic medical interpretation during visits",
                "Document translation: medical records, prescriptions, medical checks, discharge summaries",
                "Telephone interpretation during external appointments",
                "US-Italian medical terminology bridging (ICD-10, CPT, brand name drugs)"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 bg-sand/15 border border-sand/40 rounded-2xl hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-graphite leading-relaxed font-body">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Module 02: US Insurance Management (bg-teal, text-cream, layout reversed) */}
        <Section showDivider={false} className="bg-teal text-cream py-16 md:py-20 lg:py-24 border-b border-sand/30 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-dark/10 to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
          >
            {/* Checklist on the Left (lg:col-span-7) */}
            <div className="lg:col-span-7 lg:pr-6 order-2 lg:order-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pre-authorization requests on your behalf",
                "Direct billing where the insurance supports it",
                "Complete reimbursement document packs (invoice + report + codes)",
                "Communication with US insurance providers",
                "Follow-up on pending or disputed claims"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 bg-cream/10 border border-cream/20 rounded-2xl hover:border-[#E5DBC5]/40 hover:bg-cream/15 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#E5DBC5]/20 flex items-center justify-center text-[#E5DBC5] shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-cream/90 leading-relaxed font-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Info on the Right (lg:col-span-5) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Eyebrow className="!text-[#E5DBC5]/80">MODULE 02 · REIMBURSEMENT ASSISTANCE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cream tracking-tight mt-3 mb-6 leading-[1.12]">
                US Insurance <span className="font-semibold text-[#E5DBC5]">Management.</span>
              </h2>
              <p className="text-base text-cream/90 font-body leading-relaxed mb-6">
                Most clinics in Italy don't know what to do with a TRICARE card. We've built the process to handle it directly. Pre-authorization requests, claims paperwork, direct billing where supported, reimbursement document packs where it isn't — all in formats US insurance providers actually accept.
              </p>
              <Button href="/insurance" variant="text" className="text-xs font-semibold !text-[#E5DBC5] hover:!text-cream">
                See accepted insurance plans <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </motion.div>
        </Section>

        {/* Module 03: Specialist Coordination (bg-gradient-to-br Warm Sand, text-ink) */}
        <Section showDivider={false} className="bg-gradient-to-br from-[#E7DFD4] via-[#FDFBF9] to-[#DED4C3] py-16 md:py-20 lg:py-24 border-y border-sand/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5">
              <Eyebrow>MODULE 03 · SPECIALIST COORDINATION</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-3 mb-6 leading-[1.12]">
                Specialist <span className="font-semibold text-teal">Coordination.</span>
              </h2>
              <p className="text-base text-graphite font-body leading-relaxed">
                When you need care that Family Clinic doesn't cover directly — a hospital procedure, a sub-specialty we don't have in-house, an imaging study that requires equipment we don't have — the Liaison coordinates. We book the external appointment, transfer your medical record, attend (where allowed) to interpret, and bring the results back into your Family Clinic file.
              </p>
            </div>
            
            <div className="lg:col-span-7 lg:pl-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "External specialist appointment booking",
                "Cross-clinic medical record transfer",
                "Second opinion facilitation",
                "Hospital procedure pre-admission paperwork"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 bg-cream/80 border border-sand/70 rounded-2xl hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-graphite leading-relaxed font-body">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Module 04: Hospital Support (bg-ink, text-cream, layout reversed) */}
        <Section showDivider={false} className="bg-ink text-cream py-16 md:py-20 lg:py-24 border-y border-ink overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
          >
            {/* Checklist on the Left */}
            <div className="lg:col-span-7 lg:pr-6 order-2 lg:order-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pre-admission paperwork and documentation",
                "In-person escort during hospital procedures (where allowed)",
                "Discharge documentation translated and explained",
                "Post-hospital follow-up coordination"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 bg-cream/5 border border-cream/10 rounded-2xl hover:border-[#E5DBC5]/40 hover:bg-cream/10 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#E5DBC5]/10 flex items-center justify-center text-[#E5DBC5] shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-cream/90 leading-relaxed font-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Info on the Right */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Eyebrow className="!text-[#E5DBC5]/80">MODULE 04 · HOSPITAL PROCEDURAL NAVIGATION</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cream tracking-tight mt-3 mb-6 leading-[1.12]">
                Hospital <span className="font-semibold text-[#E5DBC5]">Support.</span>
              </h2>
              <p className="text-base text-cream/90 font-body leading-relaxed">
                Going into an Italian hospital alone, in a language you don't speak, after a diagnosis that worried you — this is when patients feel most lost. The Liaison is there: pre-admission paperwork, escort to the procedure (where hospital rules allow), discharge document translation, and coordination of the post-hospital follow-up back at Family Clinic.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Module 05: Concierge Logistics (bg-sand/15, text-ink) */}
        <Section showDivider={false} className="bg-sand/15 py-16 md:py-20 lg:py-24 border-b border-sand/30">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5">
              <Eyebrow>MODULE 05 · LOGISTICAL COMFORT</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-3 mb-6 leading-[1.12]">
                Concierge <span className="font-semibold text-teal">Logistics.</span>
              </h2>
              <p className="text-base text-graphite font-body leading-relaxed">
                The small things that aren't medical but feel like obstacles when you're sick in a foreign country. Available on request as part of the Liaison service.
              </p>
            </div>
            
            <div className="lg:col-span-7 lg:pl-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Transport coordination to and from appointments",
                "Pharmacy pickup support and prescription translation",
                "Communication support for ongoing medication regimens",
                "Documentation gathering for US-bound family medical needs"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 bg-cream/60 border border-sand/40 rounded-2xl hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-graphite leading-relaxed font-body">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Who Medical Liaison Is For */}
        <Section showDivider={false} className="bg-gradient-to-r from-[#F4EFE6] to-[#FAF8F5] border-y border-sand/40 py-16 md:py-20 lg:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Box Column (Inverted to Left on Desktop, first/second stacked nicely) */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-[#FCFAF8] border border-sand/70 p-8 sm:p-10 rounded-3xl shadow-md w-full flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal/60 to-teal" />
              <h4 className="font-display font-semibold text-ink text-base mb-2 border-b border-sand/30 pb-3">
                Liaison eligibility covers:
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  "US military personnel stationed at Caserma Ederle or Camp Del Din",
                  "Military dependents and family members during local stay",
                  "US civilian contractors and DoD employees in Veneto",
                  "American expats living in Vicenza or Veneto region",
                  "US tourists requiring professional medical care during travel in Italy",
                  "American patients of any status needing complex coordination between Italian and US healthcare networks"
                ].map((item, id) => (
                  <motion.div 
                    key={id} 
                    whileHover={{ x: 6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex gap-3.5 items-start p-4 bg-[#F9F7F4] border border-sand/50 rounded-xl hover:border-teal/30 hover:bg-cream hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-lg bg-teal/5 flex items-center justify-center text-teal shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <span className="text-xs sm:text-sm text-graphite font-body leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Title Column (Inverted to Right on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-6">
              <span className="px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal inline-block mb-4">
                TARGET PATIENTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-1 mb-6 leading-[1.12]">
                Built specifically for the US community in <span className="font-semibold text-teal">Veneto.</span>
              </h2>
              <p className="text-sm sm:text-base text-graphite font-body leading-relaxed">
                Medical Liaison Services are offered exclusively to American patients. Our entire care platform — from US insurance support protocols to specialized terminology bridging — is constructed around this specific patient group to guarantee elite delivery of care.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* How It's Delivered - High-Fidelity Interactive Layout */}
        <Section showDivider={false} className="bg-gradient-to-b from-[#FAF8F5] to-[#E9E2D4] py-20 lg:py-28 border-b border-sand/40 relative overflow-hidden">
          {/* Subtle architectural background detailing */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#005F54_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <span className="px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal inline-block mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight mt-1 mb-6 leading-tight">
              Embedded in your care, <span className="font-semibold text-teal">not bolted on.</span>
            </h2>
            <p className="text-sm sm:text-base text-graphite font-body max-w-2xl mx-auto leading-relaxed">
              The Liaison isn't a separate, complex department you have to call. The entire flow is built directly into how Family Clinic handles American patients' medical visits.
            </p>
          </div>

          {/* Staggered Interactive 3-Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 relative z-10 max-w-5xl mx-auto px-4">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02, shadow: "lg" }}
              className="group bg-[#FCFAF8] border border-sand/75 rounded-3xl p-8 shadow-sm hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                  <MessageSquare size={18} />
                </div>
                <span className="font-mono text-[10px] font-bold text-teal/70 uppercase tracking-widest block mb-2">Step 01 · Booking</span>
                <h4 className="font-display font-semibold text-ink text-lg mb-3">WhatsApp Coordination</h4>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                  When you book a visit through WhatsApp, our Liaison team becomes part of the conversation from message one. No tedious phone trees or delays.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02, shadow: "lg" }}
              className="group bg-[#FCFAF8] border border-sand/75 rounded-3xl p-8 shadow-sm hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                  <HeartHandshake size={18} />
                </div>
                <span className="font-mono text-[10px] font-bold text-teal/70 uppercase tracking-widest block mb-1">Step 02 · In-Clinic</span>
                <h4 className="font-display font-semibold text-ink text-lg mb-3">In-Visit Translation</h4>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                  During your check-up at the clinic, the Liaison resides in the exam room or remains on call to instantly bridge any linguistic or procedural details.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02, shadow: "lg" }}
              className="group bg-[#FCFAF8] border border-sand/75 rounded-3xl p-8 shadow-sm hover:border-teal/30 hover:bg-cream hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E5DBC5]/15 flex items-center justify-center text-teal mb-6 border border-teal/10 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                  <ShieldCheck size={18} />
                </div>
                <span className="font-mono text-[10px] font-bold text-teal/70 uppercase tracking-widest block mb-2">Step 03 · Insurance</span>
                <h4 className="font-display font-semibold text-ink text-lg mb-3">Reimbursement Pack</h4>
                <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">
                  Our team packages and double-codes your medical invoice and notes, translating everything into accepted US formats on the very same day.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Elegant and highly visible Included/Disclaimer Banner */}
          <div className="max-w-4xl mx-auto bg-cream/55 border border-sand/65 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left relative z-10 backdrop-blur-md shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-teal/5 border border-teal/15 flex items-center justify-center text-teal shrink-0">
              <Award size={18} />
            </div>
            <p className="text-xs sm:text-sm text-ink/90 font-sans leading-relaxed">
              <span className="font-semibold text-teal uppercase tracking-wider block sm:inline mr-2 text-[11px]">Included Core Services:</span>
              Translation inside the clinic, basic specialist coordination, and clean insurance code packing are inherently included under Family Clinic's visit price framework. Off-site concierge care, like physical hospital procedure escorts, are quoted up-front upon patient request.
            </p>
          </div>
        </Section>

        {/* 6 Questions Mini-FAQ Split Layout */}
        <Section showDivider={false} className="bg-cream border-b border-sand/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal inline-block mb-4">
                COMMON QUESTION RESOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal leading-[1.12]">
                Frequently Asked <br />
                <span className="text-teal font-semibold">Questions.</span>
              </h2>
              <p className="text-sm text-graphite font-body leading-relaxed mt-4 mb-8">
                Straightforward, professional feedback about scheduling, results collection, billing documents, and diagnostic reporting rules.
              </p>
              
              <div className="p-6 bg-sand/15 border border-sand/35 rounded-2xl flex flex-col gap-4">
                <div>
                  <h4 className="font-display font-semibold text-ink text-sm">Have a unique question?</h4>
                  <p className="text-xs text-graphite mt-1 mb-4 leading-relaxed">
                    Our dynamic clinic liaisons can confirm registration requirements or scheduling hours directly on WhatsApp.
                  </p>
                </div>
                <Button variant="secondary" href={CLINIC_INFO.whatsappLink} isExternal className="w-fit text-xs">
                  Ask us on WhatsApp <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 w-full">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border border-sand/60 bg-cream rounded-2xl overflow-hidden shadow-xxs hover:shadow-xs transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left py-5 px-6 font-display font-semibold text-ink flex items-center justify-between gap-4 focus:bg-sand/10 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-medium leading-snug">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full border border-sand/60 flex items-center justify-center text-teal shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-graphite font-body leading-relaxed border-t border-sand/20">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </Section>

        {/* Reassuring Liaison Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-4">
              TALK TO US
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              A WhatsApp message is all it takes to start.
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              Tell us what you need. Send us your insurance card. The Liaison team will respond and walk you through the next step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto font-semibold"
              >
                WhatsApp the Liaison team <MessageSquare size={16} />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-cream !border-cream/20 hover:!bg-cream/10"
                href={`mailto:${CLINIC_INFO.email}`}
              >
                Email the clinic <Mail size={16} />
              </Button>
            </div>
          </div>
        </Section>

      </main>
    </>
  );
}
