"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Eye,
  EyeSlash,
  Camera,
  CameraSlash,
  CreditCard,
  EnvelopeSimple,
  ShieldWarning,
  Lock,
  ArrowCircleDown,
  Storefront,
  ArrowRight,
  CheckCircle,
  XCircle,
  Info,
  Warning,
  Person,
  Globe,
  Database,
  Clock,
  Fingerprint,
  ArrowUpRight,
} from "@phosphor-icons/react";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";

const NAV_SECTIONS = [
  { id: "pp1",  label: "About ARCADELX" },
  { id: "pp2",  label: "Important Privacy Statement" },
  { id: "pp3",  label: "Information We May Collect" },
  { id: "pp4",  label: "Information We Do Not Collect" },
  { id: "pp5",  label: "How We Use Information" },
  { id: "pp6",  label: "Motion-Sensing Data" },
  { id: "pp7",  label: "Payment Information" },
  { id: "pp8",  label: "Sharing of Information" },
  { id: "pp9",  label: "Partner / Venue Information" },
  { id: "pp10", label: "Data Security" },
  { id: "pp11", label: "Data Retention" },
  { id: "pp12", label: "Children and Minors" },
  { id: "pp13", label: "Cookies and Website Data" },
  { id: "pp14", label: "Third-Party Links" },
  { id: "pp15", label: "Withdrawal of Consent" },
  { id: "pp16", label: "Grievance / Privacy Questions" },
  { id: "pp17", label: "Changes to This Policy" },
];

