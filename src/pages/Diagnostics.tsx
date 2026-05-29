import { useState, useEffect } from "react";
import { Plus, Minus, ArrowRight, CheckCircle, Calendar, MessageSquare, ShieldCheck, Activity, Heart, Eye, Beaker, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";
import { CLINIC_INFO } from "../lib/constants";
import { Link } from "react-router-dom";

export function Diagnostics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const breadcrumb = buildBreadcrumbSchema("Diagnostics", "/diagnostics");

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
      q: "Do I need a prescription to get an ultrasound or ECG?",
      a: "At Family Clinic, no. Our physicians order and perform the test during the same visit when clinically appropriate. If you arrive with an external prescription, we can translate and perform it directly.",
    },
    {
      q: "How long until I get my results?",
      a: "For standard ECG, echocardiography, and ultrasounds, findings are interpreted and explained with you during the same session. Laboratory results are securely processed and shared, typically within 1–3 business days.",
    },
    {
      q: "Are diagnostic reports standardized for travel or work?",
      a: "Yes. All diagnostic records are issued in standardized dual-language formatting and structured with global ICD-10 diagnostic codes and CPT coding.",
    },
    {
      q: "Can my home-country doctor receive a copy of my results?",
      a: "Yes. With your written consent, we securely transmit your diagnostic reports directly to your primary care physician abroad, keeping your continuity of treatment flawless.",
    },
    {
      q: "Is fasting required for blood tests?",
      a: "This depends on the specific panel ordered. Upon booking, our nursing team will provide exact prep sheets regarding fasting times or morning medication adjustments.",
    },
  ];

  return (
    <>
      <Seo
        title="On-Site Diagnostics & Testing · Family Clinic Vicenza"
        description="ECG, echocardiography, ultrasound, Holter monitoring, blood tests, and travel vaccinations at Family Clinic Vicenza. Fast, integrated medical testing with bilingual reporting."
        schema={breadcrumb}
      />

      <main className="bg-cream pt-0 overflow-x-clip [word-break:normal]">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[520px] md:min-h-[580px] lg:min-h-[660px] flex items-center text-cream overflow-hidden border-b border-sand/30">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://familyclinic.health/images/diagn_1.jpeg" 
              alt="Diagnostics testing and screening" 
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
                  On-Site Testing · Diagnostica in Sede
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight break-normal [text-wrap:balance]"
              >
                On-site diagnostics.<br className="sm:block hidden" />
                <span className="font-semibold text-teal relative inline-block">
                  Results explained clearly.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 sm:mb-10 block"
              >
                ECG, ultrasound imaging, blood draws, and diagnostic screening. Fast, integrated medical evaluations processed with complete clarity without multiple trips.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20"
              >
                <Button variant="primary" href={CLINIC_INFO.whatsappLink} isExternal className="bg-teal text-cream hover:bg-teal-dark">
                  Book on WhatsApp <ArrowRight size={16} />
                </Button>
                <Button variant="outline" href={`tel:${CLINIC_INFO.phone}`} className="bg-cream/10 border-cream/20 hover:bg-cream hover:text-ink text-cream transition-colors backdrop-blur-sm">
                  Call the clinic
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Dynamic Opener Paragraph */}
        <Section showDivider={false} className="py-10 md:py-14 bg-gradient-to-b from-cream to-sand/10 border-b border-sand/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-[18px] text-graphite font-body leading-relaxed [text-wrap:balance]">
              We provide integrated, modern testing services right inside our clinic. From immediate 12-lead electrocardiograms, comprehensive abdominal and pelvic ultrasound scans, to arterial screenings and quick lab panels, we keep your diagnostic process seamless. Receive structured, professional reports recognized globally.
            </p>
          </div>
        </Section>

        {/* Section 1: The Advantage (Split Screen: Text + Image) */}
        <Section showDivider={true} className="bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side text column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Eyebrow>The Diagnostics Standard</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal mt-3 mb-6 leading-[1.15] [text-wrap:balance]">
                Immediate answers,<br className="sm:block hidden" />
                <span className="font-semibold text-teal">integrated in one visit.</span>
              </h2>
              <p className="text-base text-graphite font-body leading-relaxed mb-6">
                Standard medical diagnostics can be frustrating, forcing you to visit disconnected laboratories, wait weeks for appointments, and carry heavy paper systems back to your doctor. We compress this sequence by making routine and advanced clinical testing immediate. Most common studies happen directly during your consultation, letting your doctor explain the findings in real time.
              </p>
              
              <ul className="flex flex-col gap-3 text-sm text-graphite font-body">
                {[
                  "Diagnostic exams scheduled and performed alongside your clinical visit.",
                  "Immediate explanation of findings by your doctor before leaving.",
                  "Comprehensive dual-language records with ICD-10 and CPT reference coding.",
                  "Secure direct coordination with your primary physicians abroad.",
                  "Direct insurance formatting for simple, hassle-free claims processing."
                ].map((item, id) => (
                  <li key={id} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-teal shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side portrait image with warm framing */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative aspect-[4/5] max-w-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-cream bg-sand/30">
                <img 
                  src="https://familyclinic.health/images/diagn_2.jpeg" 
                  alt="Modern testing facility Family Clinic" 
                  width={1000}
                  height={1250}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </Section>

        {/* Section 2: Immersive Deep Teal Contrast - Cardiac & Vascular Block */}
        <Section showDivider={false} className="bg-teal text-cream border-b border-sand/30 relative">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-dark/10 to-transparent pointer-events-none" />
          
          <Container className="relative z-10">
            <div className="max-w-3xl mb-16">
              <Eyebrow className="!text-cream/80">DIAGNOSTICS · CARDIOVASCULAR</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cream tracking-tight break-normal leading-[1.12] [text-wrap:balance]">
                Cardiovascular health,<br className="sm:block hidden" />
                <span className="font-semibold text-[#E5DBC5] relative">accurately evaluated.</span>
              </h2>
              <p className="text-base text-cream/90 font-body leading-relaxed max-w-2xl mt-6">
                Our advanced cardiovascular assessments are integrated within clinical consultations. All procedures are conducted directly in the clinic, allowing immediate interpretation, peace of mind, and proactive therapy coordination.
              </p>
            </div>

            {/* Interactive styled cards in deep teal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "12-lead ECG (Electrocardiogram)",
                  desc: "Standard heart rhythm recording and cardiac screening. Completed in a few minutes with real-time interpretation and instant counseling during your appointment."
                },
                {
                  title: "Echocardiography (Cardiac Ultrasound)",
                  desc: "Detailed imaging of cardiac chambers, valves, and flow Dynamics. Perfect for addressing palpitations, tracking hypertension, chest discomfort, or post-activity screenings."
                },
                {
                  title: "24-hour Holter ECG Monitoring",
                  desc: "Continuous, portable electrical monitoring designed to detect rare heart rhythm deviations. The non-invasive recorder is fitted in-office and evaluated quickly."
                },
                {
                  title: "24-hour Ambulatory Blood Pressure Monitor",
                  desc: "Automated continuous blood pressure logging during standard physical activities and overnight rest. Provides the biometric evidence needed for targeted hypertension management."
                }
              ].map((test, i) => (
                <div key={i} className="p-8 bg-teal-dark/30 border border-cream/15 rounded-3xl hover:border-cream/35 transition-all duration-300 shadow-sm group">
                  <div className="w-10 h-10 rounded-2xl bg-cream/15 flex items-center justify-center text-[#E5DBC5] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Heart size={18} />
                  </div>
                  <h4 className="font-display font-bold text-cream text-lg mb-3">{test.title}</h4>
                  <p className="text-xs text-cream/85 leading-relaxed font-body">{test.desc}</p>
                </div>
              ))}
            </div>

            {/* Combined Vascular and Common Reasons area inside deep contrast section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-7 bg-teal-dark/40 border border-cream/10 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream mb-4">Vascular Doppler Scans</h3>
                  <p className="text-xs sm:text-sm text-cream/85 font-body leading-relaxed mb-6">
                    We utilize non-invasive, precise vascular ultrasound to screen arterial health, vein structures, and flow patterns. Fast, completely painless assessments done dynamically inside the clinic.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-cream/90 font-body">
                    <li className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5DBC5] mt-1.5 shrink-0" />
                      <span><strong>Carotid Doppler (TSA):</strong> Evaluates arterial pathways to assess systemic stroke and cholesterol risks.</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5DBC5] mt-1.5 shrink-0" />
                      <span><strong>Venous Mapping:</strong> Diagnostic testing for localized swelling, cramps, or varicose vein syndromes.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-cream/10">
                  <span className="text-[11px] uppercase tracking-wider text-cream/70 font-mono">Integrated scheduling</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-cream p-8 sm:p-10 rounded-3xl text-ink shadow-lg flex flex-col justify-between">
                <div>
                  <h4 className="font-sans text-[10px] font-extrabold text-teal tracking-widest uppercase mb-4">When to schedule cardiac screens:</h4>
                  <ul className="flex flex-col gap-3 font-body text-xs text-graphite">
                    {[
                      "Recurrent or localized chest tight-ness evaluation",
                      "Irregular heartbeat patterns or racing pulse sensations",
                      "Pre-operative clearance requirements",
                      "Sports eligibility check-ups & activity baseline reviews",
                      "Screening associated with family history records",
                      "Confirmation of initial blood pressure variations"
                    ].map((reason, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Activity size={14} className="text-teal shrink-0 mt-0.5" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-sand/40">
                  <Button variant="primary" href={CLINIC_INFO.whatsappLink} isExternal className="w-full text-center text-xs py-3.5 bg-teal text-cream hover:bg-teal-dark">
                    Contact Cardiac Care
                  </Button>
                </div>
              </div>

            </div>

          </Container>
        </Section>

        {/* Section 3: Split Section General Imaging with Left Image */}
        <Section showDivider={true} className="bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side Image */}
            <div className="lg:col-span-6 w-full flex justify-center order-last lg:order-first">
              <div className="relative aspect-[4/5] max-w-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-cream bg-sand/30">
                <img 
                  src="https://familyclinic.health/images/diagn_3.jpeg" 
                  alt="High resolution ultrasound imaging clinical setup" 
                  width={1000}
                  height={1250}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right side Ultrasounds listing */}
            <div className="lg:col-span-6">
              <Eyebrow>DIAGNOSTICS · CLINICAL IMAGING</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal mt-3 mb-6 leading-[1.15] [text-wrap:balance]">
                Precisely targeted<br className="sm:block hidden" />
                <span className="font-semibold text-teal">clinical ultrasound imaging.</span>
              </h2>
              <p className="text-base text-graphite mb-8 leading-relaxed font-body">
                We perform highly accurate diagnostic ultrasound screenings in absolute privacy. Under the care of expert clinicians, standard imaging avoids complex clinical logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Abdominal Ultrasound", text: "Screens internal liver pathways, kidneys, gallbladder, pancreas, and spleen structures." },
                  { num: "02", title: "Pelvic & Gynecological", text: "Bespoke pelvic and transvaginal assessments in full privacy." },
                  { num: "03", title: "Thyroid & Neck Ultrasound", text: "Specialized evaluations of structural nodules, handled with endocrine coordinate paths." },
                  { num: "04", title: "Musculoskeletal & Soft Tissue", text: "Assess joint structures, muscle injuries, cysts, or localized swelling events." }
                ].map((item, index) => (
                  <div key={index} className="p-5 border border-sand bg-sand/15 rounded-2xl flex flex-col justify-between hover:border-teal/30 transition-all duration-300">
                    <div>
                      <span className="font-mono text-xs font-bold text-teal block mb-1">{item.num}</span>
                      <h4 className="font-display font-bold text-ink text-sm mb-1.5">{item.title}</h4>
                      <p className="text-[11px] text-graphite/90 leading-relaxed font-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* Section 4: Laboratory Analysis on Warm Sand Background */}
        <Section showDivider={false} className="bg-gradient-to-br from-[#E7DFD4] via-[#FDFBF9] to-[#DED4C3] border-y border-sand/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side info block */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Eyebrow>DIAGNOSTICS · SAMPLE LABS</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal mt-3 mb-6 leading-[1.15] [text-wrap:balance]">
                Streamlined laboratory<br className="sm:block hidden" />
                <span className="font-semibold text-teal">testing.</span>
              </h2>
              <p className="text-sm sm:text-base text-graphite leading-relaxed mb-6 font-body">
                Simple, accurate scheduling for essential health blood panels and diagnostic cultures. We coordinate sample collection and laboratory transport via certified analysis networks to ensure quick result processing.
              </p>
              
              <div className="p-6 bg-cream border border-sand rounded-2xl shadow-xxs">
                <div className="flex items-center gap-2.5 mb-3 text-teal">
                  <ShieldCheck size={18} />
                  <h4 className="font-display font-bold text-xs sm:text-sm">Structured Claim Formats</h4>
                </div>
                <p className="text-xs text-graphite font-body leading-relaxed">
                  We generate standard ICD-10 and CPT-coded, dual-language reports. Perfect for quick tracking, secure file sharing, or medical reimbursement claims submission.
                </p>
              </div>

              <div className="mt-8">
                <Button variant="secondary" href={CLINIC_INFO.whatsappLink} isExternal className="text-xs">
                  Request Blood Panel <Calendar size={12} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Right side tiles grid */}
            <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Essential Hematology Panels", text: "Complete blood counts, metabolic panels, lipid structures, cardiovascular risk controls, vitamin checks, and hormonal baselines." },
                { title: "Clinical Urinalysis", text: "On-site fluid reviews for immediate kidney health screenings and quick bacterial infection identification." },
                { title: "Rapid Strep Testing", text: "Instant collection swab assays for acute bacterial throat infections, returning answers within minutes." },
                { title: "Respiratory Screenings", text: "Accurate viral analysis for influenza or COVID-19 to plan immediate treatments." },
                { title: "Privacy Swabs & Pap Tests", text: "Confidential cytological check-ups coordinated neatly within our gynecological consultations." },
                { title: "Diagnostic Genetics", text: "Targeted genetic markers panels scheduled upon specific specialists' diagnostic requests." }
              ].map((item, id) => (
                <div key={id} className="p-6 bg-cream border border-sand/50 rounded-3xl hover:border-teal/20 transition-all duration-300 shadow-xxs flex flex-col gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-cream transition-all duration-300 shrink-0">
                    <Beaker size={14} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-graphite leading-relaxed font-body">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>

        {/* Section 5: Preventive Care & Nursing Support */}
        <Section showDivider={true} className="bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <Eyebrow>DIAGNOSTICS · CLINICAL SUPPORT</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal mt-3 mb-6 leading-[1.15] [text-wrap:balance]">
                Preventative immunizations<br className="sm:block hidden" />
                <span className="font-semibold text-teal">and outpatient care.</span>
              </h2>
              <p className="text-base text-graphite font-body leading-relaxed mb-6">
                Our clinic space houses essential nursing operations, medical clearances, and support procedures that simplify wellness. Avoid crowded structures for quick, quiet minor interventions.
              </p>
              <Button variant="secondary" href={CLINIC_INFO.whatsappLink} isExternal className="text-xs">
                Request Nursing Appointment <Calendar size={12} className="ml-1" />
              </Button>
            </div>

            <div className="lg:col-span-7 lg:pl-12 w-full flex flex-col -space-y-6 sm:-space-y-8 py-4 overflow-visible">
              {[
                { title: "Immunization Programs", desc: "Adult and pediatric vaccinations aligned carefully with standard immunization schedules. Options exist to align with travel and overseas requirements." },
                { title: "Ear Lavage Cleaning", desc: "Professional, delicate wax extraction utilizing standardized clinical rinses under medical overview." },
                { title: "Post-Surgical Management", desc: "Wound dressings care, sterile suturing removals, and clean inspection of healing paths for procedures done abroad." },
                { title: "Medication Injection Support", desc: "Professional administration of specific healthcare injections, intramuscular nutrients, or hormone therapies prescribed by doctors." },
                { title: "Sport & Career Clearances", desc: "Activity check-ups, physical fitness verification sheets, and school sports certificates formatted simply." }
              ].map((item, id) => (
                <div 
                  key={id} 
                  className="group relative p-6 bg-[#EBE4D8] border border-sand/80 rounded-2xl flex gap-4 items-start hover:z-20 hover:-translate-y-4 hover:scale-[1.03] hover:bg-[#FDFBF9] hover:border-teal/40 hover:shadow-xl transition-all duration-300 shadow-sm cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                    <ClipboardList size={14} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-base mb-1.5 group-hover:text-teal transition-colors">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-graphite/90 leading-relaxed font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>

        {/* Custom styled static strip */}
        <div className="bg-teal text-cream py-10 border-t border-b border-teal-dark text-center relative">
          <Container className="max-w-3xl px-4">
            <span className="font-mono text-[9px] font-bold text-[#E5DBC5] tracking-[0.2em] block mb-2 uppercase">
              Global Medical Coding
            </span>
            <p className="font-display text-base md:text-lg text-cream/90 font-medium leading-relaxed [text-wrap:balance]">
              Our diagnostic reports utilize standardized, dual-language medical text matching international medical standards for immediate clinical recognition.
            </p>
          </Container>
        </div>

        {/* Section 6: Standard FAQ matching Specialist/Primary layout */}
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

        {/* Section 7: Related Clinical Resources */}
        <Section showDivider={true} className="bg-cream">
          <div className="max-w-3xl mb-12">
            <Eyebrow>RELATED SERVICES</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-ink mt-2 leading-tight [text-wrap:balance]">
              Comprehensive Care Directories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-sand/15 border border-sand lg:border-sand/40 rounded-3xl flex flex-col justify-between hover:border-teal/20 transition-all">
              <div>
                <h3 className="font-display font-bold text-base text-ink mb-3">Primary Care</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6 font-body">
                  General check-ups, regular physical examinations, chronic management, and prescription guidance.
                </p>
              </div>
              <Button variant="text" href="/primary-care" className="text-xs font-semibold text-teal hover:text-ink">
                Explore Main Care &rarr;
              </Button>
            </div>

            <div className="p-8 bg-sand/15 border border-sand lg:border-sand/40 rounded-3xl flex flex-col justify-between hover:border-teal/20 transition-all">
              <div>
                <h3 className="font-display font-bold text-base text-ink mb-3">Specialist Care</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6 font-body">
                  Cardiology, Orthopedics, Gynecology, Pediatrics, and 8 other specialized medical branches.
                </p>
              </div>
              <Button variant="text" href="/specialist-care" className="text-xs font-semibold text-teal hover:text-ink">
                Explore Specialists &rarr;
              </Button>
            </div>

            <div className="p-8 bg-sand/15 border border-sand lg:border-sand/40 rounded-3xl flex flex-col justify-between hover:border-teal/20 transition-all">
              <div>
                <h3 className="font-display font-bold text-base text-ink mb-3">Medical Liaison</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6 font-body">
                  Care translation support, secure procedural liaison, and medical administrative coordination.
                </p>
              </div>
              <Button variant="text" href="/medical-liaison" className="text-xs font-semibold text-teal hover:text-ink">
                Explore Liaison Service &rarr;
              </Button>
            </div>
          </div>
        </Section>

        {/* Reassuring Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-sand/60 block mb-4">
              Instant Assistance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6 break-normal [text-wrap:balance]">
              Have a dynamic testing request?<br className="sm:block hidden" />
              <span className="font-semibold text-teal">Let us solve it.</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              Message us anytime. Our coordination personnel quickly confirm service openings or guide you immediately.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto font-semibold bg-teal text-cream hover:bg-teal-dark border border-teal/10"
              >
                Launch Live Chat <MessageSquare size={16} />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-cream !border-cream/20 hover:!bg-cream/10"
                href={`tel:${CLINIC_INFO.phone}`}
              >
                Call Clinic Main Desk
              </Button>
            </div>
          </div>
        </Section>

      </main>
    </>
  );
}
