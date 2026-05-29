import { ReactNode } from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  children: ReactNode[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds for a full loop
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 25,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  // We double the content to ensure continuous seamless rendering
  const items = [...children, ...children, ...children];

  return (
    <div className={`relative flex overflow-hidden w-full no-scrollbar ${className}`}>
      <motion.div
        className="flex shrink-0 gap-8 min-w-full items-center justify-around"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        hover={{
          animationPlayState: pauseOnHover ? "paused" : "running",
        } as any}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex shrink-0 items-center justify-center gap-4 px-4">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
