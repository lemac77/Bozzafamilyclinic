import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`text-eyebrow text-teal font-sans inline-block tracking-[0.15em] text-xs uppercase mb-3 ${className}`}
    >
      {children}
    </span>
  );
}
