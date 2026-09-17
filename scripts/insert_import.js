const fs = require('fs');
const p = 'components/TermsPage.tsx';
let s = fs.readFileSync(p, 'utf8');
let lines = s.split(/\r?\n/);
// Insert import at line 2 (after "use client"), but avoid duplicate
if (!lines[1] || !lines[1].includes('import TrustedBy')) {
  lines.splice(1, 0, 'import TrustedBy from "./sections/TrustedBy";');
  fs.writeFileSync(p, lines.join('\n'), 'utf8');
  console.log('INSERTED');
} else {
  console.log('ALREADY_PRESENT');
}
