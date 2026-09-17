const fs=require('fs');
const p='app/globals.css';
let s=fs.readFileSync(p,'utf8');

// 1) Ensure .lx-hero-visual has overflow: visible
s = s.replace(/(\.lx-hero-visual\s*\{)([\s\S]*?)(\})/m, (m, open, inner, close) => {
  if (/overflow\s*:\s*\w+/m.test(inner)) return open + inner + close;
  // insert overflow near the start for readability
  return open + inner + '\n  overflow: visible;\n' + close;
});

// 2) Update .lx-kiosk-wrap: remove aspect-ratio and add height:100%
s = s.replace(/(\.lx-kiosk-wrap\s*\{)([\s\S]*?)(\})/m, (m, open, inner, close) => {
  // remove any aspect-ratio lines inside this block
  inner = inner.replace(/^\s*aspect-ratio:[^;]+;\s*$/m, '');
  // add height:100% if not present
  if (!/height\s*:/m.test(inner)) {
    inner = inner + '\n  height: 100%;\n';
  }
  return open + inner + close;
});

// 3) Replace or append the kiosk tuning block (from marker to EOF)
const marker = '/* Kiosk overlay tuning (automatically generated) */';
const newBlock = `/* Kiosk overlay tuning (automatically generated) */
.lx-kiosk-visual {
  position: relative;
  width: auto;
  height: min(78vh, 640px);
  aspect-ratio: 1080/1920; /* image natural ratio */
  margin: 0 auto;
}
.lx-kiosk-visual .lx-kiosk-shell {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}
.lx-kiosk-display {
  position: absolute;
  z-index: 2;
  /* Positioned to match the transparent display area inside the PNG */
  top: 20.781%;
  left: 30.463%;
  width: 50.648%;
  height: 76.771%;
  overflow: hidden;
  border-radius: 6px; /* adjust if the screen cutout is rounded */
}
.lx-kiosk-display .gsap-kiosk-img {
  position: absolute;
  inset: 0;
}
@media (max-width: 768px) {
  /* mobile fallback — tune if needed after visual QA */
  .lx-kiosk-visual {
    height: min(60vh, 480px);
  }
}
`;

if (s.indexOf(marker) !== -1) {
  s = s.substring(0, s.indexOf(marker)) + newBlock;
} else {
  s = s + '\n' + newBlock;
}

fs.writeFileSync(p, s, 'utf8');
console.log('UPDATED app/globals.css');
