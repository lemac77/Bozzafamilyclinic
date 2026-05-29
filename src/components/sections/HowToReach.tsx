import { motion } from "motion/react";
import { Navigation, Compass } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

interface RouteCardProps {
  baseName: string;
  details: string;
  minutes: string;
  mapsLink: string;
  staggerDelay: number;
}

function RouteCard({ baseName, details, minutes, mapsLink, staggerDelay }: RouteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: staggerDelay, ease: [0.25, 1, 0.5, 1] }}
      className="p-8 bg-cream border border-sand rounded-xl shadow-xs hover:border-teal/30 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
            <Compass size={16} />
          </div>
          <h3 className="font-display text-lg font-medium text-ink">
            {baseName}
          </h3>
        </div>
        <p className="text-sm text-graphite font-body leading-relaxed mb-4">
          {details}
        </p>
        <span className="font-mono text-xs text-teal font-medium block mb-6">
          ★ {minutes}
        </span>
      </div>

      <Button
        variant="outline"
        href={mapsLink}
        isExternal
        className="text-xs py-3 px-6 !border-sand/70"
      >
        Open in Google Maps <Navigation size={12} className="ml-1" />
      </Button>
    </motion.div>
  );
}

export function HowToReach() {
  const ederleMaps = "https://www.google.com/maps/dir/?api=1&destination=Via+F.lli+Rosselli+58,+36100+Vicenza";
  const delDinMaps = ederleMaps;

  return (
    <div className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-cream via-sand/15 to-sand/5 relative overflow-hidden border-b border-sand/30">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
        {/* Left header notes */}
        <div className="lg:col-span-5">
          <Eyebrow>GETTING HERE</Eyebrow>
          <h2 className="text-h2 text-ink mt-2 mb-4 leading-tight">
            Two minutes from Ederle. Five from Del Din.
          </h2>
          <p className="text-sm text-graphite font-body leading-relaxed">
            Family Clinic is in central Vicenza, easy to reach from both US Army installations and well-connected by car, bus, and on foot from the train station.
          </p>
        </div>

        {/* Right route choices (2 columns inline) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-12 w-full">
          <RouteCard
            baseName="From Caserma Ederle"
            details="Via F.lli Rosselli 58, 36100 Vicenza · Easy direct routing through inner city ring"
            minutes="~ 8 min by car · ~ 15 min walk"
            mapsLink={ederleMaps}
            staggerDelay={0.1}
          />
          <RouteCard
            baseName="From Camp Del Din"
            details="Via F.lli Rosselli 58, 36100 Vicenza · Fluid transit via inner city loops"
            minutes="~ 12 minutes by car"
            mapsLink={delDinMaps}
            staggerDelay={0.2}
          />
        </div>
      </Container>

      {/* Embedded desaturated map frame & animated SVG pathways */}
      <Container className="h-[450px] md:h-[550px] w-full">
        
        {/* Real, clear Google Map Iframe */}
        <div className="w-full h-full rounded-2xl overflow-hidden border border-sand bg-sand/20 relative shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=Via%20Fratelli%20Rosselli%2058,%2036100%20Vicenza%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Clinic Location Map"
          />
        </div>

      </Container>
    </div>
  );
}
