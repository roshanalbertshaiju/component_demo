"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, Check, ChevronRight, ShieldCheck } from "lucide-react";

export type WatchStandTheme = "nero-marquina" | "none";

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

/**
 * Architectural Swiss Boutique Display Module (Nero Marquina Plinth, Alcantara Cushion, & Recessed Plaque)
 */
function LuxuryBoutiqueStandSVG({
  uid,
  brand,
  reference,
  active,
}: {
  uid: string;
  brand: string;
  reference?: string;
  active: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 440"
      className="pointer-events-none absolute inset-0 size-full overflow-visible"
    >
      <defs>
        {/* Contact Shadow on the Vitrine Shelf */}
        <filter id={`${uid}-ground-shadow`} x="-40%" y="-40%" width="180%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={active ? "9" : "6"} />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.65 0" />
        </filter>

        {/* Nero Marquina Marble Polished Gradients */}
        <linearGradient id={`${uid}-marble-bevel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#35383F" />
          <stop offset="25%" stopColor="#25272C" />
          <stop offset="100%" stopColor="#141518" />
        </linearGradient>

        <linearGradient id={`${uid}-marble-face`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E2024" />
          <stop offset="10%" stopColor="#121316" />
          <stop offset="90%" stopColor="#0A0B0D" />
          <stop offset="100%" stopColor="#040405" />
        </linearGradient>

        {/* Brushed Gold / Brass Plaque */}
        <linearGradient id={`${uid}-brass-plaque`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8A6321" />
          <stop offset="28%" stopColor="#ECCB73" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="72%" stopColor="#D9A842" />
          <stop offset="100%" stopColor="#734D13" />
        </linearGradient>

        {/* Alcantara Dark Charcoal Cushion */}
        <radialGradient id={`${uid}-alcantara`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#2C2E35" />
          <stop offset="60%" stopColor="#1B1C20" />
          <stop offset="100%" stopColor="#0E0F12" />
        </radialGradient>
      </defs>

      {/* 1. GROUND CONTACT SHADOW */}
      <ellipse
        cx="140"
        cy="406"
        rx={active ? "96" : "84"}
        ry="14"
        filter={`url(#${uid}-ground-shadow)`}
        opacity={active ? "0.85" : "0.6"}
        className="transition-all duration-300"
      />

      {/* 2. THE ALCANTARA WATCH PILLOW (Embraces the watch from behind) */}
      <g className="transition-transform duration-300">
        {/* Pillow Base Form */}
        <rect
          x="75"
          y="110"
          width="130"
          height="195"
          rx="52"
          fill={`url(#${uid}-alcantara)`}
          stroke="#000000"
          strokeWidth="1.5"
        />

        {/* Cushion Highlight Rim */}
        <rect
          x="77"
          y="112"
          width="126"
          height="191"
          rx="50"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.08"
          strokeWidth="1.2"
        />

        {/* Recessed Center Groove where the watch case is seated */}
        <ellipse cx="140" cy="205" rx="52" ry="72" fill="#060608" fillOpacity="0.65" filter="blur(3px)" />

        {/* Lower Pillow Support Cradle */}
        <path
          d="M84,286 C100,308 180,308 196,286 L194,320 C182,330 98,330 86,320 Z"
          fill="#121316"
          stroke="#000000"
          strokeWidth="1"
        />

        {/* Architectural Pedestal Stem Collar connecting cushion directly to plinth */}
        <path
          d="M96,318 L184,318 L194,349 L86,349 Z"
          fill={`url(#${uid}-marble-bevel)`}
          stroke="#0A0B0D"
          strokeWidth="0.8"
        />
        {/* Upper collar rim highlight */}
        <line
          x1="97"
          y1="319"
          x2="183"
          y2="319"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        {/* Lower plinth landing edge shadow */}
        <line x1="86" y1="348.5" x2="194" y2="348.5" stroke="#000000" strokeOpacity="0.6" strokeWidth="1.2" />
      </g>

      {/* 3. SOLID BEVELED BASE PLINTH (Nero Marquina Polished Black Marble) */}
      <g>
        {/* Top Beveled Chamfer Plate */}
        <polygon
          points="48,348 232,348 242,362 38,362"
          fill={`url(#${uid}-marble-bevel)`}
          stroke="#383C44"
          strokeWidth="0.8"
        />
        {/* Specular Edge Highlight */}
        <line x1="49" y1="349" x2="231" y2="349" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1" />

        {/* Front Marble Block Face */}
        <rect
          x="38"
          y="362"
          width="204"
          height="40"
          rx="1.5"
          fill={`url(#${uid}-marble-face)`}
          stroke="#070708"
          strokeWidth="1"
        />

        {/* Hand-Detailed White Calcite Marble Veins */}
        <path
          d="M52,398 Q72,382 105,388 T152,374 T198,382"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.3"
          strokeWidth="0.9"
          filter="blur(0.3px)"
        />
        <path
          d="M60,400 Q80,386 112,390"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.15"
          strokeWidth="0.6"
        />
        <path
          d="M174,372 Q194,379 224,376"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
          strokeWidth="0.7"
        />

        {/* 4. INSET BRUSHED BRASS REFERENCE PLAQUE */}
        <g>
          {/* Recessed Plaque Border */}
          <rect
            x="76"
            y="369"
            width="128"
            height="24"
            rx="2.5"
            fill={`url(#${uid}-brass-plaque)`}
            stroke="#402B08"
            strokeWidth="0.6"
            style={{
              filter: active ? "drop-shadow(0 0 6px rgba(245, 158, 11, 0.4))" : undefined,
            }}
          />
          {/* Top highlight line */}
          <line x1="78" y1="370.5" x2="202" y2="370.5" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="0.8" />

          {/* Micro horology screws at the plaque corners */}
          <circle cx="81.5" cy="374" r="1.1" fill="#4B330B" />
          <circle cx="81.5" cy="374" r="0.7" fill="#ECCB73" />
          <line x1="80.8" y1="374" x2="82.2" y2="374" stroke="#4B330B" strokeWidth="0.3" />

          <circle cx="198.5" cy="374" r="1.1" fill="#4B330B" />
          <circle cx="198.5" cy="374" r="0.7" fill="#ECCB73" />
          <line x1="197.8" y1="374" x2="199.2" y2="374" stroke="#4B330B" strokeWidth="0.3" />

          <circle cx="81.5" cy="387.5" r="1.1" fill="#4B330B" />
          <circle cx="81.5" cy="387.5" r="0.7" fill="#ECCB73" />
          <line x1="80.8" y1="387.5" x2="82.2" y2="387.5" stroke="#4B330B" strokeWidth="0.3" />

          <circle cx="198.5" cy="387.5" r="1.1" fill="#4B330B" />
          <circle cx="198.5" cy="387.5" r="0.7" fill="#ECCB73" />
          <line x1="197.8" y1="387.5" x2="199.2" y2="387.5" stroke="#4B330B" strokeWidth="0.3" />

          {/* Micro-Engraved Brand & Reference */}
          <text
            x="140"
            y="379"
            fontFamily="monospace"
            fontSize="6.8"
            fontWeight="bold"
            letterSpacing="0.16em"
            fill="#1A1204"
            textAnchor="middle"
          >
            {brand.toUpperCase()}
          </text>
          <text
            x="140"
            y="388"
            fontFamily="monospace"
            fontSize="5.6"
            letterSpacing="0.08em"
            fill="#3B2909"
            textAnchor="middle"
          >
            {reference ?? "HAUTE HORLOGERIE"}
          </text>
        </g>
      </g>
    </svg>
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
        <div className="mx-auto flex w-max items-end justify-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4.5 pb-6 pt-3">
          {items.map((item, i) => {
            const isSelected = active === i;
            const isNoStand = standTheme === "none";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => open(i)}
                onMouseEnter={() => {
                  setPlaying(false);
                  setActive(i);
                }}
                className={`group relative flex shrink-0 cursor-pointer flex-col items-center justify-end rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ${
                  isNoStand
                    ? "h-[290px] w-[130px] sm:h-[320px] sm:w-[145px] md:h-[350px] md:w-[155px] lg:h-[370px] lg:w-[165px]"
                    : "h-[340px] w-[130px] sm:h-[370px] sm:w-[145px] md:h-[400px] md:w-[155px] lg:h-[420px] lg:w-[165px] xl:h-[440px] xl:w-[172px]"
                }`}
              >
                {/* Visual Elevation Transition */}
                <div
                  className={`relative flex size-full flex-col items-center justify-end transition-all duration-500 ease-out ${
                    !isNoStand
                      ? isSelected
                        ? "-translate-y-4 scale-[1.05]"
                        : "translate-y-0 scale-100 opacity-85 hover:opacity-100 hover:-translate-y-1.5"
                      : ""
                  }`}
                  style={isNoStand ? { perspective: "1000px" } : undefined}
                >
                  {/* Stand SVG (Nero Marquina Marble) */}
                  {!isNoStand && (
                    <LuxuryBoutiqueStandSVG
                      uid={`${uid}-${i}`}
                      brand={item.brand}
                      reference={item.reference ?? item.tag}
                      active={isSelected}
                    />
                  )}

                  {/* High-Resolution Normalized Watch Cutout with 3D Rotation (Turned 38° at rest, 0° on hover) */}
                  <div
                    className={`relative flex items-center justify-center pointer-events-none transition-all duration-500 ${
                      isNoStand
                        ? "mb-4 sm:mb-5 md:mb-6 size-[135px] sm:size-[150px] md:size-[165px] lg:size-[175px]"
                        : "mb-[4.8rem] sm:mb-[5.2rem] md:mb-[5.6rem] lg:mb-[6rem] xl:mb-[6.3rem] size-[124px] sm:size-[138px] md:size-[148px] lg:size-[158px] xl:size-[165px]"
                    }`}
                    style={
                      isNoStand
                        ? {
                            transform: isSelected
                              ? "perspective(1000px) rotateY(0deg) scale(1.08) translateY(-14px)"
                              : "perspective(1000px) rotateY(-38deg) scale(0.92)",
                            transformOrigin: "center center",
                            transition:
                              "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, filter 450ms ease",
                            opacity: isSelected ? 1 : 0.8,
                            filter: isSelected ? "brightness(1.03)" : "brightness(0.92)",
                          }
                        : undefined
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      draggable={false}
                      className="size-full select-none object-contain transition-transform duration-300"
                      style={{
                        filter: isNoStand
                          ? isSelected
                            ? "drop-shadow(0 12px 18px rgba(0,0,0,0.22))"
                            : "drop-shadow(0 6px 10px rgba(0,0,0,0.12))"
                          : isSelected
                          ? "drop-shadow(0 20px 24px rgba(0,0,0,0.65)) drop-shadow(0 6px 8px rgba(0,0,0,0.35))"
                          : "drop-shadow(0 14px 16px rgba(0,0,0,0.45))",
                      }}
                    />

                    {/* Dynamic Sapphire Crystal Glare Sweep */}
                    <span
                      className={`pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-transparent via-white/35 to-blue-200/15 blur-[1.5px] transition-opacity duration-500 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Price Pill Below Base */}
                <span
                  className={`mt-2 font-mono text-[11px] sm:text-xs font-semibold transition-colors duration-300 ${
                    isSelected ? "text-amber-500" : "text-muted-foreground"
                  }`}
                >
                  {item.tag ?? item.brand}
                </span>
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
