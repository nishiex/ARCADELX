"use client";

import { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Cube, Play, Plug, Pulse, UsersThree } from "@phosphor-icons/react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { NeonButton } from "../ui/ArcadePrimitives";

const shaderProps = {
  animate: "on",
  axesHelper: "off",
  bgColor1: "#000000",
  bgColor2: "#000000",
  brightness: 1.1,
  cAzimuthAngle: 180,
  cDistance: 3.57,
  cPolarAngle: 90,
  cameraZoom: 1,
  color1: "#66e6ff",
  color2: "#5d8dff",
  color3: "#e868ff",
  destination: "onCanvas",
  embedMode: "off",
  envPreset: "city",
  format: "gif",
  fov: 45,
  frameRate: 10,
  gizmoHelper: "hide",
  grain: "on",
  lightType: "3d",
  pixelDensity: 1,
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  type: "plane",
  uAmplitude: 1,
  uDensity: 1.3,
  uFrequency: 5.5,
  uSpeed: 0.4,
  uStrength: 4,
  uTime: 0,
  wireframe: false,
} as unknown as Parameters<typeof ShaderGradient>[0];

export const MotionGradient = memo(function MotionGradient() {
  return (
    <ShaderGradientCanvas
      className="shader-gradient-canvas"
      lazyLoad={false}
      pointerEvents="none"
      pixelDensity={1}
    >
      <ShaderGradient {...shaderProps} />
    </ShaderGradientCanvas>
  );
});

const UI_SCREENS = [
  "/images/Calibration_Page (1).png",
  "/images/Catalog (1).png",
  "/images/Game_Play (1).png",
  "/images/Payment_Gatewayt (3).png",
];

