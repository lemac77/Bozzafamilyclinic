import { useState, useEffect, useRef } from "react";
import { Plus, Minus, ArrowRight, CheckCircle, Calendar, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { ServiceModule } from "../components/sections/ServiceModule";
import { HeroBackground } from "../components/ui/HeroBackground";
import { SPECIALTIES_DATA, CLINIC_INFO } from "../lib/constants";
import { buildMedicalSpecialtySchema } from "../seo/schemas/medicalSpecialty";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";

export function SpecialistCare() {
  const [activeAnchor, setActiveAnchor] = useState("cardiology");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const specialtiesSchema = buildMedicalSpecialtySchema(SPECIALTIES_DATA);
  const breadcrumb = buildBreadcrumbSchema("Specialist Care", "/specialist-care");

  // Track scrolling active items on sidebar
  useEffect(() => {
    const handleScroll = () => {
      for (const spec of SPECIALTIES_DATA) {
        const el = document.getElementById(spec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom > 250) {
            setActiveAnchor(spec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scroll to initial hash if it matches any specialty
    const initialHash = window.location.hash;
    if (initialHash) {
      const targetId = initialHash.replace("#", "");
      if (SPECIALTIES_DATA.some(spec => spec.id === targetId)) {
        setTimeout(() => {
          handleSidebarClick(targetId);
        }, 300);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClick = (id: string) => {
    setActiveAnchor(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  const faqs = [
    {
      q: "Can I see a specialist without a referral from a GP?",
      a: "Yes. Family Clinic operates as a private practice, so no referral is required to book a specialist directly. However, if your US insurance requires a referral for reimbursement, we can issue one from our primary care service.",
    },
    {
      q: "How do I choose the right specialist for my issue?",
      a: "If you're unsure, send us a message on WhatsApp describing what you're feeling. Our team will tell you which specialist fits, or whether to start with a primary care visit.",
    },
    {
      q: "Are specialist visits covered by my US insurance?",
      a: "Most major US insurance plans cover specialist visits at Family Clinic. Send us your insurance card before booking and we'll verify your specific plan's coverage and tell you what to expect.",
    },
    {
      q: "How quickly can I get a specialist appointment?",
      a: "It depends on the specialty and the specialist's schedule. For most specialties, same-week or next-week appointments are typical. WhatsApp is the fastest way to check availability.",
    },
    {
      q: "Are the specialists native English speakers or fluent?",
      a: "All our specialists conduct visits in English. Some are native speakers, others are bilingual professionals who have practiced internationally. Either way, the clinical conversation happens entirely in English, including written reports.",
    },
  ];

  return (
    <>
      <Seo
        title="English Speaking Specialists in Vicenza · 12 Specialties at Family Clinic"
        description="12 medical specialties in English at Family Clinic Vicenza: cardiology, orthopedics, gynecology, physiotherapy, psychology, nutrition, podiatry, acupuncture, pediatrics, endocrinology, pelvic floor, ozone therapy."
        schema={[specialtiesSchema, breadcrumb]}
      />

      <main className="bg-cream pt-0 font-sans">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1800" 
              alt="Specialist Care in Vicenza" 
              className="w-full h-full object-cover select-none"
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
                  Specialist Care · Specialty Consultations
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                Specialist care, <br />
                <span className="font-semibold text-teal relative inline-block">
                  all in one place.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 sm:mb-10 block"
              >
                Twelve medical specialties under one roof in Vicenza. Coordinated behind the scenes, reported clearly, and fully eligible for US insurance or private claim reimbursement.
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
        <Section showDivider={false} className="!py-10 bg-gradient-to-b from-cream to-sand/10 border-b border-sand/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-graphite font-body leading-relaxed">
              Family Clinic offers twelve medical specialties in English at its Vicenza location: cardiology, orthopedics, gynecology, physiotherapy, psychology and psychiatry, nutrition, podiatry, acupuncture, pediatrics, endocrinology, pelvic floor rehabilitation, occupational therapy, and ozone therapy. All visits are conducted in English by qualified specialists, with written reports in English, and most major US insurance plans are accepted through our Medical Liaison program.
            </p>
          </div>
        </Section>

        {/* Why Specialists Advantage Section */}
        <Section showDivider={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>THE FAMILY CLINIC ADVANTAGE</Eyebrow>
              <h2 className="text-h2 text-ink mt-2 leading-tight">
                Specialists who actually communicate with each other.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-12 w-full">
              <p className="text-base text-graphite font-body">
                The biggest problem with specialist medicine in Italy is fragmentation. You see one specialist, who tells you to see another, who never reads what the first one wrote. Family Clinic solves this by keeping the specialists under one structure: your gynecologist talks to your endocrinologist, your orthopedist coordinates with your physiotherapist, and your primary care doctor knows what every specialist has done. One medical history, one English-speaking team, one coordinated plan.
              </p>
              <ul className="flex flex-col gap-3.5 text-sm text-graphite mt-4">
                {[
                  "All specialists English-fluent or native English",
                  "Coordinated medical records, no information lost between visits",
                  "Most US insurance plans accepted",
                  "Written reports in English with ICD-10 coding",
                  "Same-week or next-week appointments where possible"
                ].map((item, id) => (
                  <li key={id} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 12 Specialties split catalog view with sticky anchor sidebar list */}
        <div id="specialties-catalogue" className="border-t border-sand/30 bg-cream/70 py-16">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
            
            {/* STICKY SIDEBAR ON DESKTOP LEFT (3 spans) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 max-h-[calc(100vh-160px)] flex flex-col z-20">
              <div className="bg-teal border border-teal-dark/30 p-5 rounded-[2.25rem] shadow-md flex flex-col gap-4 overflow-hidden h-full max-h-full">
                <div className="shrink-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cream/75 font-extrabold block mb-1.5">Clinic Specialties</span>
                  <div className="h-[2px] w-8 bg-cream/30 rounded-full" />
                </div>
                
                {/* Scrollable list container with simple touch scrollbar */}
                <ul className="flex flex-col gap-1 font-sans text-xs text-cream/80 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(249,246,241,0.2)_transparent]">
                  {SPECIALTIES_DATA.map((spec) => {
                    const isActive = activeAnchor === spec.id;
                    return (
                      <li key={spec.id} className="w-full">
                        <button
                          onClick={() => handleSidebarClick(spec.id)}
                          className={`text-left transition-all duration-300 py-2 px-3.5 rounded-xl w-full custom-cursor-active flex items-center justify-between text-[11px] font-bold uppercase tracking-wider ${
                            isActive
                              ? "bg-cream text-teal font-extrabold shadow-sm"
                              : "hover:bg-cream/10 text-cream/80 hover:text-cream"
                          }`}
                        >
                          <span className="truncate mr-2">{spec.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 ${isActive ? "bg-teal scale-125" : "bg-cream/25 group-hover:bg-cream"}`} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* MAIN CATALOG PANEL RENDER (9 spans) */}
            <div className="col-span-12 lg:col-span-9 lg:pl-8">
              {SPECIALTIES_DATA.map((specialty, index) => (
                <ServiceModule
                  key={specialty.id}
                  specialty={specialty}
                  index={index}
                />
              ))}
            </div>

          </Container>
        </div>

        {/* Specialist Insurance Bridge Banner */}
        <div className="bg-sand/35 py-12 border-t border-b border-sand/40 text-center relative">
          <Container className="max-w-3xl">
            <span className="font-sans text-xs font-semibold text-teal tracking-[0.2em] block mb-2">
              US INSURANCE
            </span>
            <p className="font-display text-lg md:text-xl text-ink font-semibold leading-relaxed mb-6">
              Specialist visits are covered by most major US insurance plans through our Medical Liaison program.
            </p>
            <Button variant="outline" href="/insurance" className="text-xs py-3 px-6 hover:bg-neutral-50 border-sand">
              See accepted insurance <ArrowRight size={12} className="ml-1" />
            </Button>
          </Container>
        </div>

        {/* Structurally Advanced FAQ Section Matching PrimaryCare */}
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
                Clear answers regarding appointment processes, direct insurance billing, and medical records eligibility of our twelve English-speaking specialties in Vicenza.
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
              Other directories you might need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream border border-sand/40 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-display font-medium text-lg text-ink mb-3">Primary Care</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6">
                  Family doctor consultations, acute/general checks, US prescription converters, and sick notes.
                </p>
              </div>
              <Button variant="text" href="/primary-care" className="text-xs font-semibold hover:text-teal">
                Explore primary care &rarr;
              </Button>
            </div>

            <div className="p-8 bg-cream border border-sand/40 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-display font-medium text-lg text-ink mb-3">Diagnostics</h3>
                <p className="text-xs text-graphite leading-relaxed mb-6">
                  On-site ECG, cardiac ultrasound, general scans, vascular assessments, and CDC immunizations.
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
                  Concierge coordination, billing pre-approvals, hospital procedure translating, and local escorts.
                </p>
              </div>
              <Button variant="text" href="/medical-liaison" className="text-xs font-semibold hover:text-teal">
                Explore liaison &rarr;
              </Button>
            </div>
          </div>
        </Section>

        {/* Reassuring Specialist Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-sage block mb-4">
              CHOOSE THE RIGHT CARE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Not sure which specialist you need? Just ask.
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              WhatsApp us with a quick description and we'll point you to the right one.
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
                className="w-full sm:w-auto text-cream !border-cream/20 hover:!bg-cream/10"
                href={`tel:${CLINIC_INFO.phone}`}
              >
                Call the clinic <Phone size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </Section>

      </main>
    </>
  );
}
