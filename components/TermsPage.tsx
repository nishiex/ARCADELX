"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowCircleDown,
  ArrowUpRight,
  Buildings,
  CheckCircle,
  CloudWarning,
  CreditCard,
  Database,
  EnvelopeSimple,
  HardDrive,
  Info,
  Lightning,
  Lock,
  MapPin,
  Monitor,
  Prohibit,
  Shield,
  ShieldWarning,
  Siren,
  Star,
  UserCircle,
  Warning,
  WifiX,
  Wrench,
  XCircle,
  ClipboardText,
} from "@phosphor-icons/react";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";

/* ── Sidebar nav data ────────────────────────────────────────────── */
const PARTS = [
  {
    label: "Part A — Consumers / Players",
    colorClass: "tc-part--a",
    sections: [
      { id: "tc2",  num: "02", label: "Eligibility" },
      { id: "tc3",  num: "03", label: "QR Payment & Session" },
      { id: "tc4",  num: "04", label: "Pricing" },
      { id: "tc5",  num: "05", label: "Refund & Failed Transactions" },
      { id: "tc6",  num: "06", label: "Technical Interruption" },
      { id: "tc7",  num: "07", label: "Safe Use of ARCADELX" },
      { id: "tc8",  num: "08", label: "Prohibited Use" },
    ],
  },
  {
    label: "Part B — Location / Venue Partners",
    colorClass: "tc-part--b",
    sections: [
      { id: "tc9",  num: "09", label: "Location Partners" },
      { id: "tc10", num: "10", label: "Installation & Location" },
      { id: "tc11", num: "11", label: "Ownership of Kiosk" },
      { id: "tc12", num: "12", label: "Kiosk Security & Care" },
      { id: "tc13", num: "13", label: "Revenue Sharing" },
      { id: "tc14", num: "14", label: "Partner Responsibilities" },
      { id: "tc15", num: "15", label: "Maintenance & Support" },
    ],
  },
  {
    label: "Part C — General Terms",
    colorClass: "tc-part--c",
    sections: [
      { id: "tc16", num: "16", label: "Intellectual Property" },
      { id: "tc17", num: "17", label: "Data & Privacy" },
      { id: "tc18", num: "18", label: "Third-Party Services" },
      { id: "tc19", num: "19", label: "Limitation of Liability" },
      { id: "tc20", num: "20", label: "Force Majeure" },
      { id: "tc21", num: "21", label: "Changes to These Terms" },
      { id: "tc22", num: "22", label: "Termination" },
      { id: "tc23", num: "23", label: "Governing Law" },
    ],
  },
];

const ALL_IDS = PARTS.flatMap((p) => p.sections.map((s) => s.id));

