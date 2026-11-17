"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, Check, ChevronRight, ShieldCheck } from "lucide-react";

export type WatchStandTheme = "nero-marquina" | "cognac-leather" | "brushed-platinum" | "walnut-vines";

export interface HorologySpecs {
  calibre?: string;
  frequency?: string;
  powerReserve?: string;
  jewels?: string;
  waterResistance?: string;
  diameter?: string;
  thickness?: string;
}

export interface WatchItem {
  id: string;
  name: string;
  brand: string;
  reference?: string;
  tag?: string;
  description?: string;
  image: string;
  details?: string[];
  specs?: HorologySpecs;
}

export interface WatchRailHeroProps extends React.ComponentProps<"section"> {
  items: WatchItem[];
  eyebrow?: string;
  heading?: string;
  caption?: string;
  action?: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  standTheme?: WatchStandTheme;
  onOpenChange?: (index: number | null) => void;
}

const STAND_ASSETS: Record<
  WatchStandTheme,
  {
    image: string;
    plaqueTop: string;
    plaqueHeight: string;
    plaqueWidth: string;
    brandColor: string;
    refColor: string;
    textShadow: string;
  }
> = {
  "nero-marquina": {
    image: "/watches/stands/stand-nero-marquina.png",
    plaqueTop: "74.8%",
    plaqueHeight: "8.5%",
    plaqueWidth: "33%",
    brandColor: "#221603",
    refColor: "#422E0C",
    textShadow: "0 1px 0 rgba(255, 238, 195, 0.45)",
  },
  "cognac-leather": {
    image: "/watches/stands/stand-cognac-leather.png",
    plaqueTop: "75.0%",
    plaqueHeight: "8.5%",
    plaqueWidth: "38%",
    brandColor: "#221503",
    refColor: "#422D0A",
    textShadow: "0 1px 0 rgba(255, 240, 205, 0.45)",
  },
  "brushed-platinum": {
    image: "/watches/stands/stand-brushed-platinum.png",
    plaqueTop: "75.2%",
    plaqueHeight: "6.8%",
    plaqueWidth: "51%",
    brandColor: "#181A1D",
    refColor: "#3E434D",
    textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
  },
  "walnut-vines": {
    image: "/watches/stands/stand-walnut-vines.png",
    plaqueTop: "73.8%",
    plaqueHeight: "9.2%",
    plaqueWidth: "34%",
    brandColor: "#201402",
    refColor: "#402B08",
    textShadow: "0 1px 0 rgba(255, 240, 205, 0.45)",
  },
};

/**
 * Photorealistic Swiss Vitrine Pedestal Display Module
 * Authentic Alcantara Cushion, Turned Column, Grounded Solid Plinth, & Laser-Engraved Plaque
 */
function LuxuryBoutiqueStand({
  theme,
  brand,
  reference,
  active,
}: {
  theme: WatchStandTheme;
  brand: string;
  reference?: string;
  active: boolean;
}) {
  const config = STAND_ASSETS[theme] ?? STAND_ASSETS["nero-marquina"];

  return (
    <div className="pointer-events-none absolute inset-0 size-full select-none">
      {/* 1. Photorealistic 3D Stand Render */}
      <img
        src={config.image}
        alt={`${brand} Luxury Watch Stand`}
        draggable={false}
        className="pointer-events-none absolute inset-0 size-full select-none object-contain transition-all duration-500"
        style={{
          filter: active
            ? "drop-shadow(0 24px 30px rgba(0,0,0,0.58)) drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
            : "drop-shadow(0 14px 18px rgba(0,0,0,0.38))",
        }}
      />

      {/* 2. Precision Laser-Engraved Plaque Overlay */}
      <div
        className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 flex-col items-center justify-center text-center px-1 overflow-hidden transition-all duration-300"
        style={{
          top: config.plaqueTop,
          height: config.plaqueHeight,
          width: config.plaqueWidth,
        }}
      >
        <span
          className="w-full truncate font-mono text-[8px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] font-bold uppercase tracking-[0.16em] leading-tight"
          style={{
            color: config.brandColor,
            textShadow: config.textShadow,
          }}
        >
          {brand}
        </span>
        <span
          className="w-full truncate font-mono text-[6px] sm:text-[6.8px] md:text-[7.4px] lg:text-[7.8px] font-semibold tracking-[0.06em] leading-tight opacity-90 mt-0.5"
          style={{
            color: config.refColor,
            textShadow: config.textShadow,
          }}
        >
          {reference ?? "HAUTE HORLOGERIE"}
        </span>
      </div>
    </div>
  );
}

