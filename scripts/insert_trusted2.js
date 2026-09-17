const fs = require('fs');
const p = 'components/TermsPage.tsx';
let s = fs.readFileSync(p, 'utf8');
const needle = '\n      <div className="tc-mobile-toc-wrap">';
const insert = '\n\n      <TrustedBy />\n';
if (!s.includes('<TrustedBy')) {
  if (s.includes(needle)) {
    s = s.replace(needle, insert + needle);
    fs.writeFileSync(p, s, 'utf8');
    console.log('INSERTED_TRUSTED_BY_VIA_NODE');
  } else {
    console.log('NEEDLE_NOT_FOUND');
  }
} else {
  console.log('ALREADY_PRESENT');
}
