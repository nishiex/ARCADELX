const fs = require('fs');
const p = 'components/sections/ProductSections.tsx';
let s = fs.readFileSync(p, 'utf8');

// Insert ImageCard import if missing
if (!s.includes("import ImageCard from \"../ui/ImageCard\";")) {
  const marker = 'import { SectionHeading, NeonButton } from "../ui/ArcadePrimitives";';
  const idx = s.indexOf(marker);
  if (idx !== -1) {
    const newlineIdx = s.indexOf('\n', idx);
    const insertPos = newlineIdx === -1 ? s.length : newlineIdx + 1;
    s = s.slice(0, insertPos) + 'import ImageCard from "../ui/ImageCard";\n' + s.slice(insertPos);
  }
}

// Replace game art block to show Game_Play image for active card
const oldGameArt = `        <div className="lx-game-art mt-2">
              <i>
                <GameController size={34} weight="duotone" />
              </i>
              <strong className="block mt-2">{title.split(" ").slice(0, 2).join(" ")}</strong>
            </div>`;

const newGameArt = `        <div className="lx-game-art mt-2">
              {index === active ? (
                <ImageCard src={'/images/Game_Play (1).png'} alt={title} className="rounded-sm" />
              ) : (
                <i>
                  <GameController size={34} weight="duotone" />
                </i>
              )}
              <strong className="block mt-2">{title.split(" ").slice(0, 2).join(" ")}</strong>
            </div>`;

if (s.includes(oldGameArt)) {
  s = s.replace(oldGameArt, newGameArt);
} else {
  console.log('old game art snippet not found; skipping replacement');
}

// Replace FinalCTA's KioskVisual compact with a small card next to it
if (s.includes('<KioskVisual compact />')) {
  s = s.replace('<KioskVisual compact />', `<div className="flex items-center gap-4">\n        <KioskVisual compact />\n        <div className=\"hidden md:block\">\n          <ImageCard src=\"/images/Kiosk_Machine_With Embalem (3).png\" alt=\"Kiosk visual\" />\n        </div>\n      </div>`);
} else {
  console.log('KioskVisual compact not found');
}

fs.writeFileSync(p, s, 'utf8');
console.log('Patched ProductSections: added ImageCard import, updated FeaturedGames and FinalCTA');