export function WatchRailHero({
  items,
  eyebrow,
  heading,
  caption,
  action,
  autoplay = false,
  interval = 3500,
  standTheme = "nero-marquina",
  onOpenChange,
  className,
  ...rest
}: WatchRailHeroProps) {
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const count = items.length;
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState<number | null>(0);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [playing, setPlaying] = React.useState(autoplay);

  // Autoplay progression
  React.useEffect(() => {
    if (!playing || count === 0) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev === null ? 0 : (prev + 1) % count));
    }, interval);
    return () => window.clearInterval(timer);
  }, [playing, count, interval]);

  const open = (index: number) => {
    setPlaying(false);
    setActive(index);
    setOpenIndex(index);
    onOpenChange?.(index);
  };

  const close = () => {
    setOpenIndex(null);
    onOpenChange?.(null);
  };

  const current = active !== null && items[active] ? items[active] : items[0];

  return (
    <section
      {...rest}
      data-slot="luxury-watch-vitrine"
      className={`relative isolate w-full overflow-hidden bg-background text-foreground ${className ?? ""}`}
    >
      {/* 1. BOUTIQUE SPOTLIGHTING & AMBIENT VITRINE SHADOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(110% 60% at 50% 15%, color-mix(in oklab, var(--color-foreground) 9%, transparent), transparent 75%), linear-gradient(to bottom, transparent 60%, color-mix(in oklab, var(--color-foreground) 4%, transparent))",
        }}
      />

      {(eyebrow || heading) && (
        <header className="relative z-10 flex flex-col items-center gap-2 px-6 pt-8 text-center">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-balance font-serif text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
          )}
        </header>
      )}

      {/* 2. THE MAIN HOROLOGICAL VITRINE SHOWCASE */}
      <div
        ref={stageRef}
        className="relative mt-8 w-full overflow-x-auto py-10 px-4 sm:px-8 no-scrollbar touch-pan-x"
        onPointerLeave={() => setPlaying(autoplay)}
      >
        {/* Recessed Illuminated Runner Track */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-12 z-0">
          <div className="mx-auto h-5 bg-gradient-to-r from-transparent via-amber-500/15 to-transparent blur-md" />
          <div className="mx-auto h-[2.5px] w-full bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
          <div className="mx-auto mt-0.5 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        </div>

        {/* Timepieces Container with Precision Luxury Spacing */}
        <div className="mx-auto flex w-max items-end justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-6 pt-3 px-4">
          {items.map((item, i) => {
            const isSelected = active === i;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => open(i)}
                onMouseEnter={() => {
                  setPlaying(false);
                  setActive(i);
                }}
                className="group relative flex w-[180px] sm:w-[205px] md:w-[225px] lg:w-[245px] xl:w-[260px] shrink-0 cursor-pointer flex-col items-center justify-end rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring pb-1"
              >
                {/* Visual Elevation Transition */}
                <div
                  className={`relative flex w-full aspect-square flex-col items-center justify-center transition-all duration-500 ease-out ${
                    isSelected
                      ? "-translate-y-4 scale-[1.04]"
                      : "translate-y-0 scale-100 opacity-90 hover:opacity-100 hover:-translate-y-1.5 hover:scale-[1.02]"
                  }`}
                >
                  {/* Stand (Nero Marquina Marble / Cognac Leather / Platinum / Walnut) */}
                  <LuxuryBoutiqueStand
                    theme={standTheme}
                    brand={item.brand}
                    reference={item.reference ?? item.tag}
                    active={isSelected}
                  />

                  {/* Timepiece Seated on Cushion */}
                  <div
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                    style={{
                      width: "44%",
                      height: "61.6%",
                      top: "2%",
                    }}
                  >
                    {/* Cushion Ambient Contact Occlusion Shadow */}
                    <img
                      src={item.image}
                      aria-hidden="true"
                      alt=""
                      className="absolute size-full select-none object-contain blur-[8px] brightness-0 opacity-65 translate-y-2.5 transition-all duration-300"
                    />

                    {/* High-Resolution Normalized Watch Cutout */}
                    <img
                      src={item.image}
                      alt={item.name}
                      draggable={false}
                      className="relative size-full select-none object-contain transition-transform duration-300"
                      style={{
                        filter: isSelected
                          ? "drop-shadow(0 18px 22px rgba(0,0,0,0.62)) drop-shadow(0 4px 6px rgba(0,0,0,0.35))"
                          : "drop-shadow(0 10px 14px rgba(0,0,0,0.42))",
                      }}
                    />

                    {/* Dynamic Sapphire Crystal Glare Sweep across dial */}
                    <span
                      className={`pointer-events-none absolute top-[16%] size-[54%] rounded-full bg-gradient-to-tr from-transparent via-white/35 to-blue-200/20 blur-[1.5px] transition-all duration-700 ${
                        isSelected ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    />
                  </div>
                </div>

                {/* Price & Brand Sub-Pill Below Base */}
                <div className="mt-2.5 flex flex-col items-center gap-0.5">
                  <span
                    className={`font-mono text-xs sm:text-[13px] font-semibold transition-colors duration-300 ${
                      isSelected ? "text-amber-500 font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {item.tag ?? item.brand}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground/70">
                    {item.brand}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. ACTIVE TIMEPIECE CAPTION & ACTION */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-8 pt-2 text-center">
        <div className="min-h-[3.5rem]">
          <p className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {current?.brand} · {current?.name}
          </p>
          {current?.description && (
            <p className="mx-auto mt-1.5 max-w-[52ch] text-xs leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          )}
        </div>
        {action}
      </div>

      {/* 4. HIGH-PRECISION HOROLOGICAL OPTICAL LOUPE MODAL */}
      {openIndex !== null && items[openIndex] && (
        <HorologicalLoupeModal
          item={items[openIndex]}
          index={openIndex}
          total={count}
          onClose={close}
        />
      )}
    </section>
  );
}

/**
 * 2.8× Optical Magnifying Loupe Modal with Dial Inspection
 */
function HorologicalLoupeModal({
  item,
  index,
  total,
  onClose,
}: {
  item: WatchItem;
  index: number;
  total: number;
  onClose: () => void;
}) {
  const [loupe, setLoupe] = React.useState({ active: false, x: 0, y: 0, bgX: 0, bgY: 0 });
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const bgX = (x / box.width) * 100;
    const bgY = (y / box.height) * 100;
    setLoupe({ active: true, x, y, bgX, bgY });
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-6 text-foreground"
    >
      {/* Blurred Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/92 backdrop-blur-2xl transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-4 py-1.5 text-xs font-mono tracking-wider text-muted-foreground shadow-sm transition hover:text-foreground"
      >
        Close Loupe
        <X className="size-3.5" />
      </button>

      {/* Inspection Stage */}
      <div className="relative z-10 grid w-full max-w-5xl items-center gap-10 pt-6 md:grid-cols-2">
        {/* Watch Image Stage with Cursor-Tracking Magnifier */}
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setLoupe((l) => ({ ...l, active: true }))}
          onPointerLeave={() => setLoupe((l) => ({ ...l, active: false }))}
          className="relative mx-auto aspect-[3/4] h-[min(65vh,520px)] w-auto max-w-full cursor-crosshair select-none"
        >
          <img
            src={item.image}
            alt={item.name}
            className="size-full object-contain p-4"
            style={{
              filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.6))",
            }}
          />

          {/* Optical Loupe Lens */}
          {loupe.active && (
            <div
              className="pointer-events-none absolute size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400 shadow-[0_0_40px_rgba(0,0,0,0.85)]"
              style={{
                left: loupe.x,
                top: loupe.y,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "280%",
                backgroundPosition: `${loupe.bgX}% ${loupe.bgY}%`,
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Reticle / Crosshair */}
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/20" />
              <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-white/20" />
              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest text-amber-300 drop-shadow">
                2.8× Loupe
              </span>
            </div>
          )}
        </div>

        {/* Horological Specifications */}
        <div className="flex flex-col gap-4 text-left">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {item.brand}
            </p>
            <h3 className="mt-1 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              {item.name}
            </h3>
            {item.tag && (
              <p className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground">
                {item.tag}
              </p>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          {/* Manufacture Specs Grid */}
          <div className="mt-2 grid grid-cols-2 gap-3.5 rounded-2xl border border-border bg-card/60 p-5 text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase text-muted-foreground">Manufacture Calibre</span>
              <p className="font-semibold text-foreground mt-0.5">{item.specs?.calibre ?? "Calibre 3120"}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-muted-foreground">Power Reserve</span>
              <p className="font-semibold text-foreground mt-0.5">{item.specs?.powerReserve ?? "60 Hours"}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-muted-foreground">Escapement Frequency</span>
              <p className="font-semibold text-foreground mt-0.5">{item.specs?.frequency ?? "28,800 vph (4 Hz)"}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-muted-foreground">Water Resistance</span>
              <p className="font-semibold text-foreground mt-0.5">{item.specs?.waterResistance ?? "100 m / 330 ft"}</p>
            </div>
          </div>

          {/* Details List */}
          {item.details && item.details.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.details.map((detail) => (
                <span
                  key={detail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1 text-xs text-muted-foreground"
                >
                  <Check className="size-3 text-amber-500" />
                  {detail}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default WatchRailHero;
