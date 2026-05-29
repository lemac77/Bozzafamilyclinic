import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ScrollProgress } from "../ui/ScrollProgress";
import { CLINIC_INFO } from "../../lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Highlight active link
  const isActive = (path: string) => location.pathname === path;

  // Track scroll position to adjust background/scrolled styles
  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close directories mobile draw when location updates
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b border-sand/30 bg-cream shadow-sm ${
        prevScrollPos > 20 ? "py-3 sm:py-4" : "py-4 sm:py-5"
      }`}
    >
      {/* Scroll indicator overlay */}
      <ScrollProgress />

      <Container className="flex items-center justify-between">
        
        {/* Clinque Vector Signature Grid */}
        <Link to="/" className="flex items-center group custom-cursor-active">
          <img 
            src="https://familyclinic.health/images/logo.svg" 
            alt="Family Clinic Health Care" 
            className="h-10 sm:h-11 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 font-body text-[13px] uppercase tracking-wider text-ink font-semibold">
          
          <Link to="/about" className={`custom-cursor-active py-2 px-4 rounded-full transition-all duration-300 ${isActive("/about") ? "text-cream bg-teal font-bold shadow-xs hover:text-cream" : "text-ink hover:text-teal hover:bg-teal/5"}`}>
            About
          </Link>
 
          {/* Directories dropdown with integrated hover zone */}
          <div 
            className="relative py-3"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 custom-cursor-active font-semibold cursor-pointer py-2 px-4 rounded-full transition-all duration-300 uppercase ${
                isActive("/primary-care") || isActive("/specialist-care") || isActive("/diagnostics") || isActive("/medical-liaison")
                  ? "text-cream bg-teal font-bold shadow-xs hover:text-cream"
                  : "text-ink hover:text-teal hover:bg-teal/5"
              }`}
            >
              DIRECTORIES <ChevronDown size={13} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
 
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-1 w-56 bg-cream text-ink border border-sand/60 rounded-xl overflow-hidden shadow-xl p-2.5 z-50"
                >
                  {[
                    { path: "/primary-care", label: "Primary Care" },
                    { path: "/specialist-care", label: "Specialist Care" },
                    { path: "/diagnostics", label: "On-site Testing" },
                    { path: "/medical-liaison", label: "Medical Liaison" }
                  ].map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`block py-2.5 px-4 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all custom-cursor-active ${
                        isActive(sub.path) ? "bg-teal text-cream font-extrabold shadow-xs hover:text-cream" : "hover:bg-sand/30"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
 
          <Link to="/insurance" className={`custom-cursor-active py-2 px-4 rounded-full transition-all duration-300 ${isActive("/insurance") ? "text-cream bg-teal font-bold shadow-xs hover:text-cream" : "text-ink hover:text-teal hover:bg-teal/5"}`}>
            Insurance
          </Link>
          <Link to="/faq" className={`custom-cursor-active py-2 px-4 rounded-full transition-all duration-300 ${isActive("/faq") ? "text-cream bg-teal font-bold shadow-xs hover:text-cream" : "text-ink hover:text-teal hover:bg-teal/5"}`}>
            FAQ
          </Link>
          <Link to="/contact" className={`custom-cursor-active py-2 px-4 rounded-full transition-all duration-300 ${isActive("/contact") ? "text-cream bg-teal font-bold shadow-xs hover:text-cream" : "text-ink hover:text-teal hover:bg-teal/5"}`}>
            Contacts
          </Link>
        </nav>

        {/* Header CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="primary" 
            href={CLINIC_INFO.whatsappLink} 
            isExternal={true}
            className="text-xs py-2.5 px-6 font-semibold uppercase tracking-wider rounded-full bg-teal text-cream hover:bg-teal-dark border border-teal/15 shadow-sm"
          >
            Book Visit <MessageSquare size={14} className="ml-1.5 shrink-0" />
          </Button>
        </div>

        {/* Mobile menu Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3.5 text-ink hover:text-teal custom-cursor-active cursor-pointer rounded-full hover:bg-sand/25"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </Container>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-cream border-b border-sand text-ink overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-6">
              
              <ul className="flex flex-col gap-4 font-display font-medium text-lg text-ink">
                <li>
                  <Link to="/about" className={`block py-3.5 px-4 rounded-xl font-sans font-bold uppercase text-sm tracking-wider transition-all ${isActive("/about") ? "bg-teal/10 text-teal font-extrabold" : "hover:bg-sand/30"}`}>
                    Our Story & Values
                  </Link>
                </li>

                <li className="bg-sand/10 p-4 rounded-2xl border border-sand/30">
                  <span className="font-sans text-[10px] text-teal font-extrabold tracking-widest block mb-3 uppercase">CLINIC DIRECTORIES</span>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/primary-care" className={`text-xs py-3 px-2 rounded-xl text-center border font-sans font-bold uppercase transition-all ${isActive("/primary-care") ? "bg-teal text-cream border-teal" : "bg-cream border-sand/60 hover:border-teal text-ink"}`}>Primary Care</Link>
                    <Link to="/specialist-care" className={`text-xs py-3 px-2 rounded-xl text-center border font-sans font-bold uppercase transition-all ${isActive("/specialist-care") ? "bg-teal text-cream border-teal" : "bg-cream border-sand/60 hover:border-teal text-ink"}`}>Specialist Care</Link>
                    <Link to="/diagnostics" className={`text-xs py-3 px-2 rounded-xl text-center border font-sans font-bold uppercase transition-all ${isActive("/diagnostics") ? "bg-teal text-cream border-teal" : "bg-cream border-sand/60 hover:border-teal text-ink"}`}>Diagnostics</Link>
                    <Link to="/medical-liaison" className={`text-xs py-3 px-2 rounded-xl text-center border font-sans font-bold uppercase transition-all ${isActive("/medical-liaison") ? "bg-teal text-cream border-teal" : "bg-cream border-sand/60 hover:border-teal text-ink"}`}>Liaison</Link>
                  </div>
                </li>
                
                <li className="border-t border-sand/30 pt-4">
                  <Link to="/insurance" className={`block py-3.5 px-4 rounded-xl font-sans font-bold uppercase text-sm tracking-wider transition-all ${isActive("/insurance") ? "bg-teal/10 text-teal font-extrabold" : "hover:bg-sand/30"}`}>
                    Insurance Accepted
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={`block py-3.5 px-4 rounded-xl font-sans font-bold uppercase text-sm tracking-wider transition-all ${isActive("/faq") ? "bg-teal/10 text-teal font-extrabold" : "hover:bg-sand/30"}`}>
                    Help & FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`block py-3.5 px-4 rounded-xl font-sans font-bold uppercase text-sm tracking-wider transition-all ${isActive("/contact") ? "bg-teal/10 text-teal font-extrabold" : "hover:bg-sand/30"}`}>
                    Reach Contacts
                  </Link>
                </li>
              </ul>

              {/* Mobile quick links */}
              <div className="border-t border-sand/40 pt-6 flex flex-col gap-4">
                <Button variant="primary" href={CLINIC_INFO.whatsappLink} isExternal className="w-full text-center py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-teal text-cream hover:bg-teal-dark border border-teal/10">
                  WhatsApp Clinic <MessageSquare size={16} />
                </Button>
                <div className="flex items-center justify-between font-mono text-[10px] text-mute px-2">
                  <span>PH: {CLINIC_INFO.phoneDisplay}</span>
                  <span>{CLINIC_INFO.hoursWeekday}</span>
                </div>
              </div>

            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
