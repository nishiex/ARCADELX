import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export default function SiteFooter() {
  return (
    <footer className="lx-footer border-t border-[rgba(255,255,255,0.12)] grid gap-[40px] grid-cols-[1.5fr_1fr_1fr_1.5fr] max-w-[1280px] px-[40px] py-[65px] pb-[30px] relative" id="support">
      <div className="lx-footer-brand">
        <Image
          className="h-auto w-[150px]"
          src="/arcadelx_logo.png"
          alt="ArcadeLX"
          width={160}
          height={49}
        />
        <p className="text-[#71829d] text-[12px] leading-[1.6]">
          Live the gaming experience.
          <br />
          Designed for a more active tomorrow.
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <b className="text-white text-[12px] font-normal tracking-[0.12em]">Quick links</b>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#home">Home</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#about">About us</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#games">Games</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#gallery">Gallery</a>
      </div>
      <div className="flex flex-col gap-[10px]">
        <b className="text-white text-[12px] font-normal tracking-[0.12em]">Support</b>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#contact">Contact us</a>        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="/privacy-policy">Privacy Policy</a>        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="/terms-and-conditions">Terms & Conditions</a>        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="/refund-cancellation-policy">Refund & Cancellation</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#support">FAQs</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#support">Warranty</a>
        <a className="text-[#71829d] text-[12px] leading-[1.6]" href="#support">Customer support</a>
      </div>
      <div className="lx-newsletter">
        <b className="text-white text-[12px] font-normal tracking-[0.12em]">Stay updated</b>
        <p className="text-[#71829d] text-[12px] leading-[1.6]">Get the latest games, offers and news.</p>
        <form onSubmit={(event) => event.preventDefault()} className="mt-3 flex items-center gap-2">
          <input
            className="flex-1 bg-transparent border border-[rgba(255,255,255,0.08)] px-3 py-2 text-[#fff] placeholder:text-[#71829d]"
            type="email"
            aria-label="Your email address"
            placeholder="Your email address"
          />
          <button aria-label="Subscribe" className="inline-flex items-center justify-center p-2 text-[#fff] hover:text-[#ff00d4] transition-transform duration-200">
            <ArrowRight size={19} weight="bold" />
          </button>
        </form>
      </div>
      <small className="lx-copyright text-[#71829d] col-span-full mt-[20px]">
       © 2026 ArcadeLX. All rights reserved.
      </small>
    </footer>
  );
}

