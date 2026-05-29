import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useLenis } from "./hooks/useLenis";

// Custom global elements
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFAB } from "./components/layout/WhatsAppFAB";
import { ScrollToTop } from "./components/utils/ScrollToTop";

// Page Views
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Insurance } from "./pages/Insurance";
import { PrimaryCare } from "./pages/PrimaryCare";
import { SpecialistCare } from "./pages/SpecialistCare";
import { Diagnostics } from "./pages/Diagnostics";
import { MedicalLiaison } from "./pages/MedicalLiaison";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";

export default function App() {
  // Initialize Lenis luxury scroll smooth physics
  useLenis();

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Instantly scroll viewport to top on routing changes */}
        <ScrollToTop />

        {/* Global Floating Nav Header */}
        <Header />

        {/* Floating WhatsApp Action Button on all pages */}
        <WhatsAppFAB />

        {/* Dynamic Multi-Route Content rendering */}
        <div id="app-viewport" className="min-h-screen flex flex-col justify-between bg-cream text-ink overflow-x-clip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/primary-care" element={<PrimaryCare />} />
            <Route path="/specialist-care" element={<SpecialistCare />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/medical-liaison" element={<MedicalLiaison />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Global Branding Info Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
