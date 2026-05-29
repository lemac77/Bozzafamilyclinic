import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps {
  children?: ReactNode;
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  imageUrl?: string;
  imageAlt?: string;
  dark?: boolean;
  staggerDelay?: number;
}

export function Card({
  className = "",
  title,
  subtitle,
  description,
  link,
  imageUrl,
  imageAlt = "Family Clinic Service",
  dark = false,
  staggerDelay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: staggerDelay, ease: [0.25, 1, 0.5, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden border p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 h-full ${
        dark
          ? "bg-ink text-cream border-ink"
          : "bg-cream text-ink border-sand hover:shadow-lg"
      } ${className}`}
    >
      {/* Background image option (for specialist / diagnostics style) */}
      {imageUrl && (
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            width={800}
            height={600}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Enhanced overlay structure for perfect light-text contrast and legibility */}
          <div className="absolute inset-0 bg-ink/30 opacity-100 transition-opacity duration-500 group-hover:bg-ink/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent/10" />
        </div>
      )}

      {/* Clickable Overlay for the entire card */}
      <Link to={link} className="absolute inset-0 z-20 custom-cursor-active" aria-label={title} />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {subtitle && (
            <span
              className={`font-sans text-xs font-bold uppercase tracking-wider block mb-4 ${
                dark || imageUrl ? "text-sage/80" : "text-teal"
              }`}
            >
              {subtitle}
            </span>
          )}
          <h3
            className={`text-2xl font-display font-medium leading-snug mb-4 ${
              dark || imageUrl ? "text-cream" : "text-ink"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-8 max-w-md ${
              dark || imageUrl ? "text-sand/85" : "text-graphite"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Link
            to={link}
            className={`inline-flex items-center gap-2 text-sm font-medium underline-draw custom-cursor-active ${
              dark || imageUrl ? "text-gold hover:text-gold-dark" : "text-teal hover:text-teal-dark"
            }`}
          >
            Explore service <ArrowRight size={14} />
          </Link>

          {/* Luxury rotated plus indicator: "+" rotates 45 -> 90deg on hover */}
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 group-hover:rotate-90 ${
              dark || imageUrl
                ? "border-cream/20 text-cream group-hover:bg-cream/10"
                : "border-sand text-teal group-hover:bg-teal/5"
            }`}
          >
            <Plus size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
