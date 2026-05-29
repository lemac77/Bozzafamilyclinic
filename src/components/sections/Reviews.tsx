import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Star, ChevronRight, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { REVIEWS_DATA } from "../../lib/constants";

export function GoogleReviewsCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setMaxScrollLeft(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable grid strip */}
      <motion.div
        ref={carouselRef as any}
        drag="x"
        dragConstraints={{ left: -maxScrollLeft || 0, right: 0 }}
        className="flex gap-6 cursor-grab active:cursor-grabbing py-8 select-none no-scrollbar overflow-x-auto"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {REVIEWS_DATA.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </motion.div>
    </div>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS_DATA[0]; key?: any }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef as any, { once: true, margin: "-100px" });

  return (
    <div
      ref={cardRef as any}
      className="shrink-0 w-[300px] sm:w-[380px] p-8 bg-cream border border-sand/60 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 select-none"
      style={{ scrollSnapAlign: "start" }}
    >
      <div>
        {/* Sequencing stars on reveal */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: 0.1 * i,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Star
                size={16}
                fill="#F5A623"
                stroke="#F5A623"
                className="text-gold"
              />
            </motion.div>
          ))}
        </div>

        {/* Review Quote text */}
        <p className="text-sm text-graphite font-body leading-relaxed mb-6 italic">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-3 border-t border-sand/30 pt-4 mt-4">
        <img
          src={review.profilePhotoUrl}
          alt={review.authorName}
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover border border-sand/40 bg-sand/20"
        />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-ink font-body">
            {review.authorName}
          </span>
          <span className="text-[10px] text-teal font-sans font-bold uppercase tracking-wider mt-0.5">
            {review.relativeTimeDescription}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <div className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-cream to-sand/5 relative overflow-hidden border-b border-sand/30">
      <Container className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>WHAT OUR PATIENTS SAY</Eyebrow>
            <h2 className="text-h2 text-ink mt-2 mb-4 leading-tight">
              Real reviews. Real people.
            </h2>
            <p className="text-sm text-graphite font-body">
              Drag horizontally or swipe to navigate the verified feedback shared by our patients.
            </p>
          </div>

          <Button
            variant="text"
            href="https://google.com"
            isExternal
            className="group flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark custom-cursor-active mt-4 md:mt-0"
          >
            Read all reviews on Google
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>

      {/* Embedded horizontal dragging carousel */}
      <Container className="!px-0 pl-6 md:pl-12 lg:pl-20">
        <GoogleReviewsCarousel />
      </Container>
    </div>
  );
}