function MobileTOC() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pp-mobile-contents">
      <button
        className="pp-mobile-toc-toggle"
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
        <nav className="pp-mobile-toc-nav" aria-label="Privacy policy contents">
          {NAV_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="pp-mobile-toc-link"
              onClick={() => setOpen(false)}
            >
              <span className="pp-toc-num">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

function DesktopSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="pp-sidebar" aria-label="Privacy policy navigation">
      <p className="pp-sidebar-label">Contents</p>
      <nav>
        {NAV_SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`pp-sidebar-link${activeId === s.id ? " is-active" : ""}`}
          >
            <span className="pp-toc-num">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default function PrivacyPolicyPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("pp1");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reduce) {
        gsap.from(".pp-hero-content > *", {
          y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.2,
        });
        gsap.from(".pp-highlight-card", {
          y: 30, opacity: 0, scale: 0.98, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".pp-highlight-card", start: "top 85%", once: true },
        });
      }

      gsap.utils.toArray<HTMLElement>(".pp-reveal").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 20, opacity: reduce ? 1 : 0,
          duration: reduce ? 0 : 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });

      NAV_SECTIONS.forEach(({ id }) => {
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
    <main className="pp-site arcadelx-site" ref={root}>
      <SiteHeader />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pp-hero" aria-label="Privacy Policy hero">
        <div className="pp-hero-bg" aria-hidden="true">
          <div className="pp-hero-grid" />
          <div className="pp-hero-glow pp-hero-glow-1" />
          <div className="pp-hero-glow pp-hero-glow-2" />
          <div className="pp-hero-motion-lines" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`pp-motion-line pp-motion-line-${i + 1}`} />
            ))}
          </div>
          <div className="pp-hero-divider" />
        </div>
        <div className="pp-hero-content">
          <p className="lx-eyebrow">
            <span />Legal&nbsp;·&nbsp;Privacy
          </p>
          <h1>Privacy Policy</h1>
          <p className="pp-hero-desc">
            How ARCADELX collects, uses, protects, and handles information
            across its gaming kiosks and digital services.
          </p>
        </div>
      </section>

      {/* ── Privacy Highlight ──────────────────────────────── */}
      <div className="pp-highlight-wrap">
        <div className="pp-highlight-card">
          <div className="pp-highlight-icon-wrap" aria-hidden="true">
            <CameraSlash size={42} weight="duotone" className="pp-highlight-icon" />
          </div>
          <div className="pp-highlight-body">
            <p className="pp-highlight-eyebrow">Most Important Privacy Statement</p>
            <h2 className="pp-highlight-heading">
              ARCADELX Does Not Capture or Store User Images or Photographs.
            </h2>
            <p className="pp-highlight-desc">
              The camera and sensor technology in ARCADELX kiosks is designed
              exclusively for <strong>real-time motion sensing and gameplay
              interaction</strong>. ARCADELX does not use this technology as a
              photography, CCTV, or video-recording system. Player images and
              video recordings are not intentionally captured, recorded, saved,
              or stored.
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────────────── */}
      <div className="pp-intro-wrap pp-reveal">
        <div className="pp-intro">
          <div className="pp-intro-text-wrap">
            <p className="pp-intro-text">
              <strong>Nilee Games and Future Technologies Pvt. Ltd.</strong> respects
              user privacy and is committed to protecting information processed
              through <strong>ARCADELX</strong>, its motion-sensing gaming kiosk
              and associated digital services. This Privacy Policy explains what
              information may be collected, why it is collected, how it is used,
              and the choices available to users.
            </p>
            <p className="pp-intro-text">
              This policy is issued in accordance with applicable Indian
              data-protection law, including the{" "}
              <strong>Digital Personal Data Protection Act, 2023</strong> and the{" "}
              <strong>Digital Personal Data Protection Rules, 2025</strong>.
            </p>
          </div>
          <p className="pp-intro-date">Effective Date: 1 September 2025</p>
        </div>
      </div>

      {/* ── Mobile TOC ─────────────────────────────────────── */}
      <div className="pp-mobile-toc-wrap">
        <MobileTOC />
      </div>

      {/* ── Layout ─────────────────────────────────────────── */}
      <div className="pp-layout">
        <DesktopSidebar activeId={activeId} />

        <article className="pp-body" aria-label="Privacy policy content">

          {/* ── Section 1 – About ─────────────────────────── */}
          <section id="pp1" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">01.</span> About ARCADELX</h2>
            <p>
              ARCADELX is a <strong>motion-sensing gaming and entertainment
              platform</strong> developed and operated by Nilee Games and Future
              Technologies Pvt. Ltd. Users interact with ARCADELX through physical
              kiosks, QR-based payment systems, games, and associated digital
              services deployed at partner venues including malls, schools,
              offices, hotels, gyms, and entertainment centres.
            </p>
            <p>
              This Privacy Policy applies to all users who interact with an
              ARCADELX kiosk or access related digital services.
            </p>
          </section>

          {/* ── Section 2 – Privacy Statement ─────────────── */}
          <section id="pp2" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">02.</span> Important Privacy Statement</h2>
            <div className="pp-statement-card">
              <div className="pp-statement-header">
                <EyeSlash size={28} weight="duotone" className="pp-statement-icon" />
                <strong>ARCADELX Does Not Capture or Store User Images or Photographs</strong>
              </div>
              <ul className="pp-statement-list">
                <li>
                  <CheckCircle size={15} weight="duotone" className="pp-check-icon" />
                  The camera/sensor technology is intended for <strong>real-time
                  motion sensing</strong> to enable gameplay interaction.
                </li>
                <li>
                  <CheckCircle size={15} weight="duotone" className="pp-check-icon" />
                  ARCADELX does not intentionally capture, record, save, or store
                  player photographs or video recordings.
                </li>
                <li>
                  <CheckCircle size={15} weight="duotone" className="pp-check-icon" />
                  Motion information may be temporarily processed during gameplay
                  to enable game mechanics.
                </li>
                <li>
                  <CheckCircle size={15} weight="duotone" className="pp-check-icon" />
                  The camera is <strong>not used</strong> as a photography, CCTV,
                  or video-recording system.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 3 – What We Collect ───────────────── */}
          <section id="pp3" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">03.</span> Information We May Collect</h2>
            <p>
              ARCADELX collects the minimum information necessary to operate its
              gaming kiosks and associated services. The two primary categories are:
            </p>

            <div className="pp-collect-grid">
              {/* Gaming data */}
              <div className="pp-collect-card pp-reveal">
                <div className="pp-collect-header pp-collect-header--cyan">
                  <Database size={20} weight="duotone" />
                  <strong>Gaming / Session Data</strong>
                </div>
                <p>Information generated during a gaming session, used to operate, maintain, and improve ARCADELX:</p>
                <ul>
                  {[
                    "Kiosk ID",
                    "Game selected",
                    "Game / Session ID",
                    "Session start and end time",
                    "Session duration",
                    "Game score",
                    "Game performance / statistics",
                    "Game completion information",
                    "Number of sessions",
                    "Gameplay-related events",
                    "Technical / gameplay status",
                  ].map((item) => (
                    <li key={item}>
                      <ArrowRight size={11} weight="bold" className="pp-list-arrow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Transaction data */}
              <div className="pp-collect-card pp-reveal">
                <div className="pp-collect-header pp-collect-header--blue">
                  <CreditCard size={20} weight="duotone" />
                  <strong>Transaction Data</strong>
                </div>
                <p>Information related to payments made at ARCADELX kiosks:</p>
                <ul>
                  {[
                    "Transaction ID",
                    "Payment status",
                    "Payment amount",
                    "Date and time of transaction",
                    "Kiosk / location ID",
                    "Order / session reference",
                    "Payment method or payment-provider reference",
                    "Refund status where applicable",
                  ].map((item) => (
                    <li key={item}>
                      <ArrowRight size={11} weight="bold" className="pp-list-arrow" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pp-collect-notice">
                  <Lock size={14} weight="duotone" />
                  <span>ARCADELX does not store complete debit-card or credit-card details, UPI PINs, CVVs, or banking credentials.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4 – Do Not Collect ────────────────── */}
          <section id="pp4" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">04.</span> Information We Do Not Collect Through ARCADELX</h2>
            <p>
              ARCADELX is designed with privacy in mind. The following categories
              of sensitive information are <strong>not collected</strong>:
            </p>
            <div className="pp-nocollect-grid">
              {[
                { icon: <Camera size={16} weight="duotone" />, label: "Player photographs" },
                { icon: <Eye size={16} weight="duotone" />, label: "Player video recordings" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Facial-recognition profiles" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Face biometric templates" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Fingerprints" },
                { icon: <Info size={16} weight="duotone" />, label: "Voice recordings" },
                { icon: <Info size={16} weight="duotone" />, label: "Aadhaar number" },
                { icon: <Info size={16} weight="duotone" />, label: "PAN number" },
                { icon: <Lock size={16} weight="duotone" />, label: "Bank account passwords" },
                { icon: <Lock size={16} weight="duotone" />, label: "UPI PIN" },
                { icon: <CreditCard size={16} weight="duotone" />, label: "Credit / debit card CVV" },
                { icon: <ShieldWarning size={16} weight="duotone" />, label: "Other sensitive authentication credentials" },
              ].map(({ icon, label }) => (
                <div key={label} className="pp-nocollect-item">
                  <span className="pp-nocollect-x">
                    <XCircle size={15} weight="duotone" />
                  </span>
                  <span className="pp-nocollect-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5 – How We Use ─────────────────────── */}
          <section id="pp5" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">05.</span> How We Use Information</h2>

            <div className="pp-use-grid">
              <div className="pp-use-card pp-use-card--cyan pp-reveal">
                <div className="pp-use-card-header">
                  <Person size={20} weight="duotone" />
                  <strong>Gameplay</strong>
                </div>
                <ul>
                  {[
                    "Detect player movement",
                    "Enable motion-based gameplay",
                    "Start and manage gaming sessions",
                    "Record scores and game results",
                    "Maintain game progress where applicable",
                  ].map((item) => (
                    <li key={item}><ArrowRight size={11} weight="bold" className="pp-list-arrow" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pp-use-card pp-use-card--blue pp-reveal">
                <div className="pp-use-card-header">
                  <CreditCard size={20} weight="duotone" />
                  <strong>Payment Processing</strong>
                </div>
                <ul>
                  {[
                    "Confirm payments",
                    "Activate paid gaming sessions",
                    "Verify failed or pending transactions",
                    "Process eligible refunds",
                    "Resolve payment-related complaints",
                  ].map((item) => (
                    <li key={item}><ArrowRight size={11} weight="bold" className="pp-list-arrow" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pp-use-card pp-use-card--pink pp-reveal">
                <div className="pp-use-card-header">
                  <Database size={20} weight="duotone" />
                  <strong>Operations</strong>
                </div>
                <ul>
                  {[
                    "Monitor kiosk status",
                    "Detect technical problems",
                    "Maintain the ARCADELX platform",
                    "Provide customer support",
                    "Prevent fraudulent transactions",
                    "Maintain transaction and operational records",
                  ].map((item) => (
                    <li key={item}><ArrowRight size={11} weight="bold" className="pp-list-arrow" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pp-use-card pp-use-card--purple pp-reveal">
                <div className="pp-use-card-header">
                  <Globe size={20} weight="duotone" />
                  <strong>Analytics &amp; Improvement</strong>
                </div>
                <p>
                  Aggregated or appropriately de-identified information may be
                  used to understand:
                </p>
                <ul>
                  {[
                    "Games played",
                    "Session frequency",
                    "Game performance",
                    "Kiosk usage",
                    "Technical performance",
                    "General usage patterns",
                  ].map((item) => (
                    <li key={item}><ArrowRight size={11} weight="bold" className="pp-list-arrow" />{item}</li>
                  ))}
                </ul>
                <p className="pp-use-note">This helps improve ARCADELX games, hardware, software, and services.</p>
              </div>
            </div>
          </section>

          {/* ── Section 6 – Motion-Sensing ─────────────────── */}
          <section id="pp6" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">06.</span> Motion-Sensing Data</h2>
            <div className="pp-motion-card">
              <div className="pp-motion-visual" aria-hidden="true">
                <div className="pp-motion-ring pp-motion-ring-1" />
                <div className="pp-motion-ring pp-motion-ring-2" />
                <div className="pp-motion-ring pp-motion-ring-3" />
                <Person size={36} weight="duotone" className="pp-motion-person" />
              </div>
              <div className="pp-motion-body">
                <p>
                  ARCADELX uses <strong>motion-sensing technology</strong> that
                  enables players to interact through body movement. Depending
                  on kiosk configuration, the system may temporarily process
                  information relating to body position, movement, or tracking
                  points.
                </p>
                <ul className="pp-motion-list">
                  <li><CheckCircle size={14} weight="duotone" className="pp-check-icon" />Such information is used solely to operate the game.</li>
                  <li><CheckCircle size={14} weight="duotone" className="pp-check-icon" />It is not intended to identify an individual player.</li>
                  <li><EyeSlash size={14} weight="duotone" className="pp-no-icon" />The functionality is <strong>not</strong> used to create facial-recognition profiles or identify individuals.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7 – Payment ────────────────────────── */}
          <section id="pp7" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">07.</span> Payment Information</h2>
            <div className="pp-payment-card pp-reveal">
              <div className="pp-payment-header">
                <CreditCard size={22} weight="duotone" />
                <strong>Secure Payment Handling</strong>
              </div>
              <p>
                Payments through ARCADELX kiosks are processed by authorized
                third-party payment gateways. Nilee Games generally receives
                transaction and payment-status information required to:
              </p>
              <div className="pp-payment-use-grid">
                {["Confirm transactions", "Activate gaming sessions", "Reconcile payments", "Handle refunds", "Provide customer support"].map((item) => (
                  <div key={item} className="pp-payment-use-item">
                    <CheckCircle size={13} weight="duotone" className="pp-check-icon" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="pp-payment-notice">
                <Lock size={16} weight="duotone" />
                <span>
                  Sensitive payment credentials such as <strong>UPI PIN</strong>,{" "}
                  <strong>CVV</strong>, and <strong>banking passwords</strong> are
                  not collected or stored by ARCADELX.
                </span>
              </div>
            </div>
          </section>

          {/* ── Section 8 – Sharing ────────────────────────── */}
          <section id="pp8" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">08.</span> Sharing of Information</h2>
            <div className="pp-sharing-notice pp-reveal">
              <ShieldCheck size={20} weight="duotone" />
              <span>ARCADELX does <strong>not sell or rent</strong> users' personal information to third parties.</span>
            </div>
            <p>
              Information may be shared with trusted service providers who
              assist in operating the ARCADELX platform under appropriate
              agreements:
            </p>
            <div className="pp-sharing-grid">
              {[
                { icon: <CreditCard size={18} weight="duotone" />, label: "Payment gateway providers" },
                { icon: <Database size={18} weight="duotone" />, label: "Cloud / server infrastructure providers" },
                { icon: <Globe size={18} weight="duotone" />, label: "Hosting providers" },
                { icon: <Info size={18} weight="duotone" />, label: "Technical service providers" },
                { icon: <Globe size={18} weight="duotone" />, label: "Analytics or monitoring providers" },
                { icon: <EnvelopeSimple size={18} weight="duotone" />, label: "Customer-support / service providers" },
              ].map(({ icon, label }) => (
                <div key={label} className="pp-sharing-chip">
                  <span className="pp-sharing-chip-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <p>
              Information may also be disclosed where required by applicable law,
              legal process, or governmental authority, or to protect the security
              and rights of ARCADELX, Nilee Games, users, or the public.
            </p>
          </section>

          {/* ── Section 9 – Partner Venues ─────────────────── */}
          <section id="pp9" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">09.</span> Partner / Venue Information</h2>
            <p>
              ARCADELX kiosks are deployed at partner venues. Limited operational
              and transaction information may be accessible to a location partner
              for the purposes of managing the kiosk deployment at their venue.
              Partners are <strong>not authorized</strong> to access personal
              information beyond what is reasonably required for their role.
            </p>
            <div className="pp-venue-grid">
              {[
                "Malls", "Restaurants", "Hotels", "Schools",
                "Corporate Offices", "Gyms", "Entertainment Centres",
                "Events", "Other Partner Locations",
              ].map((v) => (
                <div key={v} className="pp-venue-chip">
                  <Storefront size={13} weight="duotone" />
                  {v}
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 10 – Security ──────────────────────── */}
          <section id="pp10" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">10.</span> Data Security</h2>
            <p>
              Nilee Games implements reasonable technical and organizational
              measures to protect information processed through ARCADELX:
            </p>
            <div className="pp-security-grid">
              {[
                { icon: <Lock size={20} weight="duotone" />, label: "Access Controls", desc: "Role-based access to systems and data" },
                { icon: <ShieldCheck size={20} weight="duotone" />, label: "Authentication", desc: "Secure authentication for administrative access" },
                { icon: <Globe size={20} weight="duotone" />, label: "Secure Communication", desc: "Encrypted data transmission" },
                { icon: <Database size={20} weight="duotone" />, label: "Server Security", desc: "Hardened server configurations" },
                { icon: <Eye size={20} weight="duotone" />, label: "Restricted Access", desc: "Minimal administrative access privileges" },
                { icon: <Info size={20} weight="duotone" />, label: "Monitoring & Logging", desc: "System activity monitoring and logs" },
                { icon: <Database size={20} weight="duotone" />, label: "Backup & Recovery", desc: "Data backup and recovery procedures" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Payment Security", desc: "Third-party payment-provider security mechanisms" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="pp-security-card pp-reveal">
                  <span className="pp-security-icon">{icon}</span>
                  <strong>{label}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="pp-notice-box pp-reveal">
              <Info size={17} weight="duotone" className="pp-notice-icon" />
              <p>No electronic system or internet transmission can be guaranteed to be completely secure. Nilee Games takes reasonable steps to protect information but cannot guarantee absolute security.</p>
            </div>
          </section>

          {/* ── Section 11 – Retention ─────────────────────── */}
          <section id="pp11" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">11.</span> Data Retention</h2>
            <p>
              Information may be retained for as long as reasonably necessary for
              the following purposes:
            </p>
            <div className="pp-retention-list">
              {[
                { icon: <Database size={16} weight="duotone" />, label: "Providing ARCADELX services" },
                { icon: <CreditCard size={16} weight="duotone" />, label: "Maintaining transaction records" },
                { icon: <EnvelopeSimple size={16} weight="duotone" />, label: "Customer support" },
                { icon: <Info size={16} weight="duotone" />, label: "Accounting and financial reconciliation" },
                { icon: <ShieldCheck size={16} weight="duotone" />, label: "Security and fraud prevention" },
                { icon: <Lock size={16} weight="duotone" />, label: "Legal and regulatory requirements" },
                { icon: <Clock size={16} weight="duotone" />, label: "Resolving disputes" },
              ].map(({ icon, label }) => (
                <div key={label} className="pp-retention-item">
                  <span className="pp-retention-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <p>
              Gaming and operational information may be retained in aggregated
              or de-identified form for longer periods for analytics and service
              improvement. Where information is no longer required for the above
              purposes and retention is not required by law, Nilee Games will
              take reasonable steps to delete or anonymize it.
            </p>
          </section>

          {/* ── Section 12 – Children ──────────────────────── */}
          <section id="pp12" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">12.</span> Children and Minors</h2>
            <div className="pp-children-card pp-reveal">
              <Person size={24} weight="duotone" className="pp-children-icon" />
              <div>
                <p>
                  ARCADELX may be used by children and families at certain
                  partner locations. Parents, guardians, schools, or venues
                  should ensure appropriate and safe use by minors.
                </p>
                <ul>
                  <li>Applicable parental or guardian consent requirements will be followed where required by law.</li>
                  <li>ARCADELX does not intentionally use its camera system to create or store photographs or facial profiles of children.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 13 – Cookies ───────────────────────── */}
          <section id="pp13" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">13.</span> Cookies and Website Data</h2>
            <p>
              The ARCADELX website may use cookies or similar technologies for:
            </p>
            <div className="pp-cookies-grid">
              {[
                "Website functionality",
                "Security",
                "Performance monitoring",
                "Understanding website usage",
                "Improving user experience",
              ].map((item) => (
                <div key={item} className="pp-cookies-chip">
                  <CheckCircle size={13} weight="duotone" className="pp-check-icon" />
                  {item}
                </div>
              ))}
            </div>
            <p>
              Users may control cookie preferences through their browser
              settings. Disabling certain cookies may affect the functionality
              of the ARCADELX website.
            </p>
          </section>

          {/* ── Section 14 – Third-Party ───────────────────── */}
          <section id="pp14" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">14.</span> Third-Party Links and Services</h2>
            <div className="pp-warn-box pp-reveal">
              <Warning size={20} weight="duotone" className="pp-warn-icon" />
              <div>
                <strong>External Links Notice</strong>
                <p>
                  ARCADELX may contain links to third-party websites,
                  applications, or services. Nilee Games is not responsible
                  for the privacy practices of third parties. Users should
                  review third-party privacy policies before providing any
                  information to those services.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 15 – Withdrawal ────────────────────── */}
          <section id="pp15" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">15.</span> Withdrawal of Consent</h2>
            <div className="pp-contact-card pp-reveal">
              <div className="pp-contact-header">
                <EnvelopeSimple size={22} weight="duotone" />
                <strong>Want to Withdraw Consent?</strong>
              </div>
              <p>Contact Nilee Games at:</p>
              <a className="pp-contact-email" href="mailto:info@nileegames.com">
                info@nileegames.com
              </a>
              <p>
                Where processing is based on consent, users may request
                withdrawal of consent by contacting Nilee Games. Please note:
              </p>
              <ul className="pp-withdrawal-list">
                <li><ArrowRight size={12} weight="bold" className="pp-list-arrow" />Withdrawal does not necessarily affect processing that is legally permitted or required independently of consent.</li>
                <li><ArrowRight size={12} weight="bold" className="pp-list-arrow" />Withdrawal may affect the ability to provide certain ARCADELX services where the information is necessary to deliver those services.</li>
              </ul>
            </div>
          </section>

          {/* ── Section 16 – Grievance ─────────────────────── */}
          <section id="pp16" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">16.</span> Grievance / Privacy Questions</h2>
            <div className="pp-grievance-card pp-reveal">
              <div className="pp-grievance-header">
                <ShieldCheck size={26} weight="duotone" className="pp-grievance-icon" />
                <div>
                  <strong className="pp-grievance-title">Privacy &amp; Grievance Contact</strong>
                  <p className="pp-grievance-company">
                    Nilee Games and Future Technologies Pvt. Ltd.<br />
                    ARCADELX – Limitless Gaming Xperience
                  </p>
                </div>
              </div>
              <a className="pp-contact-email" href="mailto:info@nileegames.com">
                info@nileegames.com
              </a>
              <p className="pp-grievance-note">
                When raising a privacy concern or grievance, please provide
                sufficient information about your concern so it can be
                investigated and addressed appropriately. Nilee Games will
                make reasonable efforts to respond to privacy enquiries in a
                timely manner.
              </p>
            </div>
          </section>

          {/* ── Section 17 – Policy Changes ───────────────── */}
          <section id="pp17" className="pp-section pp-reveal">
            <h2><span className="pp-sec-num">17.</span> Changes to This Privacy Policy</h2>
            <p>
              Nilee Games may periodically update this Privacy Policy to reflect
              changes in:
            </p>
            <div className="pp-changes-grid">
              {[
                "ARCADELX features and services",
                "Technology and data-processing practices",
                "Legal or regulatory requirements",
                "Security and privacy standards",
              ].map((item) => (
                <div key={item} className="pp-changes-item">
                  <ArrowUpRight size={14} weight="bold" className="pp-changes-icon" />
                  {item}
                </div>
              ))}
            </div>
            <p>
              The updated Privacy Policy will be published on the ARCADELX
              website with a revised Effective Date. Continued use of ARCADELX
              services after publication of an updated policy constitutes
              acceptance of the revised terms.
            </p>
            <p>
              For any questions about this Privacy Policy, please contact Nilee
              Games at{" "}
              <a className="pp-inline-link" href="mailto:info@nileegames.com">
                info@nileegames.com
              </a>
              .
            </p>
          </section>

        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
