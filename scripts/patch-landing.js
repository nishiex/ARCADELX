const fs = require("fs");
const p = "components/ArcadeLXLanding.tsx";
let s = fs.readFileSync(p, "utf8");
// remove the Gallery token inside named import braces (first occurrence)
s = s.replace(/\bGallery,\s*/g, "");
if (!s.includes('import Gallery from "./sections/ImageGallery";')) {
  const marker = 'from "./sections/ProductSections";';
  const idx = s.indexOf(marker);
  if (idx !== -1) {
    const newlineIdx = s.indexOf('\n', idx);
    const insertPos = newlineIdx === -1 ? s.length : newlineIdx + 1;
    s = s.slice(0, insertPos) + 'import Gallery from "./sections/ImageGallery";\n' + s.slice(insertPos);
  }
}
fs.writeFileSync(p, s, "utf8");
console.log('Patched ArcadeLXLanding.tsx');
