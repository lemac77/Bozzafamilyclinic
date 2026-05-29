import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Plus, Minus, ArrowRight, Check, MessageSquare, Mail, HelpCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { HeroBackground } from "../components/ui/HeroBackground";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";
import { ACCEPTED_INSURANCES, CLINIC_INFO } from "../lib/constants";

export function Insurance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const breadcrumb = buildBreadcrumbSchema("Insurance", "/insurance");

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
      q: "Do I need a referral from a primary care doctor before seeing a specialist?",
      a: "It depends on your specific US plan. Some require a referral, others let you self-refer. Before your visit, send us your insurance card and we'll tell you exactly what's needed.",
    },
    {
      q: "Will I pay out of pocket at the visit?",
      a: "For plans where we can bill directly, no. For plans without direct billing, yes, and you'll be reimbursed by your insurance after submitting the documents we prepare for you. We'll always tell you upfront which case applies.",
    },
    {
      q: "What if my plan isn't on your list?",
      a: "Send us a photo of your insurance card on WhatsApp. We work with many plans not listed here, and we'll verify yours before you book.",
    },
    {
      q: "Can you bill TRICARE directly?",
      a: "TRICARE handling depends on your specific plan (Prime, Select, For Life, Reserve Select, etc.) and your status. We handle TRICARE paperwork and will walk you through your specific case during the initial WhatsApp exchange.",
    },
    {
      q: "Do you provide medical records I can send to my doctor in the US?",
      a: "Yes. All medical reports for American patients are issued in English, with diagnostic codes (ICD-10) and, where applicable, procedure codes (CPT), so your US provider can read them without translation.",
    },
    {
      q: "How long does reimbursement usually take?",
      a: "This depends entirely on your insurance, not on us. We make sure the document pack we hand you is complete, correctly coded, and English-readable — which is the single biggest factor in avoiding delays on the US side.",
    },
  ];

  return (
    <>
      <Seo
        title="US Insurance Accepted · Family Clinic Vicenza Italy"
        description="Family Clinic Vicenza accepts major US insurance plans for American patients in Italy. We handle pre-authorizations, claims, and reimbursement documentation."
        schema={breadcrumb}
      />

      <main className="bg-cream pt-0">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30 font-sans">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://familyclinic.health/images/insurance.jpeg" 
              alt="Insurance support" 
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
                  US Insurance · Supporto Assicurativo
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                Your insurance, <br />
                <span className="font-semibold text-teal relative inline-block">
                  finally understood.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 sm:mb-10 block"
              >
                We work with major US military and private insurance plans. We know the claims paperwork and coordinate direct billing or quick reimbursement.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20"
              >
                <Button variant="primary" href={CLINIC_INFO.whatsappLink} isExternal>
                  Ask about your plan on WhatsApp <ArrowRight size={16} />
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
              Family Clinic Health Care accepts major US insurance plans for American patients living in Italy, including military and civilian dependents stationed at Caserma Ederle and Camp Del Din. Our Medical Liaison team handles pre-authorizations, claim documentation, and direct communication with US insurance providers where supported, so you can use your American coverage in Vicenza without the usual headache.
            </p>
          </div>
        </Section>

        {/* Plans We Work With */}
        <Section showDivider={true}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Eyebrow>ACCEPTED PLANS</Eyebrow>
            <h2 className="text-h2 text-ink mt-2 leading-tight">
              Major US insurance plans, handled here.
            </h2>
            <p className="text-sm text-graphite font-body leading-relaxed mt-4 max-w-2xl mx-auto">
              We work with most major American health insurance providers. Some plans we can bill directly, others require you to pay at the visit and submit for reimbursement, and we prepare the complete document pack for you in both cases.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Grid of accepted logo blocks - aligned horizontally and centered */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
              {ACCEPTED_INSURANCES.map((item) => (
                <div
                  key={item.name}
                  className="p-4 h-24 border border-sand bg-cream hover:border-teal/30 hover:bg-sand/5 transition-all flex items-center justify-center rounded-2xl shadow-xs"
                >
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={140}
                    height={50}
                    className="max-h-12 w-auto object-contain select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <p className="text-xs text-graphite font-sans mt-8 leading-relaxed bg-sand/15 border border-sand/20 rounded-xl p-4 text-center max-w-xl mx-auto">
              Don't see your plan? WhatsApp us with your insurance name and we'll let you know.
            </p>

            {/* Check my insurance button */}
            <div className="mt-8 flex justify-center">
              <Button variant="secondary" href={CLINIC_INFO.whatsappLink} isExternal>
                Check my insurance <MessageSquare size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </Section>

        {/* How It Works (Three Steps) */}
        <Section showDivider={true} className="bg-gradient-to-br from-ink via-teal-dark to-ink border-t border-b border-sand/15 relative overflow-hidden text-cream">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-16">
              <span className="text-gold font-mono text-xs uppercase tracking-[0.15em] font-medium">THE PROCESS</span>
              <h2 className="text-h2 text-cream mt-2 leading-tight">
                Three steps. No surprises.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/[0.03] border border-white/15 rounded-2xl relative shadow-sm hover:translate-y-[-2px] hover:border-white/30 hover:shadow-md hover:bg-white/[0.06] transition-all duration-300">
                <span className="font-mono text-4xl text-gold/80 hover:text-gold transition-colors font-bold block mb-6">01</span>
                <h3 className="text-xl font-display font-medium text-cream mb-4">
                  Before your visit
                </h3>
                <p className="text-sm text-cream/80 leading-relaxed">
                  Send us your insurance card (front and back) on WhatsApp or by email. We verify your coverage, check if pre-authorization is needed, and tell you exactly what to expect at the visit, including any out-of-pocket amount.
                </p>
              </div>

              <div className="p-8 bg-white/[0.03] border border-white/15 rounded-2xl relative shadow-sm hover:translate-y-[-2px] hover:border-white/30 hover:shadow-md hover:bg-white/[0.06] transition-all duration-300">
                <span className="font-mono text-4xl text-gold/80 hover:text-gold transition-colors font-bold block mb-6">02</span>
                <h3 className="text-xl font-display font-medium text-cream mb-4">
                  At the clinic
                </h3>
                <p className="text-sm text-cream/80 leading-relaxed">
                  You come in, you get care. Where direct billing is supported, you don't pay at the desk. Where it isn't, you pay and we hand you a complete document pack ready for reimbursement: itemized invoice in English, medical report, diagnostic codes (ICD-10), procedure codes (CPT) where applicable.
                </p>
              </div>

              <div className="p-8 bg-white/[0.03] border border-white/15 rounded-2xl relative shadow-sm hover:translate-y-[-2px] hover:border-white/30 hover:shadow-md hover:bg-white/[0.06] transition-all duration-300">
                <span className="font-mono text-4xl text-gold/80 hover:text-gold transition-colors font-bold block mb-6">03</span>
                <h3 className="text-xl font-display font-medium text-cream mb-4">
                  After your visit
                </h3>
                <p className="text-sm text-cream/80 leading-relaxed">
                  We stay available. If your insurance asks for additional documentation, we send it. If you have questions on the reimbursement, we help. The relationship doesn't end when you leave the clinic.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* What We Handle */}
        <Section showDivider={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>MEDICAL LIAISON · INSURANCE</Eyebrow>
              <h2 className="text-h2 text-ink mt-2 leading-tight">
                The paperwork is our job, not yours.
              </h2>
              <p className="text-sm text-graphite font-body leading-relaxed mt-4 mb-8">
                For our American patients, the insurance side of healthcare in Italy can feel like a second illness. Our Medical Liaison team exists to remove that weight.
              </p>

              <Button variant="text" href="/medical-liaison" className="flex items-center gap-2 group text-sm font-semibold text-teal custom-cursor-active">
                Discover Medical Liaison Services
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="lg:col-span-7 bg-cream border border-sand/40 p-8 rounded-2xl lg:pl-12 w-full">
              <ul className="flex flex-col gap-4 text-sm font-body text-graphite">
                {[
                  "Pre-authorization requests submitted on your behalf",
                  "Direct communication with US insurance providers",
                  "Complete reimbursement document packs in English",
                  "ICD-10 diagnostic and CPT procedure coding",
                  "Translation of medical records where needed",
                  "Follow-up on pending claims"
                ].map((item, id) => (
                  <li key={id} className="flex items-center gap-3">
                    <Check size={16} className="text-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 6 Accordion MINI-FAQ */}
        <Section showDivider={true} className="bg-[#FBF9F4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Sticky info block */}
            <div className="lg:col-span-5 lg:sticky lg:top-36">
              <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full">
                <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#086F80]">
                  COMMON QUESTION RESOLUTION
                </span>
              </div>
              <h2 className="text-h2 text-ink mt-2 leading-tight font-display text-4xl sm:text-5xl">
                Frequently Asked <br className="hidden md:block" />
                <span className="text-teal font-semibold">Questions.</span>
              </h2>
              <p className="text-sm sm:text-base text-graphite font-body leading-relaxed mt-4 mb-8">
                Straightforward, professional feedback about scheduling, results collection, billing documents, and diagnostic reporting rules.
              </p>
              
              {/* WhatsApp Card beneath */}
              <div className="p-7 bg-[#FAF6F0] border border-sand/40 rounded-3xl flex flex-col gap-5 shadow-xs">
                <div>
                  <h4 className="font-display font-semibold text-[#1A2332] text-sm">Have a unique question?</h4>
                  <p className="text-xs sm:text-sm text-graphite mt-1.5 leading-relaxed">
                    Our dynamic clinic liaisons can confirm registration requirements or scheduling hours directly on WhatsApp.
                  </p>
                </div>
                <Button 
                  variant="primary" 
                  href={CLINIC_INFO.whatsappLink} 
                  isExternal 
                  className="w-fit text-xs !bg-[#F5A623] hover:!bg-[#D88E10] border-none text-[#1A2332] font-semibold flex items-center gap-2 px-6 py-2.5 rounded-full shadow-xs hover:shadow-sm hover:scale-[1.01] transition-all"
                >
                  Ask us on WhatsApp <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Column Accordions list */}
            <div className="lg:col-span-7 w-full flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#e7e1d5] bg-[#FAF8F5] rounded-2xl overflow-hidden hover:shadow-xs transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left py-5 px-6 font-display font-medium text-ink flex items-center justify-between gap-4 custom-cursor-active focus:bg-sand/5"
                    >
                      <span className="text-sm sm:text-base text-ink font-body font-normal leading-snug">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full border border-sand/65 flex items-center justify-center text-teal bg-white/60 shrink-0">
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
                  </div>
                );
              })}
            </div>

          </div>
        </Section>

        {/* Reassuring Insurance Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-sage block mb-4">
              TALK TO US
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Not sure if your insurance works here? Just ask.
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              Send us a photo of your insurance card on WhatsApp. We'll verify your coverage, explain what's covered, and tell you what to expect, before you book a visit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto font-semibold"
              >
                WhatsApp us your insurance <MessageSquare size={16} />
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
