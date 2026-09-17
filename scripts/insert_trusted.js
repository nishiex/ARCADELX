const fs = require('fs');
const p = 'components/TermsPage.tsx';
let s = fs.readFileSync(p, 'utf8');
const needle = '<div className="tc-mobile-toc-wrap">';
if (s.includes('TrustedBy')){
  console.log('ALREADY_HOOKED');
  process.exit(0);
}
if (s.includes(needle)){
  s = s.replace(needle, '</div>\n\n      <TrustedBy />\n\n      ' + needle);
  fs.writeFileSync(p, s, 'utf8');
  console.log('TRUSTED_BY_INSERTED');
} else {
  console.log('MISSING_NEEDLE');
}
