"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Warning,
  CheckCircle,
  XCircle,
  CreditCard,
  EnvelopeSimple,
  ShieldWarning,
  Info,
  Clock,
  ArrowCircleDown,
  Storefront,
  ArrowRight,
} from "@phosphor-icons/react";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";

const NAV_SECTIONS = [
  { id: "s1",  label: "How Payment Works" },
  { id: "s2",  label: "Cancellation Before Payment" },
  { id: "s3",  label: "Payment Confirmation" },
  { id: "s4",  label: "Refunds After Payment" },
  { id: "s5",  label: "When Refund May Be Provided" },
  { id: "s6",  label: "When Refund Will Not Be Provided" },
  { id: "s7",  label: "Payment Gateways" },
  { id: "s8",  label: "Failed or Pending Payments" },
  { id: "s9",  label: "Refund Processing" },
  { id: "s10", label: "How to Request a Refund" },
  { id: "s11", label: "Transaction Verification" },
  { id: "s12", label: "Chargebacks & Disputes" },
  { id: "s13", label: "No Cash Refunds" },
  { id: "s14", label: "Fraudulent Refund Claims" },
  { id: "s15", label: "Partner / Venue-Related Issues" },
  { id: "s16", label: "Policy Changes" },
];

function MobileContents() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rp-mobile-contents">
      <button
        className="rp-mobile-toc-toggle"
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
        <nav className="rp-mobile-toc-nav" aria-label="Policy contents">
          {NAV_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rp-mobile-toc-link"
              onClick={() => setOpen(false)}
            >
              <span className="rp-toc-num">{String(i + 1).padStart(2, "0")}</span>
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
    <aside className="rp-sidebar" aria-label="Policy navigation">
      <p className="rp-sidebar-label">Contents</p>
      <nav>
        {NAV_SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`rp-sidebar-link${activeId === s.id ? " is-active" : ""}`}
          >
            <span className="rp-toc-num">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default function RefundPolicyPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("s1");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Hero entrance
      if (!reduce) {
        gsap.from(".rp-hero-content > *", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".rp-reveal").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 22,
          opacity: reduce ? 1 : 0,
          duration: reduce ? 0 : 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });

      // Scroll spy
      NAV_SECTIONS.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveId(id),
          onEnterBack: () => setActiveId(id),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main className="rp-site arcadelx-site" ref={root}>
      <SiteHeader />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="rp-hero" aria-label="Refund & Cancellation Policy hero">
        <div className="rp-hero-bg" aria-hidden="true">
          <div className="rp-hero-grid" />
          <div className="rp-hero-glow rp-hero-glow-1" />
          <div className="rp-hero-glow rp-hero-glow-2" />
          <div className="rp-hero-lines" />
        </div>
        <div className="rp-hero-content">
          <p className="lx-eyebrow">
            <span />
            Legal&nbsp;·&nbsp;Policy
          </p>
          <h1>Refund &amp;&nbsp;Cancellation Policy</h1>
          <p className="rp-hero-desc">
            Understand how cancellations, payments, refunds, failed transactions,
            and gaming-session issues are handled at ARCADELX.
          </p>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <div className="rp-intro-wrap rp-reveal">
        <div className="rp-intro">
          <p className="rp-intro-text">
            This Refund &amp; Cancellation Policy applies to users who make
            payments for gaming sessions through <strong>ARCADELX</strong>{" "}
            motion-sensing gaming kiosks. ARCADELX is a product of{" "}
            <strong>Nilee Games and Future Technologies Pvt. Ltd.</strong> ("Nilee
            Games", "we", "us", or "our"). By making a payment through an ARCADELX
            kiosk, you agree to the terms set out in this policy.
          </p>
          <p className="rp-intro-date">Effective Date: 1 September 2025</p>
        </div>
      </div>

      {/* ── Mobile TOC ───────────────────────────────────────── */}
      <div className="rp-mobile-toc-wrap">
        <MobileContents />
      </div>

      {/* ── Main Content Layout ──────────────────────────────── */}
      <div className="rp-layout">
        {/* Sticky sidebar */}
        <DesktopSidebar activeId={activeId} />

        {/* Policy body */}
        <article className="rp-body" aria-label="Policy content">

          {/* ── Quick-reference callout cards ─────────────────── */}
          <div className="rp-callout-grid rp-reveal">
            <div className="rp-callout rp-callout--cyan">
              <CheckCircle size={22} weight="duotone" className="rp-callout-icon" />
              <strong>Before Payment</strong>
              <p>Users can cancel or change their selected game before completing payment without any fee or penalty.</p>
            </div>
            <div className="rp-callout rp-callout--pink">
              <XCircle size={22} weight="duotone" className="rp-callout-icon" />
              <strong>After Successful Payment</strong>
              <p>A paid gaming session is generally non-refundable once activated, subject to the exceptions described in this policy or applicable law.</p>
            </div>
            <div className="rp-callout rp-callout--blue">
              <Info size={22} weight="duotone" className="rp-callout-icon" />
              <strong>Technical Issues</strong>
              <p>If payment succeeds but the gaming session does not activate due to a verified technical issue, a full refund or replacement session may be considered.</p>
            </div>
            <div className="rp-callout rp-callout--cyan">
              <Clock size={22} weight="duotone" className="rp-callout-icon" />
              <strong>Refund Timeline</strong>
              <p>Once approved, refunds will normally be initiated within 3–7 business days, subject to verification and payment-system procedures.</p>
            </div>
            <div className="rp-callout rp-callout--pink">
              <ArrowUpRight size={22} weight="duotone" className="rp-callout-icon" />
              <strong>Duplicate Payment</strong>
              <p>A verified duplicate payment may be eligible for a refund.</p>
            </div>
            <div className="rp-callout rp-callout--warn">
              <ShieldWarning size={22} weight="duotone" className="rp-callout-icon" />
              <strong>Security</strong>
              <p>Never send UPI PINs, OTPs, CVVs, passwords, or banking credentials to Nilee Games or anyone claiming to represent ARCADELX.</p>
            </div>
          </div>

          {/* ─── Section 1 ─── */}
          <section id="s1" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">01.</span> How ARCADELX Payment Works</h2>
            <p>
              ARCADELX gaming kiosks accept payments at the point of use. When a
              user selects a game and completes payment through an ARCADELX kiosk,
              a gaming session is activated. The payment process typically involves
              the user scanning a QR code or using another supported payment method
              to pay for the selected gaming session at the kiosk.
            </p>
          </section>

          {/* ─── Section 2 ─── */}
          <section id="s2" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">02.</span> Cancellation Before Payment</h2>
            <p>
              Prior to completing payment at an ARCADELX kiosk, a user may
              generally cancel the transaction or change the selected game without
              incurring a cancellation fee or penalty. Once payment is completed
              and a gaming session is activated, the transaction is treated as a
              completed gaming purchase and the terms in this policy apply.
            </p>
          </section>

          {/* ─── Section 3 ─── */}
          <section id="s3" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">03.</span> Payment Confirmation</h2>
            <p>
              A gaming session is considered confirmed when payment is
              successfully processed and a session is activated on the ARCADELX
              kiosk. Users should ensure they have selected the correct game and
              session parameters before completing payment, as changes after
              payment may not be possible under this policy unless a specific
              exception applies.
            </p>
          </section>

          {/* ─── Section 4 ─── */}
          <section id="s4" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">04.</span> Refunds After Successful Payment</h2>
            <p>
              As a general rule, payments made for gaming sessions through
              ARCADELX kiosks are non-refundable after the payment is successfully
              processed and the gaming session is activated. This is because the
              gaming service is considered delivered at the point of session
              activation.
            </p>
            <p>
              Exceptions to this general rule are described in Section 5 of this
              policy. Nothing in this policy is intended to limit any rights you
              may have under applicable consumer-protection laws.
            </p>
          </section>

          {/* ─── Section 5 ─── */}
          <section id="s5" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">05.</span> When a Refund May Be Provided</h2>
            <p>
              Nilee Games may, at its discretion and subject to verification,
              consider a refund or replacement gaming session in the following
              situations:
            </p>

            <div className="rp-eligibility-grid">
              {/* A */}
              <div className="rp-elig-card rp-reveal">
                <div className="rp-elig-icon rp-elig-icon--cyan">
                  <CheckCircle size={24} weight="duotone" />
                </div>
                <div className="rp-elig-body">
                  <h3>A. Payment Successful but Game Does Not Start</h3>
                  <p>
                    If payment is successfully deducted but the gaming session
                    does not start due to a technical or system issue at the
                    kiosk (not caused by the user), Nilee Games may, after
                    verification, provide:
                  </p>
                  <ul>
                    <li>A full refund; or</li>
                    <li>A replacement gaming session; or</li>
                    <li>Another appropriate resolution.</li>
                  </ul>
                </div>
              </div>
              {/* B */}
              <div className="rp-elig-card rp-reveal">
                <div className="rp-elig-icon rp-elig-icon--blue">
                  <Info size={24} weight="duotone" />
                </div>
                <div className="rp-elig-body">
                  <h3>B. Technical Failure During Session</h3>
                  <p>
                    If a verified technical failure occurs with the ARCADELX
                    kiosk during a session that prevents the user from
                    completing the gaming session, Nilee Games may, after
                    verification, provide:
                  </p>
                  <ul>
                    <li>A partial refund corresponding to the unused portion; or</li>
                    <li>A replacement gaming session; or</li>
                    <li>Another appropriate resolution.</li>
                  </ul>
                </div>
              </div>
              {/* C */}
              <div className="rp-elig-card rp-reveal">
                <div className="rp-elig-icon rp-elig-icon--pink">
                  <ArrowUpRight size={24} weight="duotone" />
                </div>
                <div className="rp-elig-body">
                  <h3>C. Duplicate Payment</h3>
                  <p>
                    If a user is charged more than once for the same gaming
                    session due to a technical error, Nilee Games may, after
                    verification of the duplicate payment:
                  </p>
                  <ul>
                    <li>Refund the duplicate charge; or</li>
                    <li>Provide another appropriate resolution.</li>
                  </ul>
                </div>
              </div>
              {/* D */}
              <div className="rp-elig-card rp-reveal">
                <div className="rp-elig-icon rp-elig-icon--cyan">
                  <Clock size={24} weight="duotone" />
                </div>
                <div className="rp-elig-body">
                  <h3>D. Payment Deducted but Session Not Activated</h3>
                  <p>
                    If payment is deducted from the user's account but the
                    gaming session is not activated and the amount is not
                    automatically reversed, Nilee Games may, after
                    verification:
                  </p>
                  <ul>
                    <li>Process a refund; or</li>
                    <li>Activate a replacement session; or</li>
                    <li>Provide another appropriate resolution.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ─── Section 6 ─── */}
          <section id="s6" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">06.</span> When a Refund Will Generally Not Be Provided</h2>
            <p>
              Refunds will generally not be provided in the following situations
              once payment is successfully processed and the gaming session is
              activated:
            </p>
            <div className="rp-nope-grid">
              {[
                "Change of mind after payment",
                "Changing the selected game after payment",
                "Voluntarily stopping the game before the session ends",
                "Not using the entire session duration",
                "Leaving the venue during a session",
                "Failure to follow gameplay instructions",
                "Failure to follow safety instructions",
                "Personal preference regarding the game",
                "User device, internet connection, or payment application issues after successful payment and service activation",
              ].map((item) => (
                <div key={item} className="rp-nope-item">
                  <XCircle size={16} weight="duotone" className="rp-nope-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="rp-legal-note">
              This does not affect any rights available to you under applicable
              consumer-protection law.
            </p>
          </section>

          {/* ─── Section 7 ─── */}
          <section id="s7" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">07.</span> Payment Gateways</h2>
            <p>
              ARCADELX kiosks support a range of payment methods to provide
              users with convenience at the point of play:
            </p>
            <div className="rp-payment-grid">
              {[
                { icon: <CreditCard size={20} weight="duotone" />, label: "UPI" },
                { icon: <ArrowCircleDown size={20} weight="duotone" />, label: "QR-Based Payments" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Credit Cards" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Debit Cards" },
                { icon: <Storefront size={20} weight="duotone" />, label: "Net Banking" },
                { icon: <ArrowRight size={20} weight="duotone" />, label: "Wallets" },
                { icon: <ArrowRight size={20} weight="duotone" />, label: "Other Supported Methods" },
              ].map(({ icon, label }) => (
                <div key={label} className="rp-payment-chip">
                  <span className="rp-payment-chip-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <p>
              The availability of specific payment methods may vary by kiosk
              location. Payments are processed through third-party payment
              service providers. Nilee Games does not store card or UPI
              credentials on its systems.
            </p>
          </section>

          {/* ─── Section 8 ─── */}
          <section id="s8" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">08.</span> Failed or Pending Payments</h2>
            <div className="rp-payment-status-grid">
              <div className="rp-pstat-card rp-pstat-card--red rp-reveal">
                <div className="rp-pstat-header">
                  <XCircle size={20} weight="duotone" />
                  <strong>Failed Payment</strong>
                </div>
                <p>
                  If your payment fails and the gaming session is not activated,
                  no charge should have been applied to your account. If an
                  amount was deducted despite a failed payment status, please
                  allow time for an automatic reversal — which most payment
                  systems process within a few business days. If the amount is
                  not reversed, contact us with your transaction details.
                </p>
              </div>
              <div className="rp-pstat-card rp-pstat-card--yellow rp-reveal">
                <div className="rp-pstat-header">
                  <Clock size={20} weight="duotone" />
                  <strong>Pending Payment</strong>
                </div>
                <p>
                  If your payment status shows as pending, avoid making
                  additional payment attempts for the same session wherever
                  reasonably possible to avoid a duplicate charge. Allow the
                  pending status to resolve. If the status remains unresolved,
                  contact your payment provider or us with your transaction
                  details.
                </p>
              </div>
              <div className="rp-pstat-card rp-pstat-card--cyan rp-reveal">
                <div className="rp-pstat-header">
                  <CheckCircle size={20} weight="duotone" />
                  <strong>Successful Payment</strong>
                </div>
                <p>
                  Once payment succeeds and a gaming session is activated, the
                  transaction is treated as a completed gaming purchase subject
                  to the terms of this policy. The general rule of
                  non-refundability applies, subject to the exceptions described
                  in Section 5.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Section 9 ─── */}
          <section id="s9" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">09.</span> Refund Processing</h2>
            <p>
              Where a refund is approved under this policy, Nilee Games will
              initiate the refund within approximately <strong>3–7 business
              days</strong> of approving the request, subject to verification
              and the procedures of the relevant payment system.
            </p>
            <p>
              The time taken for the refunded amount to reflect in the user's
              account will depend on the payment method and financial institution
              involved. Nilee Games is not responsible for delays caused by
              third-party payment processors or financial institutions.
            </p>
            <p>
              Refunds will be processed to the original payment method used for
              the transaction, where technically feasible.
            </p>
          </section>

          {/* ─── Section 10 ─── */}
          <section id="s10" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">10.</span> How to Request a Refund</h2>
            <div className="rp-contact-card rp-reveal">
              <div className="rp-contact-header">
                <EnvelopeSimple size={22} weight="duotone" />
                <strong>Need to Request a Refund?</strong>
              </div>
              <p>Contact us at:</p>
              <a className="rp-contact-email" href="mailto:info@nileegames.com">
                info@nileegames.com
              </a>
              <p className="rp-contact-subhead">Please include the following information:</p>
              <ul className="rp-contact-list">
                {[
                  "Your name",
                  "Date and approximate time of payment",
                  "Amount paid",
                  "ARCADELX Kiosk ID",
                  "Location of the kiosk",
                  "Transaction ID / UTR / payment reference number",
                  "Payment method used",
                  "Description of the problem",
                ].map((item) => (
                  <li key={item}>
                    <ArrowRight size={13} weight="bold" className="rp-list-arrow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rp-warn-box rp-reveal">
              <ShieldWarning size={20} weight="duotone" className="rp-warn-icon" />
              <div>
                <strong>Security Notice</strong>
                <p>
                  Nilee Games and its representatives will never ask you to
                  share your <strong>UPI PIN</strong>, <strong>OTP</strong>,{" "}
                  <strong>CVV</strong>, <strong>password</strong>, or any other{" "}
                  <strong>banking credentials</strong>. Never share these with
                  anyone claiming to represent ARCADELX or Nilee Games.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Section 11 ─── */}
          <section id="s11" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">11.</span> Transaction Verification</h2>
            <p>
              To process a refund request, Nilee Games may verify one or more of
              the following:
            </p>
            <div className="rp-verify-grid">
              {[
                "Transaction ID",
                "Payment status",
                "Kiosk ID",
                "Session ID",
                "Game selected",
                "Session activation status",
                "Session start and end time",
                "Relevant system records",
                "Other reasonably necessary transaction-related information",
              ].map((item) => (
                <div key={item} className="rp-verify-item">
                  <CheckCircle size={14} weight="duotone" className="rp-verify-icon" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* ─── Section 12 ─── */}
          <section id="s12" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">12.</span> Chargebacks and Payment Disputes</h2>
            <p>
              If you have a concern about a payment, we encourage you to contact
              Nilee Games directly at{" "}
              <a className="rp-inline-link" href="mailto:info@nileegames.com">
                info@nileegames.com
              </a>{" "}
              before initiating a chargeback or payment dispute through your
              bank or payment provider.
            </p>
            <p>
              If a chargeback or dispute is initiated, Nilee Games may provide
              relevant transaction records, session logs, and service records to
              the applicable financial institution or payment processor as part
              of the dispute resolution process.
            </p>
          </section>

          {/* ─── Section 13 ─── */}
          <section id="s13" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">13.</span> No Cash Refunds</h2>
            <div className="rp-notice-box rp-reveal">
              <Info size={18} weight="duotone" className="rp-notice-icon" />
              <p>
                Approved refunds will generally be processed electronically to
                the original payment method. <strong>Cash refunds will not
                normally be provided</strong> for payments made via QR code,
                UPI, credit card, debit card, net banking, wallet, or other
                digital payment methods.
              </p>
            </div>
          </section>

          {/* ─── Section 14 ─── */}
          <section id="s14" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">14.</span> Fraudulent Refund Claims</h2>
            <div className="rp-fraud-box rp-reveal">
              <Warning size={22} weight="duotone" className="rp-fraud-icon" />
              <div>
                <strong>Fraudulent Claims Warning</strong>
                <p>
                  Nilee Games takes the integrity of its payment and refund
                  systems seriously. Any refund request that is found to be
                  fraudulent, abusive, or based on false information may be
                  investigated and rejected. Nilee Games reserves the right to
                  take appropriate action under applicable law in cases of
                  suspected fraudulent refund claims.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Section 15 ─── */}
          <section id="s15" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">15.</span> Partner / Venue-Related Issues</h2>
            <p>
              ARCADELX kiosks are deployed at a variety of partner venues,
              including:
            </p>
            <div className="rp-venue-grid">
              {[
                "Malls",
                "Restaurants",
                "Hotels",
                "Schools",
                "Corporate Offices",
                "Gyms",
                "Entertainment Centres",
                "Events",
                "Other Partner Locations",
              ].map((v) => (
                <div key={v} className="rp-venue-chip">
                  <Storefront size={14} weight="duotone" />
                  {v}
                </div>
              ))}
            </div>
            <p>
              In cases where a gaming session is interrupted due to circumstances
              at a partner venue — such as a power failure, venue closure, or
              other operational issues beyond Nilee Games' reasonable control —
              Nilee Games will assess the situation on a case-by-case basis.
              Where appropriate and feasible, Nilee Games may offer a replacement
              session or another appropriate resolution. However, Nilee Games
              cannot guarantee a refund in cases where the interruption is caused
              by factors outside its direct control at a partner venue.
            </p>
          </section>

          {/* ─── Section 16 ─── */}
          <section id="s16" className="rp-section rp-reveal">
            <h2><span className="rp-sec-num">16.</span> Policy Changes</h2>
            <p>
              Nilee Games may update this Refund &amp; Cancellation Policy from
              time to time to reflect changes in its services, business
              practices, or applicable law. The latest version of this policy,
              together with its stated effective date, will be published on the
              ARCADELX website.
            </p>
            <p>
              Your continued use of ARCADELX services after any changes to this
              policy are published will constitute your acceptance of the revised
              policy.
            </p>
            <p>
              If you have any questions about this policy, please contact Nilee
              Games at{" "}
              <a className="rp-inline-link" href="mailto:info@nileegames.com">
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
