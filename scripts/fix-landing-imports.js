const fs = require('fs');
const p = 'components/ArcadeLXLanding.tsx';
let s = fs.readFileSync(p, 'utf8');

// Replace the literal backslash-n sequences inside the ProductSections import block with real newlines
const badRe = /import\s*\{\\n[\s\S]*?\\n\}\s*from\s*"\.\/sections\/ProductSections";\\n/;
if (badRe.test(s)) {
  const newImport = `import {
  FeaturedGames,
  FinalCTA,
  MotionField,
  ProductFeatures,
  Statistics,
  TrustedOrganizations,
  VideoSection,
  WhyArcadeLX,
} from "./sections/ProductSections";\n`;
  s = s.replace(badRe, newImport);
  // ensure Gallery import line exists (if it was inserted previously as literal line, keep it)
  if (!s.includes('import Gallery from "./sections/ImageGallery";')) {
    s = s.replace(newImport, newImport + 'import Gallery from "./sections/ImageGallery";\n');
  }
  fs.writeFileSync(p, s, 'utf8');
  console.log('Fixed backslash-n import block');
} else {
  console.log('No literal backslash-n import block found');
}
