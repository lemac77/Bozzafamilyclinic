interface LangSwitcherProps {
  isScrolled: boolean;
  isHome: boolean;
}

export function LangSwitcher({ isScrolled, isHome }: LangSwitcherProps) {
  const activeColor = "text-teal font-semibold";
  const inactiveColor = isHome && !isScrolled ? "text-cream/50 cursor-not-allowed" : "text-graphite/40 cursor-not-allowed";

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider select-none">
      <span className={activeColor}>EN</span>
      <span className={isHome && !isScrolled ? "text-cream/30" : "text-sand"}>|</span>
      <button
        disabled
        className={`${inactiveColor} transition-colors duration-300 relative group`}
        title="Italian version coming soon"
      >
        IT
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-ink text-cream text-[9px] py-1 px-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Stubbed / Inactive
        </span>
      </button>
    </div>
  );
}
