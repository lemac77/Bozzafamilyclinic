import { Mail, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { CLINIC_INFO } from "../../lib/constants";

export function HoursContact() {
  return (
    <div className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-cream via-sand/20 to-cream relative overflow-hidden border-b border-sand/30">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left column taking 5: Header labels */}
        <div className="lg:col-span-5">
          <Eyebrow>OPEN & ACCESSIBLE</Eyebrow>
          <h2 className="text-h2 text-ink mt-2 mb-6 leading-tight">
            When and how to reach us.
          </h2>
          <p className="text-base text-graphite font-body leading-relaxed mb-8">
            Our teams are available on chat, email, and call during clinic hours. WhatsApp us for the fastest possible reply and booking assistance.
          </p>

          <Button
            variant="primary"
            href={CLINIC_INFO.whatsappLink}
            isExternal
            className="flex items-center gap-2"
          >
            Check real-time availability <MessageSquare size={16} />
          </Button>
        </div>

        {/* Right column taking 7: Hours & Contact Cards directory */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12 w-full">
          {/* Card 1 — Standard Hours */}
          <div className="p-8 bg-cream border border-sand rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 text-teal">
                <Clock size={18} />
                <h3 className="font-display text-lg font-medium text-ink">
                  Hours & Days
                </h3>
              </div>
              <ul className="flex flex-col gap-4 text-sm font-body text-graphite">
                <li>
                  <span className="font-medium text-ink block mb-0.5">Monday – Friday</span>
                  <span className="font-sans text-xs text-teal font-semibold">09:00 – 19:00</span>
                </li>
                <li>
                  <span className="font-medium text-ink block mb-0.5">Some Saturdays</span>
                  <span className="font-sans text-xs text-teal font-semibold">09:00 – 13:00</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-graphite font-sans italic tracking-wide mt-8 border-t border-sand/30 pt-4">
              Hours may vary by specialist. We suggest messaging us on WhatsApp to verify specific availability.
            </p>
          </div>

          {/* Card 2 — Directory Contact */}
          <div className="p-8 bg-cream border border-sand rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 text-teal">
                <MapPin size={18} />
                <h3 className="font-display text-lg font-medium text-ink">
                  Contact details
                </h3>
              </div>
              <ul className="flex flex-col gap-4 text-sm font-body text-graphite">
                <li>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-teal block mb-0.5">WhatsApp / Phone</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-ink font-medium hover:text-teal transition-all">
                    {CLINIC_INFO.phone}
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-teal block mb-0.5">Email Directory</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-ink font-medium hover:text-teal transition-all">
                    {CLINIC_INFO.email}
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-teal block mb-0.5">Clinic Location</span>
                  <span className="text-ink font-medium">
                    {CLINIC_INFO.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
