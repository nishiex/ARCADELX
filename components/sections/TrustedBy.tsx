import React from 'react';

const VENUES = [
  'MALLS',
  'CORPORATES',
  'SCHOOLS',
  'HOTELS',
  'GYMS',
  'AMUSEMENT CENTERS',
  'EVENTS & EXHIBITIONS',
];

export default function TrustedBy() {
  return (
    <section className="tc-trusted" aria-label="Trusted by forward-thinking organizations">
      <div className="tc-trusted-inner">
        <div className="tc-trusted-left">
          <p className="lx-eyebrow tc-reveal"><span />BUILT FOR EVERYWHERE</p>
          <h2 className="tc-trusted-title tc-reveal">Trusted by forward-thinking organizations.</h2>
          <p className="tc-trusted-desc tc-reveal">
            ARCADELX is designed to fit naturally into different environments, from retail and hospitality to schools, gyms and entertainment.
          </p>
        </div>

        <div className="tc-trusted-right">
          <nav className="tc-venue-list" aria-label="Trusted venue types">
            {VENUES.map((v, i) => (
              <div key={v} className="tc-venue-block tc-reveal" tabIndex={0}>
                <div className="tc-venue-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="tc-venue-name">{v}</div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
