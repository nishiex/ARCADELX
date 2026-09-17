const fs = require('fs');
const path = 'components/sections/ProductSections.tsx';
let s = fs.readFileSync(path, 'utf8');
const pattern = '<a className="lx-cta-primary-pill"';
const idx = s.indexOf(pattern);
if (idx === -1) {
  console.log('pattern not found');
  process.exit(0);
}
// find start of anchor tag
const openStart = s.lastIndexOf('<a', idx);
const closeIdx = s.indexOf('</a>', idx);
if (openStart === -1 || closeIdx === -1) {
  console.log('could not find full anchor');
  process.exit(1);
}
const before = s.slice(0, openStart);
const after = s.slice(closeIdx + 4);
const replacement = '<NeonButton href="mailto:hello@arcadelx.com">Get Started</NeonButton>';
const newS = before + replacement + after;
fs.writeFileSync(path, newS, 'utf8');
console.log('Replaced primary CTA with NeonButton in', path);
