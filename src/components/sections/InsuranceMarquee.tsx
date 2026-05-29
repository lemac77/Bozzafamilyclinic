import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Marquee } from "../ui/Marquee";
import { Button } from "../ui/Button";
import { ACCEPTED_INSURANCES } from "../../lib/constants";

export function InsuranceMarquee() {
  const row1 = [...ACCEPTED_INSURANCES];
  const row2 = [...ACCEPTED_INSURANCES].reverse();

  return (
    <div className="bg-sand/20 py-10 md:py-14 border-t border-b border-sand/30 overflow-hidden">
      <Container className="mb-8">
        <div className="max-w-xl">
          <Eyebrow>ACCEPTED HERE</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink leading-tight mb-4">
            Major US insurance plans, handled directly.
          </h2>
          <p className="text-sm text-graphite font-body leading-relaxed">
            We work with military and civilian insurance to settle payments without you having to negotiate terms.
          </p>
        </div>
      </Container>

      {/* Single scrolling marquee row */}
      <div className="py-6 border-t border-b border-sand/20">
        <Marquee direction="left" speed={20}>
          {row1.map((item, index) => (
            <div
              key={`${item.name}-row1-${index}`}
              className="px-8 py-4 border border border-sand/45 rounded-2xl bg-cream flex items-center justify-center h-20 w-44 transition-all duration-300 hover:border-teal/30 hover:shadow-sm"
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
        </Marquee>
      </div>

      <Container className="mt-8 flex items-center justify-start">
        <Button variant="text" href="/insurance" className="flex items-center gap-2 group text-sm font-semibold text-teal hover:text-teal-dark custom-cursor-active">
          See how insurance works at Family Clinic
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Container>
    </div>
  );
}