/* ── Mobile TOC ───────────────────────────────────────────────────── */
function MobileTOC() {
  const [open, setOpen] = useState(false);
  return (
    <div className="tc-mobile-contents">
      <button
        className="tc-mobile-toc-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>Table of Contents</span>
        <ArrowCircleDown
          size={18}
          weight="bold"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s ease" }}
        />
      </button>
      {open && (
        <nav className="tc-mobile-toc-nav" aria-label="Terms contents">
          {PARTS.map((part) => (
            <div key={part.label}>
              <div className="tc-mobile-toc-part-label">{part.label}</div>
              {part.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="tc-mobile-toc-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="tc-toc-num">{s.num}</span>
                  {s.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ── Desktop sidebar ──────────────────────────────────────────────── */
function DesktopSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="tc-sidebar" aria-label="Terms navigation">
      <p className="tc-sidebar-label">Contents</p>
      <nav>
        {PARTS.map((part) => (
          <div key={part.label}>
            <div className={`tc-sidebar-part ${part.colorClass}`}>{part.label}</div>
            {part.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`tc-sidebar-link${activeId === s.id ? " is-active" : ""}`}
              >
                <span className="tc-toc-num">{s.num}</span>
                {s.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

/* ── Main page ────────────────────────────────────────────────────── */
export default function TermsPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("tc2");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        gsap.from(".tc-hero-content > *", {
          y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.2,
        });
      }
      gsap.utils.toArray<HTMLElement>(".tc-reveal").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 20, opacity: reduce ? 1 : 0,
          duration: reduce ? 0 : 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });
      ALL_IDS.forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`, start: "top 40%", end: "bottom 40%",
          onEnter: () => setActiveId(id),
          onEnterBack: () => setActiveId(id),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main className="tc-site arcadelx-site" ref={root}>
      <SiteHeader />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="tc-hero" aria-label="Terms and Conditions hero">
        <div className="tc-hero-bg" aria-hidden="true">
          <div className="tc-hero-grid" />
          <div className="tc-hero-glow tc-hero-glow-1" />
          <div className="tc-hero-glow tc-hero-glow-2" />
          <div className="tc-hero-divider" />
        </div>
        <div className="tc-hero-content">
          <p className="lx-eyebrow"><span />Legal&nbsp;·&nbsp;Terms</p>
          <h1>Terms &amp; Conditions</h1>
          <p className="tc-hero-desc">
            The terms governing the use of ARCADELX gaming kiosks, games, payment
            services, digital platforms and associated services.
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <div className="tc-intro-wrap tc-reveal">
        <div className="tc-intro">
          <div className="tc-intro-text-wrap">
            <p className="tc-intro-text">
              These Terms &amp; Conditions govern the use of <strong>ARCADELX</strong> —
              including its motion-sensing gaming kiosks, related games, payment services,
              digital platforms and associated services — operated by{" "}
              <strong>Nilee Games and Future Technologies Pvt. Ltd.</strong> (referred to
              as "the Company", "Nilee Games", "we" or "us").
            </p>
            <p className="tc-intro-text">
              By accessing or using ARCADELX, making a payment for a gaming session, or
              installing / hosting an ARCADELX kiosk at a location, you agree to be bound
              by these Terms. If you do not agree, please do not use or host ARCADELX.
            </p>
          </div>
          <p className="tc-intro-date">Effective Date: 1 September 2025</p>
        </div>
      </div>

      {/* ── Mobile TOC ────────────────────────────────────────── */}
      <div className="tc-mobile-toc-wrap">
        <MobileTOC />
      </div>

      {/* ── Layout ────────────────────────────────────────────── */}
      <div className="tc-layout">
        <DesktopSidebar activeId={activeId} />

        <article className="tc-body" aria-label="Terms and conditions content">

          {/* ═══ PART A — CONSUMERS / PLAYERS ═══════════════════ */}
          <div className="tc-part-divider tc-reveal" id="partA">
            <div className="tc-part-badge">
              <span className="tc-part-label">Part A</span>
            </div>
            <h2 className="tc-part-title tc-part-title--a">
              Terms for Consumers&nbsp;/ Players
            </h2>
            <p className="tc-part-subtitle">Sections 2 – 8</p>
          </div>

          {/* S2 — Eligibility */}
          <section id="tc2" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">02.</span> Eligibility</h2>
            <p>To use ARCADELX gaming kiosks, users must meet the following requirements:</p>
            <ol className="tc-eligibility-list">
              {[
                "Meet the minimum age requirements displayed at the particular ARCADELX location or game.",
                "Children and minors should use ARCADELX under appropriate adult supervision where required.",
                "Users must follow all kiosk safety instructions provided at the location or displayed on-screen.",
                "Users must not use ARCADELX if they are unable to safely participate in physical movement-based gameplay.",
              ].map((item, i) => (
                <li key={i} className="tc-elig-item">
                  <span className="tc-elig-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* S3 — QR Payment */}
          <section id="tc3" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">03.</span> QR Payment &amp; Gaming Session</h2>
            <p>
              ARCADELX operates on a QR-based payment model. The gaming session is activated
              upon successful payment confirmation.
            </p>
            <div className="tc-steps">
              {[
                { num: "01", title: "Scan QR Code", desc: "Scan the QR code displayed on the ARCADELX kiosk." },
                { num: "02", title: "Review Session Fee", desc: "Review the applicable session fee displayed before payment." },
                { num: "03", title: "Complete Payment", desc: "Complete payment through the supported payment method." },
                { num: "04", title: "Session Begins", desc: "Your gaming session begins after successful payment confirmation." },
                { num: "05", title: "Session Conditions", desc: "Session duration, game selection and other applicable conditions may be displayed on-screen or at the location." },
              ].map((step) => (
                <div key={step.num} className="tc-step">
                  <div className="tc-step-num">{step.num}</div>
                  <div className="tc-step-body">
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>Payment for one session applies only to that session unless otherwise specified.</p>
            <div className="tc-warning-card">
              <Warning size={22} weight="duotone" className="tc-warning-icon" />
              <div>
                <p className="tc-warning-title">Do Not Make Duplicate Payments</p>
                <p className="tc-warning-text">
                  If payment confirmation is delayed, users should first check the displayed
                  payment status on the kiosk or contact support before attempting another payment.
                </p>
              </div>
            </div>
          </section>

          {/* S4 — Pricing */}
          <section id="tc4" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">04.</span> Pricing</h2>
            <p>
              The applicable price for each ARCADELX gaming session is displayed on the kiosk
              before payment is made. Prices may vary depending on:
            </p>
            <div className="tc-price-chips">
              {["Location", "Game", "Promotional Offer", "Session Duration"].map((c) => (
                <span key={c} className="tc-price-chip">{c}</span>
              ))}
            </div>
            <div className="tc-info-notice">
              <Info size={18} weight="duotone" />
              <p>
                Prices displayed are inclusive of or subject to applicable taxes as noted at
                the point of payment. Nilee Games may modify pricing, offers or session
                structures at any time. The applicable price is always displayed before
                payment is completed.
              </p>
            </div>
          </section>

          {/* S5 — Refund */}
          <section id="tc5" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">05.</span> Refund &amp; Failed Transactions</h2>
            <div className="tc-refund-grid">
              <div className="tc-refund-col tc-refund-col--issue">
                <p className="tc-refund-col-label">Payment Issue</p>
                <p>
                  If money is deducted from your account but the gaming session is not activated
                  due to a technical failure or payment-system error, please report the issue promptly.
                </p>
                <p>
                  Transaction verification may be carried out before an eligible refund is
                  processed. Approved refunds are normally returned to the original payment method.
                </p>
                <p>Contact: <a href="mailto:info@nileegames.com" className="tc-contact-inline">info@nileegames.com</a></p>
              </div>
              <div className="tc-refund-col tc-refund-col--rules">
                <p className="tc-refund-col-label">Refund Rules</p>
                <p>
                  Successfully completed gaming sessions are <strong>generally non-refundable</strong>.
                  Exceptions may apply under applicable law or where specifically approved.
                </p>
                <p>The following situations are <strong>generally not refundable</strong>:</p>
                <ul className="tc-nope-list">
                  {[
                    "Change of mind after starting a session",
                    "Voluntary termination of the session by the user",
                    "Failure to follow kiosk instructions",
                    "Leaving the kiosk or location before completing the session",
                    "User behaviour causing interruption or termination",
                  ].map((item) => (
                    <li key={item} className="tc-nope-item">
                      <XCircle size={15} weight="duotone" className="tc-nope-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tc-contact-card">
              <EnvelopeSimple size={28} weight="duotone" className="tc-contact-icon" />
              <div>
                <p className="tc-contact-label">Refund &amp; Transaction Support</p>
                <a href="mailto:info@nileegames.com" className="tc-contact-email">
                  info@nileegames.com
                </a>
              </div>
            </div>
          </section>

          {/* S6 — Technical Interruption */}
          <section id="tc6" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">06.</span> Technical Interruption</h2>
            <p>
              ARCADELX is an internet-connected and technology-dependent platform. Interruptions
              may occasionally occur due to circumstances including:
            </p>
            <div className="tc-tech-grid">
              {[
                { icon: <WifiX size={15} weight="duotone" />, label: "Internet / network failure" },
                { icon: <Lightning size={15} weight="duotone" />, label: "Power failure" },
                { icon: <HardDrive size={15} weight="duotone" />, label: "Hardware malfunction" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Software error" },
                { icon: <CreditCard size={15} weight="duotone" />, label: "Payment gateway issues" },
                { icon: <Wrench size={15} weight="duotone" />, label: "Scheduled maintenance" },
                { icon: <CloudWarning size={15} weight="duotone" />, label: "Server / cloud interruption" },
                { icon: <ShieldWarning size={15} weight="duotone" />, label: "Other circumstances beyond reasonable control" },
              ].map(({ icon, label }) => (
                <div key={label} className="tc-tech-item">
                  <span className="tc-tech-item-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="tc-resolution-card">
              <p className="tc-resolution-label">Resolution</p>
              <p>
                If a technical failure prevents a paid session from being delivered, Nilee Games
                may, after verification, provide an appropriate resolution such as:
              </p>
              <div className="tc-resolution-chips">
                {["Refund", "Replacement Session", "Other Appropriate Remedy"].map((c) => (
                  <span key={c} className="tc-resolution-chip">{c}</span>
                ))}
              </div>
            </div>
          </section>

          {/* S7 — Safe Use */}
          <section id="tc7" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">07.</span> Safe Use of ARCADELX</h2>
            <p>ARCADELX involves physical, movement-based gameplay. Users must follow all safety guidelines:</p>
            <div className="tc-safety-grid">
              {[
                { icon: <MapPin size={17} weight="duotone" />, label: "Maintain sufficient space around you before starting" },
                { icon: <Monitor size={17} weight="duotone" />, label: "Follow all on-screen instructions" },
                { icon: <UserCircle size={17} weight="duotone" />, label: "Follow staff and location-partner instructions" },
                { icon: <Prohibit size={17} weight="duotone" />, label: "Avoid running outside the designated play area" },
                { icon: <ShieldWarning size={17} weight="duotone" />, label: "Keep bags, objects and bystanders away from the playing area" },
                { icon: <Shield size={17} weight="duotone" />, label: "Do not touch, move or damage the kiosk or camera" },
                { icon: <Siren size={17} weight="duotone" />, label: "Stop playing immediately if feeling uncomfortable, dizzy or unwell" },
              ].map(({ icon, label }) => (
                <div key={label} className="tc-safety-item">
                  <span className="tc-safety-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="tc-safety-note">
              Users are responsible for using the kiosk responsibly and following all safety
              instructions. Nilee Games and the location partner are not liable for injuries
              resulting from failure to follow safety guidelines.
            </div>
          </section>

          {/* S8 — Prohibited Use */}
          <section id="tc8" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">08.</span> Prohibited Use</h2>
            <p>Users must not engage in the following activities:</p>
            <div className="tc-prohibited-grid">
              {[
                "Damage, tamper with or modify the kiosk",
                "Interfere with the camera, sensors, cables, software or equipment",
                "Bypass or manipulate the payment system",
                "Attempt unauthorized access to software, servers or systems",
                "Engage in abusive, threatening or inappropriate behaviour",
                "Conduct activities that may damage equipment or surrounding property",
              ].map((item) => (
                <div key={item} className="tc-prohibited-item">
                  <Prohibit size={15} weight="duotone" className="tc-prohibited-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="tc-prohibited-note">
              <Warning size={18} weight="duotone" className="tc-prohibited-note-icon" />
              <p>
                The Company may terminate a session where misuse, tampering or unsafe behaviour
                is detected.
              </p>
            </div>
          </section>

          {/* ═══ PART B — LOCATION / VENUE PARTNERS ═════════════ */}
          <div className="tc-part-divider tc-reveal" id="partB">
            <div className="tc-part-badge">
              <span className="tc-part-label">Part B</span>
            </div>
            <h2 className="tc-part-title tc-part-title--b">
              Terms for Location&nbsp;/ Venue Partners
            </h2>
            <p className="tc-part-subtitle">Sections 9 – 15</p>
          </div>

          {/* S9 — Location Partners */}
          <section id="tc9" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">09.</span> Location Partners</h2>
            <p>
              Nilee Games partners with a variety of commercial locations to deploy ARCADELX
              kiosks. Approved partner location types include:
            </p>
            <div className="tc-venue-chips">
              {[
                "Malls", "Restaurants", "Hotels", "Schools", "Corporate Offices",
                "Gyms", "Game Zones", "Entertainment Centres", "Events & Exhibitions",
                "Other Approved Commercial Locations",
              ].map((v) => (
                <span key={v} className="tc-venue-chip">{v}</span>
              ))}
            </div>
            <p>
              Location Partners are bound by both these Terms and any applicable commercial
              or partner agreement entered into with Nilee Games.
            </p>
          </section>

          {/* S10 — Installation */}
          <section id="tc10" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">10.</span> Installation &amp; Location</h2>
            <p>
              Location Partners must ensure the following for successful and safe kiosk
              operation. Requirements may vary by ARCADELX model:
            </p>
            <div className="tc-install-grid">
              {[
                { icon: <MapPin size={16} weight="duotone" />, label: "Suitable installation location as approved by Nilee Games" },
                { icon: <Lightning size={16} weight="duotone" />, label: "Reasonable and stable electricity access" },
                { icon: <WifiX size={16} weight="duotone" />, label: "Adequate internet connectivity" },
                { icon: <Buildings size={16} weight="duotone" />, label: "Sufficient operating space for safe user movement" },
                { icon: <Shield size={16} weight="duotone" />, label: "A safe and secure environment" },
                { icon: <Prohibit size={16} weight="duotone" />, label: "No relocation of the kiosk without prior written approval" },
                { icon: <Wrench size={16} weight="duotone" />, label: "No modification, dismantling, opening or repair without authorization" },
              ].map(({ icon, label }) => (
                <div key={label} className="tc-install-item">
                  <span className="tc-install-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* S11 — Ownership */}
          <section id="tc11" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">11.</span> Ownership of Kiosk</h2>
            <div className="tc-ownership-card">
              <p className="tc-ownership-card-label">Unless Expressly Agreed Otherwise in Writing</p>
              <p>
                The ARCADELX kiosk, hardware and all associated equipment remain the property
                of Nilee Games and Future Technologies Pvt. Ltd. and/or the applicable owner.
                The Location Partner receives agreed hosting or use rights only.
              </p>
              <ul className="tc-ownership-ul">
                {[
                  "Partners cannot sell, lease, transfer, pledge, mortgage or dispose of the kiosk.",
                  "Partners cannot remove branding, serial numbers, kiosk IDs or security labels from the kiosk.",
                ].map((item) => (
                  <li key={item} className="tc-ownership-item">
                    <XCircle size={15} weight="duotone" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* S12 — Kiosk Security */}
          <section id="tc12" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">12.</span> Kiosk Security &amp; Care</h2>
            <p>
              Location Partners must promptly inform Nilee Games of any incident affecting
              the kiosk, including:
            </p>
            <div className="tc-incident-grid">
              {[
                { icon: <ShieldWarning size={15} weight="duotone" />, label: "Physical damage" },
                { icon: <Warning size={15} weight="duotone" />, label: "Theft or attempted theft" },
                { icon: <Warning size={15} weight="duotone" />, label: "Tampering" },
                { icon: <HardDrive size={15} weight="duotone" />, label: "Hardware malfunction" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Display damage" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Camera or sensor damage" },
                { icon: <Lightning size={15} weight="duotone" />, label: "Electrical issues" },
                { icon: <Lock size={15} weight="duotone" />, label: "Unauthorized access" },
                { icon: <Siren size={15} weight="duotone" />, label: "Any other incident affecting the kiosk" },
              ].map(({ icon, label }) => (
                <div key={label} className="tc-incident-item">
                  <span className="tc-incident-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p>
              Where damage, loss or costs result from a partner's failure to maintain reasonable
              security or care of the kiosk, the partner may be responsible for applicable
              costs as provided in the partner agreement.
            </p>
          </section>

          {/* S13 — Revenue Sharing */}
          <section id="tc13" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">13.</span> Revenue Sharing / Commercial Terms</h2>
            <div className="tc-commercial-card">
              <p>
                The revenue-sharing percentage, settlement frequency, payment procedures and
                other commercial terms applicable to Location Partners are set out in the
                applicable commercial or partner agreement.
              </p>
              <p>Applicable commercial terms may also address:</p>
              <ul>
                {[
                  "Payment gateway charges",
                  "Applicable taxes",
                  "Refunds and their impact on settlement",
                  "Other applicable deductions",
                  "Security deposit, rental or other commercial consideration",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tc-commercial-important">
              <ClipboardText size={20} weight="duotone" />
              <p>
                <strong>Important:</strong> Where there is a conflict between these Terms
                and the applicable commercial or partner agreement regarding commercial
                settlement terms, the commercial agreement shall prevail.
              </p>
            </div>
          </section>

          {/* S14 — Partner Responsibilities */}
          <section id="tc14" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">14.</span> Partner Responsibilities</h2>
            <p>Location Partners are responsible for the following:</p>
            <ul className="tc-checklist">
              {[
                "Providing reasonable kiosk access for installation, maintenance and support",
                "Maintaining a suitable operating environment for the kiosk",
                "Providing reasonable supervision and security at the location",
                "Not making unauthorized modifications to the kiosk or its software",
                "Reporting operational issues promptly to Nilee Games",
                "Not interfering with transaction records or session data",
                "Not manipulating gaming sessions or payment processes",
                "Cooperating with maintenance and technical support activities",
                "Compliance with all applicable laws and regulations",
              ].map((item) => (
                <li key={item} className="tc-check-item">
                  <CheckCircle size={15} weight="duotone" className="tc-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* S15 — Maintenance & Support */}
          <section id="tc15" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">15.</span> Maintenance &amp; Technical Support</h2>
            <div className="tc-support-block">
              <p>
                Technical support, software updates, maintenance and troubleshooting services
                may be provided by Nilee Games according to the applicable commercial or
                service agreement with the Location Partner.
              </p>
              <p>
                Nilee Games may remotely monitor system health, connectivity, software status
                and operational information for the purposes of maintenance, security and
                service improvement. Partners are deemed to consent to such monitoring by
                virtue of hosting an ARCADELX kiosk.
              </p>
            </div>
          </section>

          {/* ═══ PART C — GENERAL TERMS ══════════════════════════ */}
          <div className="tc-part-divider tc-reveal" id="partC">
            <div className="tc-part-badge">
              <span className="tc-part-label">Part C</span>
            </div>
            <h2 className="tc-part-title tc-part-title--c">General Terms</h2>
            <p className="tc-part-subtitle">Sections 16 – 23</p>
          </div>

          {/* S16 — IP */}
          <section id="tc16" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">16.</span> Intellectual Property</h2>
            <p>
              All intellectual property rights in and to ARCADELX belong to Nilee Games
              and Future Technologies Pvt. Ltd. and/or its licensors:
            </p>
            <div className="tc-ip-chips">
              {["ARCADELX Branding", "Logos", "Designs", "Software", "Games", "Graphics",
                "Animations", "Technology", "Content", "Documentation", "Associated IP"].map((c) => (
                <span key={c} className="tc-ip-chip">{c}</span>
              ))}
            </div>
            <p>
              No user or Location Partner receives any ownership rights in ARCADELX intellectual
              property merely by using, accessing or hosting an ARCADELX kiosk.
            </p>
            <p>
              Unauthorized copying, reproduction, modification, reverse engineering or commercial
              exploitation of any ARCADELX intellectual property is strictly prohibited.
            </p>
          </section>

          {/* S17 — Data & Privacy */}
          <section id="tc17" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">17.</span> Data &amp; Privacy</h2>
            <p>Information may be processed in connection with the use of ARCADELX for:</p>
            <div className="tc-tech-grid">
              {[
                { icon: <CreditCard size={15} weight="duotone" />, label: "Payment processing" },
                { icon: <CheckCircle size={15} weight="duotone" />, label: "Transaction verification" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Gaming session management" },
                { icon: <Shield size={15} weight="duotone" />, label: "System security" },
                { icon: <EnvelopeSimple size={15} weight="duotone" />, label: "Customer support" },
                { icon: <Database size={15} weight="duotone" />, label: "Operational analytics" },
                { icon: <Star size={15} weight="duotone" />, label: "Service improvement" },
              ].map(({ icon, label }) => (
                <div key={label} className="tc-tech-item">
                  <span className="tc-tech-item-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p>
              The collection, use and processing of personal data is governed by the ARCADELX
              Privacy Policy. Users are encouraged to read the Privacy Policy to understand
              how their information is handled.
            </p>
            <a href="/privacy-policy" className="tc-privacy-cta">
              Read ARCADELX Privacy Policy <ArrowUpRight size={14} weight="bold" />
            </a>
          </section>

          {/* S18 — Third-Party Services */}
          <section id="tc18" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">18.</span> Third-Party Services</h2>
            <p>ARCADELX may rely on third-party infrastructure and service providers, including:</p>
            <div className="tc-price-chips">
              {["Payment Gateways", "Cloud Infrastructure", "Internet / Network Providers", "Other Technology Providers"].map((c) => (
                <span key={c} className="tc-price-chip">{c}</span>
              ))}
            </div>
            <div className="tc-info-notice">
              <Info size={18} weight="duotone" />
              <p>
                Nilee Games is not liable for delays, failures or errors that are exclusively
                caused by third-party systems or providers beyond its reasonable control.
              </p>
            </div>
          </section>

          {/* S19 — Limitation of Liability */}
          <section id="tc19" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">19.</span> Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Nilee Games shall not be liable for
              losses or damage arising from:
            </p>
            <ul className="tc-liability-list">
              {[
                "Misuse of the kiosk by any user",
                "Failure to follow safety instructions",
                "Unauthorized modification or tampering by any party",
                "User negligence",
                "Network or power interruptions",
                "Third-party payment gateway failures",
                "Events beyond reasonable control",
              ].map((item) => (
                <li key={item} className="tc-liability-item">
                  <Warning size={15} weight="duotone" className="tc-liability-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="tc-liability-note">
              Nothing in these Terms excludes or limits any liability that cannot be lawfully
              excluded or limited under applicable law.
            </div>
          </section>

          {/* S20 — Force Majeure */}
          <section id="tc20" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">20.</span> Force Majeure</h2>
            <p>
              Nilee Games shall not be liable for failure or delay in performing its obligations
              where such failure or delay is caused by events beyond its reasonable control, including:
            </p>
            <div className="tc-fm-grid">
              {[
                "Natural disasters", "Fire", "Flood", "Government restrictions",
                "Strikes", "Infrastructure failures", "Internet outages",
                "Power failures", "Cyber incidents", "Pandemics", "Other unforeseen events",
              ].map((item) => (
                <div key={item} className="tc-fm-item">{item}</div>
              ))}
            </div>
          </section>

          {/* S21 — Changes */}
          <section id="tc21" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">21.</span> Changes to These Terms</h2>
            <p>Nilee Games may update or modify these Terms from time to time due to changes in:</p>
            <div className="tc-changes-list">
              {["Products", "Services", "Technology", "Legal Requirements", "Business Practices"].map((c) => (
                <span key={c} className="tc-changes-chip">{c}</span>
              ))}
            </div>
            <p>
              Updated Terms will be published on the ARCADELX website or notified through
              appropriate channels. The effective date of the updated Terms will be indicated.
              Continued use of ARCADELX after updated Terms are published constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          {/* S22 — Termination */}
          <section id="tc22" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">22.</span> Termination</h2>
            <p>
              Nilee Games may suspend or terminate access to ARCADELX where any of the
              following occur:
            </p>
            <div className="tc-term-grid">
              {[
                "Fraudulent activity",
                "Payment manipulation",
                "Unauthorized system access",
                "Equipment tampering",
                "Misuse of ARCADELX",
                "Material breach of these Terms",
                "Safety, security or legal risk",
              ].map((item) => (
                <div key={item} className="tc-term-item">
                  <XCircle size={15} weight="duotone" className="tc-term-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Termination of Location Partner access and any related commercial consequences
              are additionally governed by the applicable Partner Agreement.
            </p>
          </section>

          {/* S23 — Governing Law */}
          <section id="tc23" className="tc-section tc-reveal">
            <h2><span className="tc-sec-num">23.</span> Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising out of or
              in connection with these Terms shall be subject to:
            </p>
            <div className="tc-gov-grid">
              <div className="tc-gov-card">
                <p className="tc-gov-card-label">Governing Law</p>
                <p className="tc-gov-card-value">India</p>
              </div>
              <div className="tc-gov-card">
                <p className="tc-gov-card-label">Jurisdiction</p>
                <p className="tc-gov-card-value">Mumbai</p>
                <p className="tc-gov-card-sub">Maharashtra, India — Competent Courts, subject to applicable law</p>
              </div>
            </div>
          </section>

        </article>
      </div>

      {/* ── Legal Contact ─────────────────────────────────────── */}
      <div className="tc-legal-support tc-reveal">
        <h2>Questions About These Terms?</h2>
        <p>
          If you have any questions regarding these Terms &amp; Conditions, please contact us:
        </p>
        <a href="mailto:info@nileegames.com" className="tc-contact-email" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <EnvelopeSimple size={18} weight="duotone" />
          info@nileegames.com
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}

