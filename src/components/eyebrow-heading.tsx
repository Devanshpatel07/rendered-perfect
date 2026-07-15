import type { ReactNode } from "react";

export function EyebrowHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"} ${className}`}>
      {eyebrow && <div className="eyebrow text-accent">{eyebrow}</div>}
      <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.02] tracking-tightest text-ink">
        {title}
      </h2>
      {lede && <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">{lede}</p>}
    </div>
  );
}
