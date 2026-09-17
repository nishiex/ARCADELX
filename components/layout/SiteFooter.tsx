import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export default function SiteFooter() {
  return (
    <footer className="lx-footer" id="support">
      <div className="lx-footer-brand">
        <Image
          src="/arcadelx_logo.png"
          alt="ArcadeLX"
          width={160}
          height={49}
        />
        <p>
          Live the gaming experience.
          <br />
          Designed for a more active tomorrow.
        </p>
      </div>
      <div>
        <b>Quick links</b>
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#games">Games</a>
        <a href="#gallery">Gallery</a>
      </div>
      <div>
        <b>Support</b>
        <a href="#contact">Contact us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/refund-cancellation-policy">Refund & Cancellation</a>
        <a href="#support">FAQs</a>
        <a href="#support">Warranty</a>
        <a href="#support">Customer support</a>
      </div>
      <div className="lx-newsletter">
        <b>Stay updated</b>
        <p>Get the latest games, offers and news.</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            aria-label="Your email address"
            placeholder="Your email address"
          />
          <button aria-label="Subscribe">
            <ArrowRight size={19} weight="bold" />
          </button>
        </form>
      </div>
      <small className="lx-copyright">
       © 2026 ArcadeLX. All rights reserved.
      </small>
    </footer>
  );
}

