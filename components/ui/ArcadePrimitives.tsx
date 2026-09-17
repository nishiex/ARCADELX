import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function NeonButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`lx-neon-btn ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} weight="bold" />
    </a>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: ReactNode }) {
  return (
    <div className="lx-section-heading lx-scroll-reveal flex items-end justify-between mb-[58px]">
      <div>
        <p className="lx-eyebrow text-[11px] tracking-[0.15em] uppercase text-[var(--cyan)] mb-6">{eyebrow}</p>
        <h2 className="text-[clamp(2.8rem,4.7vw,5rem)] font-normal mb-0">{title}</h2>
      </div>
      {description && <p className="text-[#71829d] text-[15px] leading-[1.7] max-w-[275px]">{description}</p>}
    </div>
  );
}


