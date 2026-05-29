import { useState } from "react";
import { Plus, Minus, ArrowRight, CheckCircle, Calendar, MessageSquare, Mail, Layers, Heart, FileText, Sparkles } from "lucide-react";
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

export function PrimaryCare() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number>(0);
  const breadcrumb = buildBreadcrumbSchema("Primary Care", "/primary-care");

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

  const services = [
    {
      title: "General Consultations",
      text: "Comprehensive physical exams, first-visit history, ongoing chronic supervision, and bilingual coordination.",
      icon: Heart,
      bullets: ["Adult & pediatric care reviews", "Bilingual medical reporting", "Continuous system correlation"],
    },
    {
      title: "Prescription Renewal",
      text: "Meticulous conversions of US medical prescriptions to equivalent Italian pharmaco-formulations.",
      icon: FileText,
      bullets: ["US to Italian brand matching", "Dosage conversion controls", "Direct farmacia correspondence"],
    },
    {
      title: "Certificates & Screening",
      text: "Official fitness-to-fly, work, sports medical certificates, and personalized wellness screening programs.",
      icon: Sparkles,
      bullets: ["Non-agonist sports certifications", "Employment & school health records", "Custom diagnostic lab packages"],
    },
    {
      title: "Immediate Acute Care",
      text: "Swift, same-week diagnosis and treatment blocks reserved for urgent, unexpected symptoms and seasonal illnesses.",
      icon: Calendar,
      bullets: ["Rapid appointment windows", "In-house triage & diagnosis", "Direct post-visit guidance"],
    },
  ];

  const reasonsList = [
    "Cold, flu, respiratory infections, persistent cough",
    "Skin conditions, rashes, dermatological evaluations",
    "Gastrointestinal issues, abdominal pain, recurrent symptoms",
    "Headaches, fatigue, unexplained tiredness",
    "Sport-related minor injuries (sprains, muscle pain, light trauma)",
    "Routine annual check-up or executive screening",
    "Adjusting or renewing chronic medication started in the US",
    "Reviewing recent lab work or imaging done elsewhere",
    "A second opinion on a diagnosis you received and want to verify",
  ];

  const faqs = [
    {
      q: "Can I register with Family Clinic as my primary doctor without an Italian tessera sanitaria?",
      a: "Yes. Family Clinic operates as a private clinic, so no tessera sanitaria is required. You can come for one visit or use us as your ongoing family doctor in Italy. Many of our American and international patients use us exactly this way.",
    },
    {
      q: "Do you accept walk-ins or appointment only?",
      a: "We work by appointment. WhatsApp is the fastest way to book, often same-day or next-day when needed.",
    },
    {
      q: "Can I get a prescription refill for medication I started in the US?",
      a: "Often yes, but it depends on the medication. Send the prescription bottle photo (or the US prescription document) on WhatsApp before booking, and we'll tell you if a primary care visit is enough or if a specialist consultation is needed first.",
    },
    {
      q: "Do you provide medical records in English for my insurance back home?",
      a: "Yes. All medical reports for American and international patients are issued in English by default, with ICD-10 diagnostic codes so they're directly usable by your US insurance or your US physician.",
    },
    {
      q: "Are pediatric visits part of primary care or specialist care?",
      a: "Pediatric primary care for routine visits, vaccinations, and certificates is handled by our pediatricians under the Specialist Care umbrella. For mixed family appointments (parent + child), we usually arrange them together so you don't make two trips.",
    },
  ];

  return (
    <>
      <Seo
        title="English Speaking Family Doctor in Vicenza · Family Clinic Primary Care"
        description="English-speaking primary care in Vicenza for American military, expat families, and Italians. General medicine, check-ups, prescriptions, certificates. No tessera sanitaria needed."
        schema={breadcrumb}
      />

      <main className="bg-cream pt-0">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://familyclinic.health/images/primary_1.jpeg" 
              alt="Family Doctor in Vicenza" 
              width={1800}
              height={1200}
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
                  Primary Care · Medicina Generale
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                Your family doctor <br />
                <span className="font-semibold text-teal relative inline-block">
                  here in Vicenza.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 sm:mb-10 block"
              >
                General medicine for adults and children, check-ups, prescriptions, and medical certificates without waiting lists or local bureaucracy.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20"
              >
                <Button
                  variant="primary"
                  href={CLINIC_INFO.whatsappLink}
                  isExternal
                >
                  Book on WhatsApp <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="bg-cream/10 border-cream/20 hover:bg-cream hover:text-ink text-cream transition-colors backdrop-blur-sm"
                >
                  Call the clinic
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* AEO Opener Paragraph */}
        <section className="relative py-16 bg-gradient-to-b from-cream via-cream to-sand/10 border-b border-sand/30 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
          <Container className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-12 h-[1px] bg-teal mx-auto mb-6" />
              <p className="text-lg md:text-xl text-ink font-body font-light leading-relaxed tracking-wide">
                Family Clinic's primary care service offers English-speaking general medical visits in Vicenza for American military personnel and dependents stationed at Caserma Ederle and Camp Del Din, international families, and Italian patients who prefer a private healthcare model. No Italian tessera sanitaria is required, US insurance is accepted for American patients, and same-week appointments are always available.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* What Primary Care Covers */}
        <Section showDivider={false} className="bg-cream">
          <div className="max-w-4xl mb-12 md:mb-16">
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2 className="text-h2 text-ink mt-2 mb-4 leading-tight font-display">
              Everything a family doctor should do, in one modern practice.
            </h2>
            <p className="text-base text-graphite font-body leading-relaxed max-w-3xl">
              Primary care is the foundation of your healthcare. It is the first call when something does not feel right, the place where chronic conditions are followed, and where most everyday medical needs are handled without ever needing a hospital. At Family Clinic, primary care is offered in English by physicians who understand both the Italian system and professional international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Towering photo and key clinic stats */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-cream"
              >
                <img 
                  src="https://familyclinic.health/images/primary_2.jpeg" 
                  alt="Modern clinical consultation at Family Clinic" 
                  width={1000}
                  height={1333}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating pill indicators for visual rhythm */}
                <span className="absolute top-6 left-6 px-4 py-2 bg-teal text-cream rounded-full text-xs font-semibold shadow-lg backdrop-blur-md">
                  ★ Bilingual Standard · English / Italiano
                </span>

                <div className="absolute bottom-6 left-6 right-6 p-6 bg-ink/90 text-cream rounded-2xl backdrop-blur-md border border-cream/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E8E1CE] block mb-1">
                    APPOINTMENTS WITHIN 48 HOURS
                  </span>
                  <h4 className="font-display font-light text-sm text-sand/90">
                    We keep appointments reserve blocks for acute issues - no multi-week waiting lists.
                  </h4>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-sand/15 border border-sand/35 rounded-xl text-center">
                  <span className="block font-display text-2xl font-semibold text-teal">100%</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-graphite/80">English Speaking</span>
                </div>
                <div className="p-4 bg-sand/15 border border-sand/35 rounded-xl text-center">
                  <span className="block font-display text-2xl font-semibold text-teal">0</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-graphite/80">Bureaucracy Required</span>
                </div>
              </div>
            </div>

            {/* Right side: High-end interactive service list */}
            <div className="lg:col-span-7">
              <div className="space-y-3 font-sans">
                {services.map((item, index) => {
                  const IconComponent = item.icon;
                  const isOpen = activeService === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden cursor-pointer ${
                        isOpen 
                          ? "bg-sand/15 border-teal/40 shadow-lg shadow-teal/5" 
                          : "bg-cream border-sand hover:border-teal/20"
                      }`}
                      onMouseEnter={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                    >
                      <div className="p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen ? "bg-teal text-cream" : "bg-teal/5 text-teal group-hover:bg-teal group-hover:text-cream"
                          }`}>
                            <IconComponent size={20} className="transition-colors duration-300" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-mono text-[9px] text-[#C2BCA8] uppercase tracking-widest font-semibold font-sans">0{index + 1}</span>
                              <span className="w-1 h-1 rounded-full bg-sand" />
                              <span className="font-mono text-[9px] text-[#C2BCA8] uppercase tracking-widest font-semibold font-sans">Primary Care</span>
                            </div>
                            <h3 className="font-display font-semibold text-ink text-base md:text-lg group-hover:text-teal transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isOpen ? "border-teal text-teal rotate-45 bg-teal/5" : "border-sand/80 text-teal/50"
                        }`}>
                          <Plus size={14} className="transition-transform duration-300" />
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-1 border-t border-sand/30">
                              <p className="text-xs sm:text-sm text-graphite/90 font-body leading-relaxed mb-4">
                                {item.text}
                              </p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                                {item.bullets.map((bullet, idx) => (
                                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-cream/70 rounded-xl border border-sand/65">
                                    <CheckCircle size={14} className="text-teal shrink-0" />
                                    <span className="text-[11px] sm:text-xs text-ink/95 font-medium font-sans">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </Section>

        {/* Premium Core Client Experience Block with Image split */}
        <section className="relative overflow-hidden bg-sand/15 border-t border-b border-sand/40 py-16 lg:py-24">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                <Eyebrow>THE CLINIC EXPERIENCE</Eyebrow>
                <h2 className="text-h2 text-ink mt-2 mb-6 font-display leading-tight">
                  Modern, direct patient-physician partnership.
                </h2>
                
                <div className="space-y-6">
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4 p-4 bg-cream rounded-2xl border border-sand shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/5 border border-teal/10 flex items-center justify-center shrink-0">
                      <Sparkles size={18} className="text-teal" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-ink text-sm">Strict Appointment Punctuality</h4>
                      <p className="text-xs text-graphite mt-1 leading-relaxed">
                        We hate waiting rooms too. By scheduling appointments generously, patients are seen on time, every single visit.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex gap-4 p-4 bg-cream rounded-2xl border border-sand shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/5 border border-teal/10 flex items-center justify-center shrink-0">
                      <Heart size={18} className="text-teal" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-ink text-sm">Bilingual Medical Reporting</h4>
                      <p className="text-xs text-graphite mt-1 leading-relaxed">
                        Every diagnostic result, exam parameter, and treatment plan can be clearly recorded in both English and Italian.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4 p-4 bg-cream rounded-2xl border border-sand shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/5 border border-teal/10 flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-teal" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-ink text-sm">Direct Liaison Support</h4>
                      <p className="text-xs text-graphite mt-1 leading-relaxed">
                        We process health claim documents direct to US insurers, meaning zero headache and clear pathways to reimbursement.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[3/4] max-w-[440px] mx-auto lg:ml-auto rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-cream"
                >
                  <img 
                    src="https://familyclinic.health/images/primary_3.jpeg" 
                    alt="High-quality direct vertical clinical consultation at Family Clinic" 
                    width={1000}
                    height={1333}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

            </div>
          </Container>
        </section>

        {/* Common Reasons Patients Come To Us */}
        <Section showDivider={false} className="bg-cream border-b border-sand/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Eyebrow>WHEN TO BOOK</Eyebrow>
              <h2 className="text-h2 text-ink mt-2 leading-tight font-display">
                Symptom & Treatment Guide
              </h2>
              <p className="text-sm text-graphite font-body leading-relaxed mt-4 mb-6">
                You don't need a critical diagnosis to seek care. Typical reasons primary care patients visit us include respiratory symptoms, health screenings, and US drug prescriptions.
              </p>

              <div className="bg-teal/5 border border-teal/15 p-6 rounded-2xl">
                <span className="font-sans text-[10px] text-teal block mb-1 uppercase font-bold tracking-wider">QUICK MESSAGE SERVICES</span>
                <p className="text-xs text-graphite leading-relaxed italic">
                  "For any symptom you are not sure about, send us a quick message on WhatsApp. Often we can advise within minutes if an appointment is recommended."
                </p>
              </div>

              {/* Added nice visual anchor */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 relative rounded-2xl overflow-hidden aspect-[16/9] border border-sand"
              >
                <img 
                  src="https://familyclinic.health/images/primary_4.jpeg" 
                  alt="Healthy lifestyle guidelines and pediatric care" 
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 w-full">
              <div className="bg-cream border border-sand p-6 sm:p-8 rounded-[2rem] shadow-sm">
                <h3 className="font-display font-semibold text-ink text-base mb-6 flex items-center gap-2 border-b border-sand/30 pb-4">
                  <Layers size={16} className="text-teal" />
                  Most common consultation triggers:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {reasonsList.map((reason, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-start gap-3 p-3 bg-sand/10 hover:bg-teal/5 border border-sand/20 hover:border-teal/20 rounded-xl transition-all h-full"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm text-ink leading-relaxed font-body">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Our Primary Care Works For Americans - Beautiful Soft Warm Palette Block */}
        <section className="relative bg-sand/20 border-t border-b border-sand/40 py-20 lg:py-28 overflow-hidden font-sans">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#2b8fa3_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <Container className="relative z-10 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>FOR INTERNATIONAL PATIENTS</Eyebrow>
                <h2 className="text-h2 text-ink mt-2 leading-tight font-display mb-6">
                  Medical continuity built for expats & US military.
                </h2>
                <p className="text-base text-graphite font-body leading-relaxed mb-8">
                  The Italian healthcare landscape can feel daunting. We design our practice to mirror premium American primary clinics: straightforward communication, English documentation, and swift referral synchronization.
                </p>

                {/* Staggered bullet items with clean circles */}
                <div className="space-y-4">
                  {[
                    "International standards with same-physician continuity",
                    "English records with standardized ICD-10 codings",
                    "Direct liaison paths to claim reimbursement"
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                      <span className="text-sm font-semibold text-graphite">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="p-8 bg-cream border border-sand hover:border-teal/30 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <span className="font-mono text-xs text-teal block mb-3 font-semibold">ICD-10 COMPLIANT</span>
                    <h4 className="font-display font-semibold text-ink text-base mb-2">English Reporting</h4>
                    <p className="text-xs text-graphite leading-relaxed">
                      Every diagnostic check, physical exam, and check-up is documented in full-scope clinical English, complete with diagnostic structures for immediate insurance eligibility.
                    </p>
                  </div>

                  <div className="p-8 bg-cream border border-sand hover:border-teal/30 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <span className="font-mono text-xs text-teal block mb-3 font-semibold">PHARMA COMPATIBILITY</span>
                    <h4 className="font-display font-semibold text-ink text-base mb-2">Prescription Conversions</h4>
                    <p className="text-xs text-graphite leading-relaxed">
                      We check, convert, and authorize prescriptions for equivalent Italian pharmaceutical formulations, allowing patients to seamlessly renew chronic medical regimes.
                    </p>
                  </div>

                  {/* Fully immersive image card breaking the grid */}
                  <div className="sm:col-span-2 relative aspect-[16/7] rounded-2xl overflow-hidden border border-sand shadow-sm hover:border-teal/20 transition-all">
                    <img 
                      src="https://familyclinic.health/images/primary_5.jpeg" 
                      alt="Insurance support and medical documentation at Family Clinic" 
                      width={1200}
                      height={525}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-transparent flex items-center p-8 sm:p-10">
                      <div className="max-w-[280px] sm:max-w-md">
                        <span className="font-mono text-[10px] sm:text-xs text-brand-gold/90 text-[#D4AF37] block uppercase font-bold tracking-[0.15em] mb-2">STATIONED IN ITALY</span>
                        <h5 className="font-display font-medium text-cream text-base sm:text-lg leading-snug drop-shadow-sm">
                          Accepted by major international military and private benefits plans.
                        </h5>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Insurance Bridge Banner */}
        <div className="bg-sand/35 py-12 border-b border-sand/40 text-center relative font-sans">
          <Container className="max-w-3xl">
            <span className="font-sans text-xs font-semibold text-teal tracking-[0.2em] block mb-2">
              US INSURANCE
            </span>
            <p className="font-display text-lg md:text-xl text-ink font-semibold leading-relaxed mb-6">
              Major US insurance plans accepted. Pre-authorization and reimbursement docs handled by our Medical Liaison team.
            </p>
            <Button variant="outline" href="/insurance" className="text-xs py-3 px-6 hover:bg-neutral-50 border-sand">
              See accepted insurance <ArrowRight size={12} className="ml-1" />
            </Button>
          </Container>
        </div>

        {/* Major Majestic FAQ Section */}
        <Section showDivider={false} className="bg-cream py-20 lg:py-28 font-sans border-b border-sand/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal inline-block mb-4">
                COMMON QUESTION RESOLUTION
              </span>
              <h2 className="text-h2 text-ink mt-2 leading-tight font-display text-4xl sm:text-5xl">
                Frequently Asked <br />
                <span className="text-teal font-semibold">Questions.</span>
              </h2>
              <p className="text-sm text-graphite font-body leading-relaxed mt-4 mb-8">
                Clear answers regarding register requirements, billing processes, and medical records eligibility of our Family Clinic primary consultations.
              </p>
              
              <div className="p-6 bg-sand/15 border border-sand/35 rounded-2xl flex flex-col gap-4">
                <div>
                  <h4 className="font-display font-medium text-ink text-sm">Have a unique question?</h4>
                  <p className="text-xs text-graphite mt-1 mb-4 leading-relaxed">
                    Our dynamic clinic liaisons can confirm registration requirements or scheduling hours directly on WhatsApp.
                  </p>
                </div>
                <Button variant="secondary" href={CLINIC_INFO.whatsappLink} isExternal className="w-fit text-xs">
                  Ask us on WhatsApp <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 w-full flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border border-sand/60 bg-cream rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left py-5 px-6 font-display font-semibold text-ink flex items-center justify-between gap-4 focus:bg-sand/10 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full border border-sand/60 flex items-center justify-center text-teal shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
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

        {/* Related Services */}
        <Section showDivider={true}>
          <div className="max-w-3xl mb-12">
            <Eyebrow>RELATED SERVICES</Eyebrow>
            <h2 className="text-h2 text-ink mt-2 leading-tight">
              Continue exploring our clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream border border-sand/40 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-display font-medium text-lg text-ink mb-3">Specialist Care</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6">
                  12 specialties, all in English, all under one roof. Expert coordination between fields.
                </p>
              </div>
              <Button variant="text" href="/specialist-care" className="text-xs font-semibold hover:text-teal">
                Explore specialists &rarr;
              </Button>
            </div>

            <div className="p-8 bg-cream border border-sand/40 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-display font-medium text-lg text-ink mb-3">Diagnostics</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6">
                  On-site ECG, ultrasound, blood tests. Results explained in English while you're still here.
                </p>
              </div>
              <Button variant="text" href="/diagnostics" className="text-xs font-semibold hover:text-teal">
                Explore diagnostics &rarr;
              </Button>
            </div>

            <div className="p-8 bg-cream border border-sand/40 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-display font-medium text-lg text-ink mb-3">Medical Liaison</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6">
                  Insurance, translation, hospital escort and concierge coordination for US patients.
                </p>
              </div>
              <Button variant="text" href="/medical-liaison" className="text-xs font-semibold hover:text-teal">
                Explore liaison &rarr;
              </Button>
            </div>
          </div>
        </Section>

        {/* Reassuring Primary Care Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-sage block mb-4">
              REASSURING VISIT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Need to see a doctor this week?
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              WhatsApp is the fastest way to reach us. Tell us what's going on and we'll let you know what to do next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto font-semibold"
              >
                WhatsApp now <MessageSquare size={16} />
              </Button>
              <Button
                variant="outline"
                href={`mailto:${CLINIC_INFO.email}`}
                className="w-full sm:w-auto text-cream !border-cream/20 hover:!bg-cream/10"
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
