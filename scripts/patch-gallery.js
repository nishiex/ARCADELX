const fs = require("fs");
const path = require("path");
const p = path.join("components","sections","ProductSections.tsx");
let s = fs.readFileSync(p, "utf8");

// Insert ImageCard and Swiper imports if missing
if (!s.includes("import ImageCard from \"../ui/ImageCard\";")) {
  s = s.replace(/(import \{ KioskVisual, MotionGradient \} from \"\.\/Hero\";\s*import \{ SectionHeading, NeonButton \} from \"\.\.\/ui\/ArcadePrimitives\";)/m, "$1\nimport ImageCard from \"../ui/ImageCard\";\nimport { Swiper, SwiperSlide } from 'swiper/react';");
}

const startToken = 'export function Gallery() {';
const nextToken = 'export function VideoSection() {';
const start = s.indexOf(startToken);
if (start === -1) { console.error('could not find Gallery start'); process.exit(1); }
const next = s.indexOf(nextToken, start);
if (next === -1) { console.error('could not find VideoSection start'); process.exit(1); }

const newGallery = `export function Gallery() {
  const [active, setActive] = useState("All");
  const track = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const galleryImages: Record<string, string[]> = {
    kiosk: ['/images/Kiosk_Machine_With Embalem (2).png','/images/Kiosk_Machine_With Embalem (3).png'],
    'in-action': ['/images/Game_Play (1).png'],
    events: ['/images/Catalog (1).png','/images/Payment_Gatewayt (3).png','/images/Calibration_Page (1).png']
  };

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches);
  }, []);

  useEffect(() => {
    const trackElement = track.current;
    if (!trackElement) return;
    const cards = trackElement.querySelectorAll('.lx-gallery-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18, clipPath: 'inset(0 0 16% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.55, stagger: 0.08, ease: 'power3.out' }
    );
    return () => gsap.killTweensOf(cards);
  }, [active]);

  if (isMobile) {
    const allImages = Object.values(galleryImages).flat();
    return (
      <section className="lx-gallery lx-scroll-reveal px-[40px] py-[110px]" id="gallery">
        <div className="lx-section-heading lx-gallery-heading flex items-end justify-between mb-[58px]">
          <div>
            <p className="lx-eyebrow text-[11px] tracking-[0.15em] uppercase text-[var(--cyan)]">Gallery</p>
            <h2 className="text-[clamp(2.8rem,4.7vw,5rem)] font-normal">Explore ArcadeLX<br /><em>from every angle.</em></h2>
          </div>
          <div className="lx-filter-row flex gap-2">
            {['All', 'Kiosk', 'Setup', 'In action', 'Events'].map((filter) => (
              <button className={active === filter ? 'is-active' : ''} key={filter} onClick={() => setActive(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="lx-gallery-track">
          <Swiper slidesPerView={1} spaceBetween={12} className="w-full">
            {allImages.map((src, i) => (
              <SwiperSlide key={src + i} className="px-1">
                <div className="p-2">
                  <ImageCard src={src} alt={`Gallery ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  const items = galleryItems.filter(
    ({ category }) =>
      active === 'All' ||
      active.toLowerCase().replace(' ', '-') === category ||
      (active === 'Setup' && category === 'kiosk'),
  );

  return (
    <section className="lx-gallery lx-scroll-reveal px-[40px] py-[110px]" id="gallery">
      <div className="lx-section-heading lx-gallery-heading flex items-end justify-between mb-[58px]">
        <div>
          <p className="lx-eyebrow text-[11px] tracking-[0.15em] uppercase text-[var(--cyan)]">Gallery</p>
          <h2 className="text-[clamp(2.8rem,4.7vw,5rem)] font-normal">Explore ArcadeLX<br /><em>from every angle.</em></h2>
        </div>
        <div className="lx-filter-row flex gap-2">
          {['All', 'Kiosk', 'Setup', 'In action', 'Events'].map((filter) => (
            <button className={active === filter ? 'is-active' : ''} key={filter} onClick={() => setActive(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="lx-gallery-track flex gap-[12px] overflow-x-auto" ref={track}>
        {items.map(({ label, title, category }, index) => {
          const imgs = galleryImages[category as string] ?? [];
          const src = imgs[index % imgs.length] ?? imgs[0] ?? '/images/Kiosk_Machine_With Embalem (2).png';
          return (
            <div className={`lx-gallery-card gallery-${index + 1} ${category} min-w-[280px] p-[16px] bg-[rgba(255,255,255,0.02)]`} key={label}>
              <ImageCard src={src} alt={title} label={label} title={title} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
`;

const out = s.slice(0, start) + newGallery + s.slice(next);
fs.writeFileSync(p, out, "utf8");
console.log('ProductSections.tsx patched (Gallery updated).');
