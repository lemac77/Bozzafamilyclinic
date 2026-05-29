import { motion } from "motion/react";

interface RevealTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

export function RevealText({
  text,
  tag = "h2",
  className = "",
  delay = 0,
}: RevealTextProps) {
  // Split by manual line breaks or literal '\n' combinations to keep editorial shape intact
  const lines = text.replace(/\\n/g, "\n").split("\n");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // premium easeOutExpo
      },
    },
  };

  const Tag = tag;

  const tagStyles = {
    h1: "text-hero font-display tracking-tight text-ink",
    h2: "text-h2 font-display text-ink leading-tight",
    h3: "text-h3 font-display text-ink leading-tight",
    p: "text-body text-graphite",
  };

  return (
    <Tag className={`${tagStyles[tag]} ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="block"
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className="block py-1"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