export function KioskVisual({ compact = false }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.gsap-kiosk-img');
      if (images.length < 2) return;

      // Set initial state
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 0.8 });

      const tl = gsap.timeline({ repeat: -1 });

      images.forEach((img, i) => {
        const nextImg = images[(i + 1) % images.length];
        tl.to(img, { opacity: 0, duration: 1, ease: "power1.inOut", delay: 2.5 })
          .to(nextImg, { opacity: 0.8, duration: 1, ease: "power1.inOut" }, "<");
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`lx-kiosk-wrap ${compact ? "lx-kiosk-compact" : ""} relative z-10 flex items-center justify-center w-[92vw] max-w-[420px] md:w-auto md:max-w-none`}
    >
      <div className="lx-kiosk-glow" />
      <div className="lx-kiosk relative md:absolute w-full md:w-auto">
        <div className="lx-kiosk-top text-[clamp(12px,3.6vw,16px)] tracking-[0.2em]">
          <span className="font-display text-[clamp(14px,4.2vw,20px)]">ARCADELX</span>
          <b className="text-[clamp(14px,4.0vw,20px)]">AX</b>
        </div>
        <div className="lx-kiosk-screen relative overflow-hidden flex flex-col justify-center items-center">
          {/* Keep the grid for the retro effect */}
          <div className="lx-temple-grid z-20 pointer-events-none" />

          {/* Carousel of UI screens */}
          <div className="absolute inset-0 z-10">
            {UI_SCREENS.map((screen, idx) => (
              <div
                key={screen}
                className="gsap-kiosk-img absolute inset-0"
                style={{ opacity: idx === 0 ? 0.8 : 0 }}
              >
                <Image
                  src={screen}
                  alt={`Kiosk Screen ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <small className="relative z-30 text-[clamp(8px,2.2vw,10px)] tracking-[0.2em] mt-2 drop-shadow-md">MOVE TO PLAY</small>
        </div>
      </div>
      {!compact && (
        <p className="lx-visual-label block mt-3 text-[clamp(10px,3vw,11px)] text-center md:absolute md:bottom-[18px] md:right-0 md:text-right">
          GAMING
          <br />
          <b>MEETS MOVEMENT</b>
        </p>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="lx-hero grid grid-cols-1 md:grid-cols-[0.94fr_1.06fr] md:min-h-[690px] relative"
      id="home"
    >
      <div className="lx-parallax-bg" />
      <div className="lx-hero-copy lx-parallax-copy self-start md:self-center pt-6 md:pt-[42px] pb-8 md:pb-[90px] relative z-20 max-w-[570px]">
        <p className="lx-eyebrow lx-hero-reveal text-[clamp(10px,2.8vw,11px)] tracking-[0.2em] mb-[24px] uppercase text-[var(--cyan)]">
          <span /> Move · Play · Stay active
        </p>
        <h1 className="lx-hero-reveal text-[clamp(36px,6.5vw,94px)] font-normal tracking-[-0.045em] leading-[0.93] mb-[28px] max-w-[670px] uppercase">
          Live the <em>gaming</em>
          <br /> xperience.
        </h1>
        <p className="lx-hero-description lx-hero-reveal text-[#b8c5d9] text-[clamp(14px,3.5vw,16px)] leading-[1.7] max-w-[440px]">
          ArcadeLX is a next-generation motion-sensing gaming kiosk that brings
          immersive, full-body gaming to malls, offices, schools and public
          spaces.
        </p>
        <div className="lx-actions lx-hero-reveal flex items-center gap-[28px] mt-[38px] mb-[46px] ">
          <NeonButton href="#contact">Order now</NeonButton>
          <a
            className="lx-watch inline-flex items-center gap-2 text-[#fff] text-[14px]"
            href="#video"
          >
            <Play className="lx-inline-icon" size={16} weight="fill" /> Watch
            video
          </a>
        </div>
      </div>
      <div className="lx-hero-visual lx-parallax-kiosk flex items-center justify-center min-h-[min(92vw,430px)] md:min-h-[600px] relative order-2 md:order-none">
        <KioskVisual />
      </div>
      <div className="lx-hero-features lx-hero-reveal grid grid-cols-2 gap-[20px] md:grid-cols-4 md:mt-[-78px] mt-6 relative z-10">
        <span className="border-l border-[rgba(255,255,255,0.2)] pl-[15px] text-white font-display text-[clamp(12px,3.4vw,14px)] uppercase">
          <b className="inline-flex items-center mr-[8px] text-[#ff00d4]">
            <Pulse size={18} weight="duotone" />
          </b>{" "}
          Motion sensing
          <small className="block text-[#71829d] text-[clamp(10px,3vw,11px)]">Gameplay</small>
        </span>
        <span className="border-l border-[rgba(255,255,255,0.2)] pl-[15px] text-white font-display text-[clamp(12px,3.4vw,14px)] uppercase">
          <b className="inline-flex items-center mr-[8px] text-[#ff00d4]">
            <UsersThree size={18} weight="duotone" />
          </b>{" "}
          Fun for all
          <small className="block text-[#71829d] text-[clamp(10px,3vw,11px)]">Age groups</small>
        </span>
        <span className="border-l border-[rgba(255,255,255,0.2)] pl-[15px] text-white font-display text-[clamp(12px,3.4vw,14px)] uppercase">
          <b className="inline-flex items-center mr-[8px] text-[#ff00d4]">
            <Cube size={18} weight="duotone" />
          </b>{" "}
          Compact & efficient
          <small className="block text-[#71829d] text-[clamp(10px,3vw,11px)]">
            Space efficient
          </small>
        </span>
        <span className="border-l border-[rgba(255,255,255,0.2)] pl-[15px] text-white font-display text-[clamp(12px,3.4vw,14px)] uppercase">
          <b className="inline-flex items-center mr-[8px] text-[#ff00d4]">
            <Plug size={18} weight="duotone" />
          </b>{" "}
          Plug & play
          <small className="block text-[#71829d] text-[clamp(10px,3vw,11px)]">Setup</small>
        </span>
      </div>
    </section>
  );
}






