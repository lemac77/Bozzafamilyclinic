import { useState, ChangeEvent, FormEvent } from "react";
import { MessageSquare, Phone, Mail, Clock, MapPin, Navigation, Compass, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { RevealText } from "../components/ui/RevealText";
import { Seo } from "../seo/Seo";
import { Section } from "../components/ui/Section";
import { HeroBackground } from "../components/ui/HeroBackground";
import { buildBreadcrumbSchema, localBusinessSchema } from "../seo/schemas/localBusiness";
import { CLINIC_INFO, SPECIALTIES_DATA } from "../lib/constants";

export function Contact() {
  const breadcrumb = buildBreadcrumbSchema("Contact", "/contact");

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

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredLiaison: "whatsapp",
    specialty: "primary-care",
    desiredDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <Seo
        title="Contact Family Clinic Health Care · Vicenza Italy"
        description="Contact Family Clinic in Vicenza: phone, email, WhatsApp, address, opening hours, directions. Directly serving Caserma Ederle/Camp Del Din and expats."
        schema={[localBusinessSchema, breadcrumb]}
      />

      <main className="bg-cream pt-0">
        
        {/* Majestic Full-Image Page Hero */}
        <section className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[640px] flex items-center text-cream overflow-hidden border-b border-sand/30 font-sans">
          {/* Entire Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://familyclinic.health/images/contact.jpeg" 
              alt="Contact us modern medical desk check and clinic reception Family Clinic" 
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
                  Contact Us · Contatti e Prenotazioni
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="text-cream mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight"
              >
                We are here to help. <br />
                <span className="font-semibold text-teal relative inline-block">
                  Get in touch.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-teal/40" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-cream/90 font-body leading-relaxed max-w-xl mb-4 block"
              >
                No complex phone trees, no automated voice bots. Just a human coordinator team waiting to listen, answer questions, or schedule your appointments.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Contact info grid & Interactive form */}
        <Section showDivider={false} className="!py-10 bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Direct Contact Handles (5 spans) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <Eyebrow>GET IN TOUCH DIRECTLY</Eyebrow>
                <h2 className="text-2xl font-display font-medium text-ink mt-2">
                  Our official communication channels
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* WHATSAPP */}
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-6 bg-sand/15 stroke-teal border border-sand hover:border-teal/30 hover:bg-sand/30 rounded-2xl transition-all custom-cursor-active"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm">WhatsApp Chat (Fastest Method)</h4>
                    <span className="font-sans text-[10px] font-bold uppercase text-teal block mt-0.5 tracking-wider">Fast response &lt; 15 mins</span>
                    <p className="text-xs text-graphite font-body mt-2 leading-relaxed">
                      Send us screenshots of prescriptions, insurance cards, or ask rapid logistical questions.
                    </p>
                  </div>
                </a>

                {/* TELEPHONE */}
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-start gap-4 p-6 bg-sand/15 border border-sand hover:border-teal/30 hover:bg-sand/30 rounded-2xl transition-all custom-cursor-active"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm">Direct Phone Link</h4>
                    <span className="font-sans text-[10px] font-bold uppercase text-teal block mt-0.5 tracking-wider">Instant native support</span>
                    <p className="text-xs text-graphite font-body mt-2 leading-relaxed">
                      {CLINIC_INFO.phoneDisplay} · Instant connection to an English-speaking receptionist.
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-start gap-4 p-6 bg-sand/15 border border-sand hover:border-teal/30 hover:bg-sand/30 rounded-2xl transition-all custom-cursor-active"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm">Official Email Address</h4>
                    <span className="font-sans text-[10px] font-bold uppercase text-teal block mt-0.5 tracking-wider">For forms and medical records</span>
                    <p className="text-xs text-graphite font-body mt-2 leading-relaxed">
                      {CLINIC_INFO.email} · Send files and referral slips securely.
                    </p>
                  </div>
                </a>

                {/* WORKING HOURS */}
                <div className="flex items-style gap-4 p-6 bg-sand/10 border border-sand rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <Clock size={14} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm">Operational Availability</h4>
                    <p className="text-xs text-graphite font-body mt-1 leading-relaxed">
                      {CLINIC_INFO.hoursWeekday} · Monday through Friday
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Form Scheduler (7 spans) */}
            <div className="lg:col-span-7 lg:pl-12 w-full">
              <div className="bg-cream border border-sand/70 p-8 rounded-2xl shadow-sm">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="appointment-form"
                      onSubmit={handleFormSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="border-b border-sand/30 pb-4 mb-2">
                        <span className="font-mono text-[9px] text-teal uppercase tracking-widest block mb-1">
                          // QUICK ACTION FORM
                        </span>
                        <h3 className="text-lg font-display font-semibold text-ink flex items-center gap-2">
                          <Calendar size={18} className="text-teal" />
                          Send an Appointment Inquiry
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@email.com"
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Phone (or WhatsApp Number)</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 012-3456"
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Liaison Method Preference</label>
                          <select
                            name="preferredLiaison"
                            value={formData.preferredLiaison}
                            onChange={handleInputChange}
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          >
                            <option value="whatsapp">Contact me on WhatsApp</option>
                            <option value="email">Contact me over email</option>
                            <option value="phone">Direct telephone call</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Service Directory</label>
                          <select
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleInputChange}
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          >
                            <option value="primary-care">Primary Care / General GP</option>
                            {SPECIALTIES_DATA.map(spec => (
                              <option key={spec.id} value={spec.id}>Specialist: {spec.name}</option>
                            ))}
                            <option value="diagnostics">On-site Diagnostics Test</option>
                            <option value="liaison">Medical Liaison inquiry</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-ink uppercase font-semibold">Desired Appointment Date</label>
                          <input
                            type="date"
                            name="desiredDate"
                            required
                            value={formData.desiredDate}
                            onChange={handleInputChange}
                            className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[10px] text-ink uppercase font-semibold">Describe briefly what you need</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please note symptoms, drug refill names, or insurance card info..."
                          className="bg-sand/10 border border-sand p-3 text-xs text-ink rounded-lg focus:outline-hidden focus:border-teal resize-none"
                        />
                      </div>

                      <div className="mt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full text-center py-4 bg-teal hover:bg-teal-dark font-semibold text-cream cursor-pointer"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Locking reservation details..." : "Submit Appointment Inquiry"}
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-ink mb-3">Inquiry Received Successfully</h3>
                      <p className="text-sm text-graphite max-w-sm mb-8 leading-relaxed font-body">
                        Thank you, {formData.name}. Your appointment request has been securely compiled. 
                        A clinic Liaison will contact you on <strong className="text-teal font-semibold font-mono text-xs">{formData.phone} / {formData.preferredLiaison.toUpperCase()}</strong> within 1 hour to lock your visit date.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Send another request <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </Section>

        {/* Transit instructions from Military Bases */}
        <Section showDivider={true} className="bg-sand/10">
          <div className="max-w-3xl mb-16">
            <Eyebrow>HOW TO REACH US</Eyebrow>
            <h2 className="text-h2 text-ink mt-2 leading-tight">
              Transit from US Military bases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* From Caserma Ederle */}
            <div className="p-8 bg-cream border border-sand rounded-xl relative">
              <span className="font-sans text-xs font-semibold text-teal tracking-wider block mb-4 uppercase">From Caserma Ederle</span>
              <div className="flex items-center gap-3 mb-6">
                <Navigation size={20} className="text-gold shrink-0 animate-pulse" />
                <div>
                  <h3 className="text-xl font-display font-medium text-ink">Distance & Travel</h3>
                  <p className="text-xs text-graphite font-body">6 km distance · Approx. 12 minutes drive</p>
                </div>
              </div>
              <p className="text-xs text-graphite leading-relaxed mb-6">
                Head northwest on Viale della Pace toward downtown. Cross the river, turn right on Viale Margherita, and continue onto Viale Quadri. Turn right onto Via F.lli Rosselli. 
              </p>
              <div className="p-4 bg-sand/20 border border-sand/30 rounded-lg text-[11px] text-graphite font-body leading-relaxed">
                <strong className="text-ink font-semibold">Public transit bus:</strong> Take Bus Line 1 or 5 direction Station &rarr; change at Station &rarr; Bus Line 2 direction Rosolini. Exit at Rosselli stop right in front of the clinic.
              </div>
            </div>

            {/* From Camp Del Din */}
            <div className="p-8 bg-cream border border-sand rounded-xl relative">
              <span className="font-sans text-xs font-semibold text-teal tracking-wider block mb-4 uppercase">From Camp Del Din</span>
              <div className="flex items-center gap-3 mb-6">
                <Compass size={20} className="text-gold shrink-0 animate-pulse" />
                <div>
                  <h3 className="text-xl font-display font-medium text-ink">Distance & Travel</h3>
                  <p className="text-xs text-graphite font-body">4 km distance · Approx. 8 minutes drive</p>
                </div>
              </div>
              <p className="text-xs text-graphite leading-relaxed mb-6">
                Exit south toward the bypass road (Tangenziale). Take the exit toward downtown/Hospital. Stay on Viale Dal Verme, then make a sharp left onto Via F.lli Rosselli.
              </p>
              <div className="p-4 bg-sand/20 border border-sand/30 rounded-lg text-[11px] text-graphite font-body leading-relaxed">
                <strong className="text-ink font-semibold">Public transit bus:</strong> Take Bus Line 2 direct to Rosselli clinic stop. Direct, no line changes required, 10 min transit total.
              </div>
            </div>

          </div>

          {/* Map Embed Frame */}
          <div className="w-full h-[450px] border border-sand/50 shadow-md overflow-hidden rounded-2xl relative">
            <iframe
              src="https://maps.google.com/maps?q=Via%20Fratelli%20Rosselli%2058,%2036100%20Vicenza%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Family Clinic Location"
            />
          </div>
        </Section>

      </main>
    </>
  );
}
