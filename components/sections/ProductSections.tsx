"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  GameController,
  Heart,
  Lightning,
  Play,
  Star,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react";
import {
  audiences,
  features,
  games,
  galleryItems,
  stats,
  videos,
} from "../arcadelx-data";
import { KioskVisual, MotionGradient } from "./Hero";
import { SectionHeading, NeonButton } from "../ui/ArcadePrimitives";

export function TrustedOrganizations() {
  return (
    <section className="lx-section lx-trust lx-scroll-reveal px-[40px] py-[110px]" id="business">
      <p className="lx-eyebrow text-[11px] tracking-[0.2em] uppercase text-[var(--cyan)]">Built for everywhere</p>
      <h2 className="text-[clamp(1.6rem,2.8vw,2rem)] font-normal">Trusted by forward-thinking organizations.</h2>
      <div className="lx-audience-grid grid grid-cols-4 gap-[18px] mt-[20px]">
        {audiences.map((item, index) => (
          <div key={item} className="p-[10px]">
            <small className="text-[#71829d]">0{index + 1}</small>
            <b className="block mt-2">{item}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ProductFeatures() {
  return (
    <section className="lx-section lx-features px-[40px] py-[110px]" id="about">
      <SectionHeading
        eyebrow="Product features"
        title={
          <>
            Powerful. Engaging.
            <br />
            <em>Built for everywhere.</em>
          </>
        }
        description="Everything you need to turn unused space into a magnetic, active entertainment destination."
      />
      <div className="lx-feature-grid grid gap-[24px] grid-cols-1 md:grid-cols-[repeat(3,1fr)]">
        {features.map(({ number, title, copy, icon: Icon }) => (
          <article className="lx-feature-card lx-scroll-reveal p-[17px] min-h-[220px] bg-transparent" key={number}>
            <small className="text-[#71829d]">{number}</small>
            <b className="inline-flex items-center mt-2"><Icon size={28} weight="duotone" /></b>
            <h3 className="mt-4 text-[18px]">{title}</h3>
            <p className="text-[#71829d] mt-2">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function MotionField() {
  return (
    <section
      className="lx-motion-field lx-scroll-reveal px-[40px] py-[110px] flex items-center gap-[24px]"
      aria-label="ArcadeLX motion field"
    >
      <div className="lx-motion-copy max-w-[540px]">
        <p className="lx-eyebrow text-[11px] tracking-[0.2em] uppercase text-[var(--cyan)]">Feel the energy</p>
        <h2 className="text-[clamp(2rem,4vw,2.6rem)] font-normal">
          Play has
          <br />
          <em>a pulse.</em>
        </h2>
        <p className="text-[#71829d] mt-3">Color, motion and sound come together to make every ArcadeLX moment feel alive.</p>
      </div>
      <div className="lx-motion-canvas flex-1 min-h-[240px]">
        <MotionGradient />
      </div>
    </section>
  );
}
export function FeaturedGames() {
  const [active, setActive] = useState(0);
  return (
    <section className="lx-section lx-games px-[40px] py-[110px]" id="games">
      <SectionHeading
        eyebrow="Featured games"
        title={
          <>
            A world of games.
            <br />
            <em>More movement.</em>
          </>
        }
        description="Different players. Different moods. One unforgettable arcade experience."
      />
      <div className="lx-horizontal-track flex gap-[14px] overflow-x-auto pb-4">
        {games.map(({ title, category, number }, index) => (
          <article
            className={`lx-game-card game-${number} ${index === active ? "is-active" : ""} flex-shrink-0 w-[33.333%] min-w-[220px] p-[12px] cursor-pointer`}
            key={title}
            onClick={() => setActive(index)}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setActive(index);
            }}
          >
            <span className="text-[#71829d]">{number}</span>
            <div className="lx-game-art mt-2">
              <i>
                <GameController size={34} weight="duotone" />
              </i>
              <strong className="block mt-2">{title.split(" ").slice(0, 2).join(" ")}</strong>
            </div>
            <small className="text-[#71829d]">{category}</small>
            <h3 className="mt-2">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Gallery() {
  const [active, setActive] = useState("All");
  const track = useRef<HTMLDivElement>(null);
  const items = galleryItems.filter(
    ({ category }) =>
      active === "All" ||
      active.toLowerCase().replace(" ", "-") === category ||
      (active === "Setup" && category === "kiosk"),
  );
  useEffect(() => {
    const trackElement = track.current;
    if (!trackElement) return;
    const cards = trackElement.querySelectorAll(".lx-gallery-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18, clipPath: "inset(0 0 16% 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
    return () => gsap.killTweensOf(cards);
  }, [active]);
  return (
    <section className="lx-gallery lx-scroll-reveal px-[40px] py-[110px]" id="gallery">
      <div className="lx-section-heading lx-gallery-heading flex items-end justify-between mb-[58px]">
        <div>
          <p className="lx-eyebrow text-[11px] tracking-[0.15em] uppercase text-[var(--cyan)]">Gallery</p>
          <h2 className="text-[clamp(2.8rem,4.7vw,5rem)] font-normal">Explore ArcadeLX<br /><em>from every angle.</em></h2>
        </div>
        <div className="lx-filter-row flex gap-2">
          {["All", "Kiosk", "Setup", "In action", "Events"].map((filter) => (
            <button
              className={active === filter ? "is-active" : ""}
              key={filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="lx-gallery-track flex gap-[12px] overflow-x-auto" ref={track}>
        {items.map(({ label, title, category }, index) => (
          <div
            className={`lx-gallery-card gallery-${index + 1} ${category} min-w-[280px] p-[16px] bg-[rgba(255,255,255,0.02)]`}
            key={label}
          >
            <span className="text-[11px]">{label}</span>
            <b className="block mt-2">{title}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
export function VideoSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="lx-section lx-video px-[40px] py-[110px]" id="video">
      <SectionHeading
        eyebrow="Video"
        title={
          <>
            See ArcadeLX
            <br />
            <em>in action.</em>
          </>
        }
      />
      <div className="lx-video-layout flex gap-[24px] mt-6">
        <div className="lx-video-player bg-[rgba(0,0,0,0.2)] p-6 rounded-md flex-1 min-h-[220px]">
          <div className="lx-play-button inline-flex items-center justify-center w-[64px] h-[64px] bg-[rgba(255,255,255,0.06)] rounded-full">
            <Play size={22} weight="fill" />
          </div>
          <small className="block mt-4 text-[#71829d]">ARCADELX / PLAY FILM / 0{active + 1}</small>
        </div>
        <div className="lx-video-list w-[320px] flex flex-col gap-3">
          {videos.map(({ title, time }, index) => (
            <button
              className={index === active ? "is-active" : ""}
              key={title}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <b>{title}</b>
              <small>{time}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export function WhyArcadeLX() {
  return (
    <section className="lx-why lx-scroll-reveal px-[40px] py-[110px]">
      <div>
        <p className="lx-eyebrow text-[11px] tracking-[0.2em] uppercase text-[var(--cyan)]">Why ArcadeLX?</p>
        <h2 className="text-[clamp(2rem,4vw,2.6rem)] font-normal">
          More than just games.
          <br />
          <em>A healthier, happier tomorrow.</em>
        </h2>
      </div>
      <div className="lx-benefit-grid grid grid-cols-3 gap-[20px] mt-6">
        <span className="p-[12px] bg-transparent">
          <Heart weight="duotone" />
          <b className="block mt-2">Active lifestyle</b>
          <small className="block text-[#71829d]">Turn screen time into movement time.</small>
        </span>
        <span className="p-[12px] bg-transparent">
          <UsersThree weight="duotone" />
          <b className="block mt-2">Increases engagement</b>
          <small className="block text-[#71829d]">Interactive experiences players remember.</small>
        </span>
        <span className="p-[12px] bg-transparent">
          <TrendUp weight="duotone" />
          <b className="block mt-2">New revenue stream</b>
          <small className="block text-[#71829d]">Transform unused space into energy.</small>
        </span>
        <span className="p-[12px] bg-transparent">
          <Star weight="duotone" />
          <b className="block mt-2">Premium look & feel</b>
          <small className="block text-[#71829d]">Designed to stand out.</small>
        </span>
        <span className="p-[12px] bg-transparent">
          <Lightning weight="duotone" />
          <b className="block mt-2">All age groups</b>
          <small className="block text-[#71829d]">Fun for kids, families and adults.</small>
        </span>
      </div>
    </section>
  );
}
export function Statistics() {
  return (
    <section className="lx-stats lx-scroll-reveal grid grid-cols-3 gap-[18px] px-[40px] py-[110px]">
      {stats.map(({ value, label }) => (
        <div key={label} className="p-[15px]">
          <strong
            className="lx-stat-value text-[3.2rem] block"
            data-value={value.replace(/\D/g, "")}
            data-suffix={value.replace(/\d/g, "")}
          >
            {value}
          </strong>
          <span className="block text-[#71829d]">{label}</span>
        </div>
      ))}
    </section>
  );
}
export function FinalCTA() {
  return (
    <section
      className="lx-final-cta lx-scroll-reveal px-[40px] py-[110px] flex items-center gap-[40px]"
      id="contact"
    >
      <div className="flex-1">
        <p className="lx-eyebrow text-[11px] tracking-[0.2em] uppercase text-[var(--cyan)]">Ready when you are</p>
        <h2 className="text-[clamp(2rem,4vw,2.6rem)] font-normal">
          Ready to bring
          <br />
          <em>ArcadeLX to your space?</em>
        </h2>
        <p className="text-[#71829d] mt-3">Get pricing, customization options, and installation support.</p>
        <div className="lx-actions mt-6 flex items-center gap-[18px]">
          <NeonButton href="mailto:hello@arcadelx.com">Order now</NeonButton>
          <a className="lx-watch inline-flex items-center text-[#fff]" href="mailto:hello@arcadelx.com">
            Request a demo
          </a>
        </div>
      </div>
      <KioskVisual compact />
    </section>
  );
}

