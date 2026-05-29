import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMagnetic } from "../../hooks/useMagnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "text" | "dark";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  onClick?: (e: any) => void;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  isExternal = false,
  magnetic = true,
  ...props
}: ButtonProps) {
  const magneticRef = useMagnetic(magnetic ? 0.2 : 0);

  const baseStyles = "relative inline-flex items-center justify-center font-body text-sm tracking-wide font-medium transition-all duration-500 overflow-hidden active:scale-95 py-4 px-8 rounded-full shadow-sm custom-cursor-active";
  
  const variants = {
    primary: "bg-teal text-cream hover:bg-teal-dark font-medium border border-teal/10",
    secondary: "bg-gold text-ink hover:bg-gold-dark font-medium border border-gold/10",
    outline: "bg-transparent text-ink border border-sand hover:bg-sand/30",
    dark: "bg-ink text-cream hover:bg-graphite border border-ink/10",
    text: "bg-transparent text-teal hover:text-teal-dark p-0 shadow-none hover:shadow-none active:scale-100 border-none rounded-none",
  };

  let variantStyles = variants[variant];
  if (className.includes("text-")) {
    // If className has text-color overrides, remove default text classes from the variant base style
    variantStyles = variantStyles.replace(/\btext-(teal|ink|cream|gold|graphite)\b/g, "");
  }
  if (className.includes("bg-")) {
    // If className has bg-color overrides, remove default bg classes from the variant base style
    variantStyles = variantStyles.replace(/\bbg-(teal|gold|transparent|ink|cream)\b/g, "");
  }

  const selectedStyles = `${baseStyles} ${variantStyles} ${className}`;

  // Shine sweep indicator (added to primary, secondary and dark buttons)
  const renderShine = () => {
    if (variant === "primary" || variant === "secondary" || variant === "dark") {
      return (
        <span className="absolute inset-0 block w-full h-full">
          <span className="absolute inset-0 block w-1/2 h-full bg-linear-to-r from-transparent via-cream/20 to-transparent -skew-x-25 -translate-x-full transition-all duration-1000 group-hover:duration-1000 group-hover:translate-x-[200%]" />
        </span>
      );
    }
    return null;
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {renderShine()}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          ref={magneticRef as any}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${selectedStyles}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        ref={magneticRef as any}
        to={href}
        className={`group ${selectedStyles}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={magneticRef as any}
      className={`group ${selectedStyles}`}
      {...props}
    >
      {content}
    </button>
  );
}
