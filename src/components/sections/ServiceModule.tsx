import { motion } from "motion/react";
import { Check, ClipboardList, Calendar } from "lucide-react";
import { Specialty } from "../../types";
import { Button } from "../ui/Button";

interface ServiceModuleProps {
  specialty: Specialty;
  index: number;
  key?: any;
}

export function ServiceModule({ specialty, index }: ServiceModuleProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.section
      id={specialty.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 md:py-16 border-b border-sand/30 last:border-b-0 scroll-mt-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
        <div className="md:col-span-8">
          {/* Index Accent + Eyebrow */}
          <span className="font-sans text-xs font-bold text-teal block mb-3 uppercase tracking-wider">
            {formattedIndex} · {specialty.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-display font-medium text-ink leading-tight mb-5 hover:text-teal transition-colors duration-300">
            {specialty.h2}
          </h2>

          {/* Narrative Description */}
          <p className="text-sm md:text-base text-graphite font-body leading-relaxed mb-0">
            {specialty.description}
          </p>
        </div>

        {specialty.image && (
          <div className="md:col-span-4 relative aspect-[16/10] md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-sand shadow-sm w-full">
            <img
              src={specialty.image}
              alt={specialty.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      <div className="max-w-3xl">
        {/* Side-by-side or stacked grid depending on content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Conditions We Treat Box */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 bg-cream border border-sand hover:border-teal/30 hover:shadow-md transition-all rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-teal/20" />
            <h3 className="font-display text-sm font-semibold text-ink flex items-center gap-2 mb-4">
              <ClipboardList size={15} className="text-teal" />
              Conditions we treat:
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-graphite font-body">
              {specialty.conditions.map((cond, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <Check size={11} className="text-teal mt-0.5 shrink-0" />
                  <span>{cond}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Procedures Box */}
          {specialty.procedures && specialty.procedures.length > 0 && (
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-cream border border-sand hover:border-teal/30 hover:shadow-md transition-all rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold/30" />
              <h3 className="font-display text-sm font-semibold text-ink flex items-center gap-2 mb-4">
                <Check size={14} className="text-teal" />
                {specialty.proceduresTitle || "Services:"}
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs text-graphite font-body">
                {specialty.procedures.map((proc, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* When to book / Practical Guidelines */}
        <div className="bg-sand/15 p-5 rounded-2xl border border-sand/30 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-teal/5 blur-xl pointer-events-none" />
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-teal block mb-2 font-mono">
            Clinical Guidelines & Timing
          </h4>
          <p className="text-xs text-graphite font-body leading-relaxed">
            {specialty.whenBooking}
          </p>
        </div>

        {/* Booking CTA aligned with medical specialty */}
        <Button
          variant="outline"
          href={`https://wa.me/3904441943203?text=Hi%2C%20I%27d%20like%20to%20book%20a%20visit%2520for%2520${encodeURIComponent(specialty.name)}%252520at%252520Family%252520Clinic`}
          isExternal
          className="text-xs py-3 px-6 !border-sand hover:!border-teal hover:!bg-teal/5 rounded-full font-semibold uppercase tracking-wider transition-all duration-300"
        >
          Book a {specialty.name.toLowerCase()} visit <Calendar size={12} className="ml-1" />
        </Button>
      </div>
    </motion.section>
  );
}
