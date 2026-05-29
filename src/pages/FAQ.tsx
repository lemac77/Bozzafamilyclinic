import { useState, useEffect } from "react";
import { Plus, Minus, ArrowRight, MessageSquare, Mail, Search, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { HeroBackground } from "../components/ui/HeroBackground";
import { FAQ_DATA, CLINIC_INFO } from "../lib/constants";
import { buildFaqPageSchema } from "../seo/schemas/faqPage";
import { buildBreadcrumbSchema } from "../seo/schemas/localBusiness";

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqSchema = buildFaqPageSchema(FAQ_DATA);
  const breadcrumb = buildBreadcrumbSchema("FAQ", "/faq");

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

  // Highlight scroll changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const cat of FAQ_DATA) {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      <Seo
        title="Frequently Asked Questions · Family Clinic Vicenza Italy"
        description="Find answers to common questions about Family Clinic in Vicenza: English-speaking staff, US insurance, appointments, diagnostic testing, and medical reports."
        schema={[faqSchema, breadcrumb]}
      />

      <main className="bg-cream pt-0 overflow-x-clip [word-break:normal]">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30 font-sans">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://familyclinic.health/images/faq.jpeg" 
              alt="FAQ answers support desk details Family Clinic" 
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
                  Frequently Asked Questions · FAQ
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight [text-wrap:balance]"
              >
                The answers you need. <br />
                <span className="font-semibold text-teal relative inline-block">
                  In plain English.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-8 block"
              >
                Our comprehensive FAQ pool covers booking, registration, US military insurance billing, medical records translation, and specialist care parameters in Vicenza.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20"
              >
                <Button variant="primary" href={CLINIC_INFO.whatsappLink} isExternal className="bg-teal text-cream hover:bg-teal-dark">
                  Ask us on WhatsApp <ArrowRight size={16} />
                </Button>
                <Button variant="outline" href={`tel:${CLINIC_INFO.phone}`} className="bg-cream/10 border-cream/20 hover:bg-cream hover:text-ink text-cream transition-colors backdrop-blur-sm">
                  Call the clinic
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Category Jump Navigation */}
        <div className="bg-[#EBE4D8]/95 border-b border-sand/50 sticky top-[72px] lg:top-[80px] z-30 backdrop-blur-md hidden sm:block">
          <Container className="py-3">
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth items-center justify-center">
              <span className="font-mono text-[9px] font-bold text-teal tracking-widest uppercase shrink-0 mr-4">Jump to Category:</span>
              {FAQ_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSidebarClick(cat.id)}
                  className="whitespace-nowrap transition-all duration-300 py-1.5 px-3.5 rounded-full text-[11px] font-display font-medium border border-sand/70 hover:border-teal hover:text-white hover:bg-teal bg-cream cursor-pointer text-graphite/85"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </Container>
        </div>

        {/* Categories mapped to Sections */}
        <div className="flex flex-col">
          {FAQ_DATA.map((category, catIndex) => {
            return (
              <div key={category.id}>
                <Section 
                  id={`cat-${category.id}`}
                  showDivider={catIndex < FAQ_DATA.length - 1} 
                  className="bg-cream scroll-mt-28"
                >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Left Column Sticky info block */}
                  <div className="lg:col-span-5 lg:sticky lg:top-36">
                    <span className="px-3.5 py-1.5 bg-teal/5 border border-teal/15 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal inline-block mb-4">
                      HELP DOMAIN // {category.id.toUpperCase().replace("-", " ")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-ink tracking-tight break-normal leading-[1.12]">
                      {category.name.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="text-teal font-semibold">
                        {category.name.split(" ").slice(-1)[0]}.
                      </span>
                    </h2>
                    <p className="text-sm text-graphite font-body leading-relaxed mt-4 mb-8">
                      Get clear, direct answers regarding {category.name.toLowerCase()} at our Vicenza team.
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

                  {/* Right Column Accordions list */}
                  <div className="lg:col-span-7 w-full flex flex-col gap-4">
                    {category.questions.map((item, idx) => {
                      const idCode = `${category.id}-${idx}`;
                      const isOpen = openItem === idCode;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="border border-sand/60 bg-cream rounded-2xl overflow-hidden transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(idCode)}
                            className="w-full text-left py-5 px-6 font-display font-semibold text-ink flex items-center justify-between gap-4 focus:bg-sand/10 transition-colors cursor-pointer"
                          >
                            <span className="text-sm sm:text-base font-medium leading-snug">{item.question}</span>
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
                                  {item.answer}
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
              </div>
            );
          })}
        </div>

        {/* Reassuring FAQ Page Footer CTA */}
        <Section showDivider={false} className="py-24 bg-ink text-cream relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-4">
              // STILL CAN'T FIND WHAT YOU NEED?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Ask your question directly.
            </h2>
            <p className="text-sm md:text-base text-sand/85 mb-10 max-w-xl mx-auto font-body leading-relaxed">
              Our team usually replies in less than an hour during operational hours. Send a WhatsApp text with what you are navigating.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={CLINIC_INFO.whatsappLink}
                isExternal
                className="w-full sm:w-auto font-semibold"
              >
                WhatsApp the clinic <MessageSquare size={16} />
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
