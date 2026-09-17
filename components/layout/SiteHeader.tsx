"use client";

import Image from "next/image";
import { useState } from "react";
import { NeonButton } from "../ui/ArcadePrimitives";

const links = ["Home", "About", "Games", "Business", "Support"];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header
        className={`lx-header ${menuOpen ? "is-open" : ""}`}
      >
        <a href="#home" className="lx-brand block" aria-label="ArcadeLX home">
          <Image
            className="h-auto w-[clamp(135px,13vw,190px)]"
            src="/arcadelx_logo.png"
            alt="ArcadeLX"
            width={190}
            height={58}
            priority
          />
        </a>
        <nav
          className="lx-nav"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              className={`px-0 py-[10px] text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ease ${link === "Home" ? "text-[var(--cyan)] neon-cyan" : "text-[#9eabc1]"}`}
              href={`#${link.toLowerCase()}`}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
        <a className="lx-cta-primary-pill" href="mailto:hello@arcadelx.com">
            Order now
            <span className="lx-pill-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.33333 7H11.6667M11.6667 7L7 2.33333M11.6667 7L7 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        <button
          className={`lx-menu-button ${menuOpen ? "is-open" : ""} flex items-end flex-col gap-[5px] py-[10px] pl-[10px] pr-0 md:hidden`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="lx-mobile-nav"
          aria-label="Toggle navigation"
        >
          <i />
          <i />
          <i />
        </button>
      </header>
      <nav
        className={`lx-mobile-nav ${menuOpen ? "is-open" : ""} md:hidden`}
        id="lx-mobile-nav"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            key={link}
            className="block py-[12px] text-[15px] text-[#fff]"
            href={`#${link.toLowerCase()}`}
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
       
      </nav>
    </>
  );
}
