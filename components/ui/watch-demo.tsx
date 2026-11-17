"use client";

import * as React from "react";
import WatchRailHero, {
  type WatchItem,
  type WatchStandTheme,
} from "@/components/ui/watch-rail-gallery";
import {
  ShoppingBag,
  Sparkles,
  Play,
  Pause,
  Check,
  Compass,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

export const REAL_LUXURY_WATCHES: WatchItem[] = [
  {
    id: "royal-oak-chrono",
    brand: "Audemars Piguet",
    name: "Royal Oak Chronograph · Steel & Slate",
    reference: "REF. 26331ST.OO",
    tag: "$38,500",
    image: "/watches/normalized/watch-1.png",
    description: "Iconic hand-finished octagonal bezel with 8 hexagonal white-gold screws, integrated steel link bracelet, and dark ruthenium 'Grande Tapisserie' tri-compax dial.",
    details: ["39 mm stainless steel case", "Thickness 8.1 mm", "Grande Tapisserie motif", "Integrated folding clasp"],
    specs: {
      calibre: "Calibre 2385 Automatic",
      frequency: "21,600 vph (3 Hz)",
      powerReserve: "40 Hours",
      jewels: "37 Jewels",
      waterResistance: "50 m / 165 ft",
      diameter: "39 mm",
      thickness: "8.1 mm",
    },
  },
  {
    id: "patek-complications",
    brand: "Patek Philippe",
    name: "Grand Complications · Platinum",
    reference: "REF. 5270P-001",
    tag: "$98,400",
    image: "/watches/normalized/watch-2.png",
    description: "High-horology perpetual calendar chronograph in solid 950 platinum with opaline silver dial, moon phase disc, and fluted lugs.",
    details: ["950 Platinum 41mm", "Interchangeable solid and sapphire backs", "Hallmark of Geneva", "Hand-stitched alligator strap"],
    specs: {
      calibre: "Calibre CH 29-535 PS Q",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "65 Hours",
      jewels: "33 Jewels",
      waterResistance: "30 m / 100 ft",
      diameter: "41 mm",
      thickness: "12.4 mm",
    },
  },
  {
    id: "submariner-date",
    brand: "Rolex",
    name: "Submariner Date · Cerachrom Noir",
    reference: "REF. 126610LN",
    tag: "$10,250",
    image: "/watches/normalized/watch-3.png",
    description: "The archetypal maritime tool watch featuring unidirectional 60-minute Cerachrom ceramic bezel, Chromalight luminescent display, and Oysterlock clasp with Glidelock extension.",
    details: ["Oystersteel 41mm", "Unidirectional ceramic bezel", "Triplock triple waterproofness", "Chromalight blue glow"],
    specs: {
      calibre: "Rolex Calibre 3235",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "70 Hours",
      jewels: "31 Jewels",
      waterResistance: "300 m / 1,000 ft",
      diameter: "41 mm",
      thickness: "12.3 mm",
    },
  },
  {
    id: "overseas-blue",
    brand: "Vacheron Constantin",
    name: "Overseas Automatic · Deep Blue",
    reference: "REF. 4500V/110A",
    tag: "$25,000",
    image: "/watches/normalized/watch-4.png",
    description: "Six-sided bezel inspired by the symbolic Maltese cross, translucent blue lacquered dial with velvet-finish flange, and column-wheel rotor visible through exhibition sapphire.",
    details: ["Stainless Steel 41mm", "Interchangeable bracelet/strap system", "Soft iron anti-magnetic ring", "Hallmark of Geneva certified"],
    specs: {
      calibre: "Calibre 5100 Manufacture",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "60 Hours",
      jewels: "37 Jewels",
      waterResistance: "150 m / 500 ft",
      diameter: "41 mm",
      thickness: "11.0 mm",
    },
  },
  {
    id: "speedmaster-moon",
    brand: "Omega",
    name: "Speedmaster Professional Moonwatch",
    reference: "REF. 310.30.42.50",
    tag: "$7,600",
    image: "/watches/normalized/watch-5.png",
    description: "The official spaceflight watch qualified by NASA for all manned space missions and all six lunar landings, powered by the Co-Axial Master Chronometer calibre 3861.",
    details: ["Co-Axial Master Chronometer", "Sapphire sandwich construction", "Asymmetrical 42mm case", "Antimagnetic to 15,000 gauss"],
    specs: {
      calibre: "Omega Calibre 3861 Manual",
      frequency: "21,600 vph (3 Hz)",
      powerReserve: "50 Hours",
      jewels: "26 Jewels",
      waterResistance: "50 m / 165 ft",
      diameter: "42 mm",
      thickness: "13.2 mm",
    },
  },
  {
    id: "portugieser-chrono",
    brand: "IWC Schaffhausen",
    name: "Portugieser Chronograph · Midnight Blue",
    reference: "REF. IW371605",
    tag: "$8,400",
    image: "/watches/normalized/watch-6.png",
    description: "Pure, timeless open dial with two recessed sub-dials, applied Arabic numerals, and slender feuille hands within a precision-engineered steel bezel.",
    details: ["Stainless Steel 41mm", "Automatic column-wheel chronograph", "Ardoise midnight dial", "Santoni alligator leather"],
    specs: {
      calibre: "IWC Calibre 69355",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "46 Hours",
      jewels: "27 Jewels",
      waterResistance: "30 m / 100 ft",
      diameter: "41 mm",
      thickness: "13.1 mm",
    },
  },
  {
    id: "santos-cartier",
    brand: "Cartier",
    name: "Santos de Cartier · Large Model",
    reference: "REF. WSSA0018",
    tag: "$7,750",
    image: "/watches/normalized/watch-7.png",
    description: "Pioneering aviation wristwatch with geometric bezel punctuated with exposed screws, silvered opaline dial with Roman numerals, and QuickSwitch interchangeable bracelet.",
    details: ["Steel 39.8mm", "SmartLink link adjustment system", "Synthetic blue spinel winding crown", "100m water resistance"],
    specs: {
      calibre: "Calibre 1847 MC Automatic",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "42 Hours",
      jewels: "23 Jewels",
      waterResistance: "100 m / 330 ft",
      diameter: "39.8 mm",
      thickness: "9.38 mm",
    },
  },
  {
    id: "carrera-heuer",
    brand: "TAG Heuer",
    name: "Carrera Calibre Heuer 02",
    reference: "REF. CBN2A1B.BA",
    tag: "$6,100",
    image: "/watches/normalized/watch-8.png",
    description: "Born on the race track for the Carrera Panamericana, featuring an in-house column-wheel chronograph movement with an impressive 80-hour power reserve.",
    details: ["Polished fine-brushed steel 42mm", "Tricompax dial layout", "Beveled domed sapphire crystal", "Column-wheel chronograph"],
    specs: {
      calibre: "Calibre Heuer 02 In-House",
      frequency: "28,800 vph (4 Hz)",
      powerReserve: "80 Hours",
      jewels: "33 Jewels",
      waterResistance: "100 m / 330 ft",
      diameter: "42 mm",
      thickness: "14.4 mm",
    },
  },
];

export default function WatchRailHeroDemo() {
  const [standTheme, setStandTheme] = React.useState<WatchStandTheme>("nero-marquina");
  const [autoplay, setAutoplay] = React.useState(true);
  const [cartCount, setCartCount] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [activeWatch, setActiveWatch] = React.useState<WatchItem | null>(REAL_LUXURY_WATCHES[0]);
  const [toast, setToast] = React.useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  };

  const handleInquireOrAdd = (watch: WatchItem) => {
    const rawPrice = watch.tag?.replace(/[^0-9.]/g, "") ?? "20000";
    const numericPrice = parseFloat(rawPrice) || 20000;
    setCartCount((c) => c + 1);
    setCartTotal((t) => t + numericPrice);
    showToast(`Acquisition Inquired: ${watch.brand} ${watch.name} (${watch.tag})`);
  };

  return (
    <div className="w-full text-foreground pb-12">
      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-amber-500/40 bg-card/95 px-5 py-3.5 text-sm font-medium text-card-foreground shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-amber-500 text-black">
            <Check className="size-3.5" />
          </span>
          <span>{toast}</span>
        </div>
      )}

      {/* Control Strip for Luxury Vitrine Customization */}
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-border/40 px-4 py-3 text-xs text-muted-foreground sm:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider text-foreground font-semibold">
            <SlidersHorizontal className="size-3.5 text-amber-500" />
            Stand Architecture:
          </span>
          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setStandTheme("nero-marquina")}
              className={`rounded-lg px-3 py-1 font-medium text-[11px] transition ${
                standTheme === "nero-marquina"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Nero Marquina Marble
            </button>
            <button
              type="button"
              onClick={() => setStandTheme("cognac-leather")}
              className={`rounded-lg px-3 py-1 font-medium text-[11px] transition ${
                standTheme === "cognac-leather"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cognac Saddle Leather
            </button>
            <button
              type="button"
              onClick={() => setStandTheme("brushed-platinum")}
              className={`rounded-lg px-3 py-1 font-medium text-[11px] transition ${
                standTheme === "brushed-platinum"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Platinum Ingot
            </button>
            <button
              type="button"
              onClick={() => setStandTheme("walnut-vines")}
              className={`rounded-lg px-3 py-1 font-medium text-[11px] transition ${
                standTheme === "walnut-vines"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              American Walnut
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAutoplay((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-medium text-card-foreground shadow-xs transition hover:bg-muted"
          >
            {autoplay ? <Pause className="size-3" /> : <Play className="size-3" />}
            {autoplay ? "Pause Vitrine" : "Autoplay"}
          </button>
          <span className="hidden items-center gap-1.5 font-mono text-[11px] text-amber-500/90 md:inline-flex">
            <Sparkles className="size-3.5 text-amber-500" />
            Hover to magnify with 2.8× optical loupe
          </span>
        </div>
      </section>

      {/* Watch Vitrine Rail Stage */}
      <main className="relative flex flex-col items-center justify-center py-4">
        <div className="w-full max-w-[1460px] px-2 sm:px-4">
          <WatchRailHero
            key={standTheme}
            items={REAL_LUXURY_WATCHES}
            standTheme={standTheme}
            autoplay={autoplay}
            interval={3400}
            eyebrow="Haute Horlogerie · Eight Certified Complications"
            heading="Precision horological vitrine with optical loupe inspector."
            caption="Scrub along the illuminated marble rail to tilt each timepiece into view, or click to inspect high-resolution dial mechanics."
            onOpenChange={(idx) => {
              if (idx !== null && REAL_LUXURY_WATCHES[idx]) {
                setActiveWatch(REAL_LUXURY_WATCHES[idx]);
              }
            }}
            action={
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    if (activeWatch) handleInquireOrAdd(activeWatch);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-lg outline-none transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0"
                >
                  <ShoppingBag className="size-4" />
                  Inquire Acquisition · {activeWatch?.tag ?? "$38,500"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const firstBtn = document.querySelector<HTMLButtonElement>("[data-slot='luxury-watch-vitrine'] button");
                    firstBtn?.click();
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-sm transition hover:bg-muted"
                >
                  Inspect with 2.8× Loupe
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            }
          />
        </div>

        {/* Selected Watch Horological Spec Sheet */}
        {activeWatch && (
          <section className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-500">
                      {activeWatch.brand}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="size-3.5" /> Certified Authentic
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
                    {activeWatch.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-3xl font-bold tracking-tight text-foreground">
                    {activeWatch.tag}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Insured white-glove delivery</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Horological Summary
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activeWatch.description}
                  </p>
                  {activeWatch.details && activeWatch.details.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeWatch.details.map((detail) => (
                        <span
                          key={detail}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                        >
                          <Check className="size-3 text-amber-500" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-border/80 bg-background/80 p-5 shadow-xs">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Movement Calibre
                  </h4>
                  <div className="mt-3.5 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Calibre:</span>
                      <span className="font-mono font-medium">{activeWatch.specs?.calibre ?? "Automatic"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power Reserve:</span>
                      <span className="font-mono font-medium">{activeWatch.specs?.powerReserve ?? "50h"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency:</span>
                      <span className="font-mono font-medium">{activeWatch.specs?.frequency ?? "28,800 vph"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Water Resistance:</span>
                      <span className="font-mono font-medium">{activeWatch.specs?.waterResistance ?? "100m"}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInquireOrAdd(activeWatch)}
                    className="mt-5 w-full rounded-xl bg-foreground py-2.5 text-xs font-medium text-background shadow-xs transition hover:opacity-90"
                  >
                    Request Boutique Allocation
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
