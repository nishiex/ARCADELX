"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";
import Hero from "./sections/Hero";
import {
  FeaturedGames,
  FinalCTA,
  Gallery,
  MotionField,
  ProductFeatures,
  Statistics,
  TrustedOrganizations,
  VideoSection,
  WhyArcadeLX,
} from "./sections/ProductSections";

export default function ArcadeLXLanding() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (reduce) intro.set(".lx-hero-reveal", { opacity: 1, y: 0 });
      else
        intro
          .from(".lx-header", { y: -22, opacity: 0, duration: 0.65 })
          .from(
            ".lx-hero-reveal",
            { y: 28, opacity: 0, duration: 0.7, stagger: 0.1 },
            "-=.25",
          )
          .from(
            ".lx-kiosk-wrap",
            { x: 80, scale: 0.92, opacity: 0, duration: 1.15 },
            "-=.7",
          )
          .from(
            ".lx-hero-glow",
            { opacity: 0, scale: 0.72, duration: 1.1 },
            "-=.95",
          );
      mm.add("all", () => {
        const mobile = window.matchMedia("(max-width: 767px)").matches;
        const movement = reduce ? 0 : mobile ? 16 : 30;
        gsap.utils
          .toArray<HTMLElement>(".lx-scroll-reveal")
          .forEach((element) =>
            gsap.from(element, {
              y: movement,
              opacity: reduce ? 1 : 0,
              duration: reduce ? 0 : mobile ? 0.55 : 0.75,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 84%", once: true },
            }),
          );
        if (!reduce) {
          gsap.from(".lx-features .lx-feature-card", {
            y: mobile ? 18 : 28,
            opacity: 0,
            scale: mobile ? 0.99 : 0.96,
            duration: mobile ? 0.5 : 0.7,
            stagger: 0.07,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".lx-features",
              start: "top 80%",
              once: true,
            },
          });
          gsap.from(".lx-video-player", {
            scale: 0.96,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".lx-video",
              start: "top 78%",
              once: true,
            },
          });
          gsap.from(".lx-final-cta > div > *, .lx-final-cta > .lx-kiosk-wrap", {
            y: mobile ? 14 : 24,
            opacity: 0,
            duration: mobile ? 0.5 : 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".lx-final-cta",
              start: "top 78%",
              once: true,
            },
          });
        }
      });
            // Keep kiosk stable; removed looping y animation to keep kiosk visually stable while cards animate.

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".lx-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(".lx-parallax-copy", { y: -65, opacity: 0.72 }, 0)
        .to(".lx-parallax-kiosk", { y: 28, scale: 0.98 }, 0)
        .to(".lx-parallax-bg", { y: 75, opacity: 0.55 }, 0);
      gsap.utils.toArray<HTMLElement>(".lx-stat-value").forEach((element) => {
        if (reduce) return;
        gsap.fromTo(
          element,
          { textContent: "0" },
          {
            textContent: Number(element.dataset.value),
            duration: 1.4,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
            onUpdate: () => {
              element.textContent = `${Math.round(Number(element.textContent))}${element.dataset.suffix ?? ""}`;
            },
          },
        );
      });
      mm.add("(pointer: fine) and (min-width: 900px)", () => {
        if (reduce) return;
        const quickX = gsap.quickTo(".lx-parallax-bg", "x", {
          duration: 0.8,
          ease: "power3.out",
        });
        const quickY = gsap.quickTo(".lx-parallax-bg", "y", {
          duration: 0.8,
          ease: "power3.out",
        });
        const onMove = (event: MouseEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          quickX(x * 10);
          quickY(y * 8);
          };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });
      return () => mm.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main className="arcadelx-site bg-[#020817] text-white min-h-screen overflow-hidden" ref={root}>
      <SiteHeader />
      <Hero />
      {/* <TrustedOrganizations /> */}
      <ProductFeatures />
      <MotionField />
      <FeaturedGames />
      <Gallery />
      <VideoSection />
      <WhyArcadeLX />
      <Statistics />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

