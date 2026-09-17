const fs = require('fs');
const p = 'app/globals.css';
let s = fs.readFileSync(p, 'utf8');
if (!s.includes("@import 'swiper/css'")) {
  const prefix = "/* Swiper styles (for mobile carousels) */\n@import 'swiper/css';\n@import 'swiper/css/navigation';\n@import 'swiper/css/pagination';\n\n";
  fs.writeFileSync(p, prefix + s, 'utf8');
  console.log('Prepended Swiper CSS imports to globals.css');
} else {
  console.log('Swiper CSS already present');
}
