import { ReactNode } from "react";
import { motion } from "motion/react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  showDivider?: boolean;
  useContainer?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  showDivider = false,
  useContainer = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-12 md:py-16 lg:py-20 overflow-hidden ${className}`}
    >
      {/* SVG Divider Line drawing on view */}
      {showDivider && (
        <Container className="mb-10 md:mb-12">
          <div className="relative h-[1px] w-full bg-sand/20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-sand origin-left w-full h-[1px]"
            />
          </div>
        </Container>
      )}

      {useContainer ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
