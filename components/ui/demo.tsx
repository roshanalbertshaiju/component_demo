"use client";

import * as React from "react";
import ClothingRailHero, {
  type RailGarment,
} from "@/components/ui/product-rail-gallery";
import {
  ShoppingBag,
  Sparkles,
  Play,
  Pause,
  Sun,
  Moon,
  Info,
  Check,
  Tag,
  Palette,
  Layers,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

/**
 * 1. Signature Cutout Collection (Transparent studio cutout assets)
 */
export const SIGNATURE_CUTOUT_ITEMS: RailGarment[] = [
  {
    id: "bone-tee",
    name: "Heavyweight tee · Bone",
    kind: "tee",
    color: "#EFEBE2",
    tag: "$48",
    description: "240 gsm organic cotton with a tonal DHxWHY embroidery on the chest.",
    details: ["240 gsm organic cotton", "Relaxed boxy silhouette", "Tonal chest embroidery", "Preshrunk vintage wash"],
    image: "https://cdn.21st.dev/assets/mirror/14/1485bf44725b18fcdba71bfae54d67d648ab3bff4b24215a042c0cc4c895a2e6.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/69/69937e656430ae33d950303e0d53051273e5b02189750ef1e7429ec4bbf95e20.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/83/838468c32f16b4acba62e4601276737411156052444712ff2534fefe994a7bed.webp",
  },
  {
    id: "cc-graphic",
    name: "Graphic tee · CCgather",
    kind: "tee",
    color: "#101214",
    tag: "$52",
    description: "Deep carbon tee with the CCgather studio wordmark screen-printed front and back.",
    details: ["240 gsm combed cotton", "High-density screen print", "Reinforced ribbed crew collar"],
    image: "https://cdn.21st.dev/assets/mirror/d7/d769f183472d0fd98a7aff2a643593748cd36ef9da1497d9bf6f0d87d1025a9b.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/fe/fec6f7e96b198cc5b9aad333ca2c4c10968a746d87f6dc11d9c118607b509058.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/b3/b3b6984ea94b8b8cd19fb15387e89dca457ac0f947115c2a54a33217e4fb4571.webp",
  },
  {
    id: "oxford-sky",
    name: "Oxford shirt · Sky",
    kind: "shirt",
    color: "#A3D3EB",
    tag: "$74",
    description: "Pale sky oxford with a structured button-down collar and tiny atelier embroidery.",
    details: ["100% long-staple cotton", "Mother-of-pearl buttons", "Chest pocket with pen sleeve"],
    image: "https://cdn.21st.dev/assets/mirror/47/470a7723cef068f81e8a4c09d1ab3f8630c61b734c2168b10f3858e45efbf31f.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/9b/9be14e5dce879756775677e2d82dadc2ad9a1690b7df2f82de360cb3600d0ee5.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/59/5984d5ca60fd1aeee7e688ec33c2219a1c537fcde90d2accab813c13985f8632.webp",
  },
  {
    id: "cardigan-olive",
    name: "Knit cardigan · Olive",
    kind: "knit",
    color: "#758151",
    tag: "$96",
    description: "Chunky olive wool cardigan with turned wooden buttons and deep ribbed trims.",
    details: ["100% Merino lambswool", "Natural walnut buttons", "Double-knit front placket"],
    image: "https://cdn.21st.dev/assets/mirror/58/581b13c5ca241c653dc94d2c8048c92a60f022cfbaaf153261076d3a6655827e.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/d9/d9178d906d37268565cf10af3431aee543aacfc73610f7fa7b0fa4758c498cb3.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/de/dee1c529600e0460413f1a9b07a29bedb7ea7dc96181fce5d9d6501231e6e45d.webp",
  },
  {
    id: "hoodie-heather",
    name: "Hoodie · Maestiq",
    kind: "hoodie",
    color: "#A0A5AB",
    tag: "$88",
    description: "Heather loopback fleece hoodie with dual-layer hood and kangaroo pass-through pocket.",
    details: ["420 gsm French terry", "Double-layered hood", "Braided cotton pull cords"],
    image: "https://cdn.21st.dev/assets/mirror/51/51750ba098dd622df46695bca781b3f0ec336a36b93b070e638cc04455def6d6.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e7/e75c4ac8fb7f14caae756338a31f81f1437bb312b78e0d7d906e9f956e7968fa.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/a2/a2eb2463d52146c341ede6bb9f6067e917a23eb29b7b1d1d4c40ac084a01c7ce.webp",
  },
  {
    id: "sweat-lilac",
    name: "Crewneck · Lilac",
    kind: "knit",
    color: "#CCB2E0",
    tag: "$78",
    description: "Muted lilac fleece crewneck with a textured tonal puff print on the back shoulder.",
    details: ["400 gsm combed fleece", "Drop shoulder cut", "Ribbed collar and cuffs"],
    image: "https://cdn.21st.dev/assets/mirror/8e/8e38660e2add9637c27846d9b8d620f2abb228a5a153ccfd7b1c808b6845e1f8.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/b9/b9214a6e009ce4b3044595a51ea010c299135bab5b26775c43d7175c86e77898.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/59/591872e42b483c43c1cd08a3ac4d7d40c0b5fa2bc585a36096faded2e696e84e.webp",
  },
  {
    id: "polo-forest",
    name: "Piqué polo · Forest",
    kind: "tee",
    color: "#185B37",
    tag: "$62",
    description: "Deep evergreen piqué polo with split tennis tail and tonal horn buttons.",
    details: ["Organic piqué knit", "Two-button horn placket", "Embroidered chest cipher"],
    image: "https://cdn.21st.dev/assets/mirror/19/19fe43cb681195ae227e3164088d86a07a1b6e33cc54c6e35637374736a16894.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e0/e095182b1a7f04e600c5662aa871b4c055c294b152586817d84e312c22f744cf.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/00/005a8e10be234bc40917f3153208b8196ba1610c53c987e39942da1f4a7cd808.webp",
  },
  {
    id: "henley-brick",
    name: "Henley · Brick",
    kind: "knit",
    color: "#B05139",
    tag: "$56",
    description: "Dusty brick slub cotton henley with three matte buttons and overlocked hems.",
    details: ["Textured slub jersey", "Three-button chest placket", "Garment dyed"],
    image: "https://cdn.21st.dev/assets/mirror/84/84aa4b0e21ed11fcbc083647a607b94ee3a6c21cb66c114cfb1dad0792c15499.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/01/01c299df56a29afca8dad4a64858bd506667338bfbd0435118e6c3698c7881b3.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/9c/9ca38eeb156aae7d199d3c1ffb7947e395f77d1f094eea006c1b5fbb22352b4e.webp",
  },
  {
    id: "breton",
    name: "Breton striped · Ink",
    kind: "knit",
    color: "#E4DFD3",
    tag: "$58",
    description: "Classic ink and bone Breton striped shirt with traditional boat neck.",
    details: ["220 gsm combed cotton", "Boat neckline", "Side seam vents"],
    image: "https://cdn.21st.dev/assets/mirror/09/096002a95aba7de9c197de4cb5c78cbbe17c1677b19c547cc20c6dbef47a899c.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/74/74408a7dbb4f4fc6761ebb8d6ed93187248cddf75e1c2e70d38d04dfdd328776.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/ed/eda3afca537071a80d7d82b3f0d1055b56f1f3263c20772224bae6660bf4072c.webp",
  },
  {
    id: "oversized-ochre",
    name: "Oversized tee · Ochre",
    kind: "tee",
    color: "#DE9C31",
    tag: "$52",
    description: "Warm ochre boxy tee with dropped shoulders and back graphic artwork.",
    details: ["Oversized streetwear drape", "Dropped shoulder seam", "High-gauge cotton"],
    image: "https://cdn.21st.dev/assets/mirror/72/7208c811f54e123dd7b1a5c1c3926f43ca832f6c4c20c45de10671ffd544409d.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/d3/d356989b7bc741c5cfc934cac34983dfb24d5d6a6b6e7b8b7f6b27cd3eceae69.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/bf/bf94beeafb21f9cb21aa45057a67dc8a2e23ba95c7ac0f79dd27ba3ce4a1230c.webp",
  },
];

/**
 * 2. Procedural Vector Tailoring Collection (Zero-image, pure mathematical SVG engine)
 */
export const VECTOR_TAILORED_ITEMS: RailGarment[] = [
  {
    id: "vec-tee",
    name: "Vector Crew Tee · Alabaster",
    kind: "tee",
    color: "#E8E2D7",
    trim: "#333333",
    tag: "$42",
    description: "Zero external images. Rendered live via procedural bezier curves, fabric displacement noise, and volume shaders.",
    details: ["SVG procedural geometry", "Dynamic fabric drape", "Dual-sided seam simulation"],
  },
  {
    id: "vec-knit",
    name: "Knit Fisherman · Forest",
    kind: "knit",
    color: "#2C3E2D",
    trim: "#1F2C20",
    tag: "$110",
    description: "Woven knit texture pattern with ribbed hem, cuff geometry, and Lambertian lighting.",
    details: ["Ribbed knit texture pattern", "Specular lighting response", "Side drape profile"],
  },
  {
    id: "vec-hoodie",
    name: "Oversized Hoodie · Heather Clay",
    kind: "hoodie",
    color: "#9C7A6B",
    trim: "#6E5245",
    tag: "$94",
    description: "Volumetric double hood with dangling cord endpoints and kangaroo pocket shading.",
    details: ["Independent draw cords", "Front/back 3D rotate", "Kangaroo pocket depth"],
  },
  {
    id: "vec-shirt",
    name: "Classic Oxford · Cerulean",
    kind: "shirt",
    color: "#4A708B",
    trim: "#ECEBE8",
    tag: "$82",
    description: "Pointed collar placket with 8 individual mother-of-pearl buttons and stitch trails.",
    details: ["Button placket vector grid", "Curved bottom hem", "Double-needle topstitching"],
  },
  {
    id: "vec-jacket",
    name: "Field Utility Jacket · Umber",
    kind: "jacket",
    color: "#5C4A3A",
    trim: "#26201A",
    tag: "$145",
    description: "Structured utility outerwear with twin chest pockets, waist flap bellows, and brass studs.",
    details: ["Four cargo patch pockets", "Heavy canvas displacement", "Snap button closures"],
  },
  {
    id: "vec-coat",
    name: "Longline Overcoat · Charcoal",
    kind: "coat",
    color: "#2B2B30",
    trim: "#1A1A1E",
    tag: "$210",
    description: "Extended floor-drape silhouette with notched lapels and tailored center back vent.",
    details: ["Extended 294px hem drop", "Notched lapel panels", "Center-split rear walking vent"],
  },
];

/**
 * 3. Verified Unsplash Stock Apparel Collection
 */
export const UNSPLASH_ITEMS: RailGarment[] = [
  {
    id: "un-white-tee",
    name: "Minimalist Tee · Unsplash Studio",
    kind: "tee",
    color: "#F4F4F4",
    tag: "$45",
    description: "Curated high-resolution studio apparel portrait from the Unsplash fashion archive.",
    details: ["100% Pima cotton", "Unsplash Stock ID: 1521572267360", "Soft wash finish"],
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "un-graphic",
    name: "Streetwear Tee · Noir",
    kind: "tee",
    color: "#18181B",
    tag: "$49",
    description: "High-contrast streetwear photography piece on portrait canvas.",
    details: ["260 gsm heavy jersey", "Unsplash Stock ID: 1503342217505", "Vintage drop fit"],
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "un-shirt",
    name: "Resort Button-down · Sky",
    kind: "shirt",
    color: "#6FA1C7",
    tag: "$68",
    description: "Breezy resort oxford shirt photographed in natural daylight.",
    details: ["Long-staple poplin", "Unsplash Stock ID: 1596755094514", "Camp collar"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "un-cardigan",
    name: "Textured Knit · Cream",
    kind: "knit",
    color: "#D9D0C1",
    tag: "$105",
    description: "Soft woven knitwear piece captured with natural fiber depth.",
    details: ["Alpaca blend", "Unsplash Stock ID: 1434389677669", "Ribbed border"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "un-hoodie",
    name: "Athletic Fleece · Ash",
    kind: "hoodie",
    color: "#8B9096",
    tag: "$89",
    description: "Heavyweight athletic fleece hoodie with double ribbing.",
    details: ["French Terry 450 gsm", "Unsplash Stock ID: 1556905055", "Dual stitch seams"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "un-sweat",
    name: "Heritage Pullover · Lavender",
    kind: "knit",
    color: "#B4A3C4",
    tag: "$79",
    description: "Garment dyed pastel pullover with relaxed wrist cuffs.",
    details: ["100% Terry cotton", "Unsplash Stock ID: 1576566588028", "Raglan shoulders"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
  },
];

export const RAIL_DEMO_ITEMS = SIGNATURE_CUTOUT_ITEMS;

export default function ClothingRailHeroDemo() {
  const [collection, setCollection] = React.useState<"cutouts" | "vectors" | "unsplash">("cutouts");
  const [autoplay, setAutoplay] = React.useState(true);
  const [hanger, setHanger] = React.useState<"wood" | "matte" | "none">("wood");
  const [cartCount, setCartCount] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [activeGarment, setActiveGarment] = React.useState<RailGarment | null>(SIGNATURE_CUTOUT_ITEMS[0]);
  const [toast, setToast] = React.useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const activeItems = React.useMemo(() => {
    switch (collection) {
      case "vectors":
        return VECTOR_TAILORED_ITEMS;
      case "unsplash":
        return UNSPLASH_ITEMS;
      default:
        return SIGNATURE_CUTOUT_ITEMS;
    }
  }, [collection]);

  // Keep active garment synced when collection changes
  React.useEffect(() => {
    setActiveGarment(activeItems[0] ?? null);
  }, [activeItems]);

  // Toggle dark mode class on html
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  };

  const handleAddToCart = (item: RailGarment) => {
    const rawPrice = item.tag?.replace(/[^0-9.]/g, "") ?? "50";
    const numericPrice = parseFloat(rawPrice) || 50;
    setCartCount((c) => c + 1);
    setCartTotal((t) => t + numericPrice);
    showToast(`Added to Bag: ${item.name} (${item.tag ?? "$50"})`);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-300">
      {/* Toast Feedback Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-5 py-3.5 text-sm font-medium text-card-foreground shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3.5" />
          </span>
          <span>{toast}</span>
        </div>
      )}

      {/* Top Standalone Boutique Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background font-mono text-sm font-bold tracking-tight shadow-sm">
              AR
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight sm:text-base">
                ATELIER RAIL
              </h1>
              <p className="text-[11px] text-muted-foreground hidden sm:block">
                Interactive 3D Apparel Showcase
              </p>
            </div>
          </div>

          {/* Collection Switcher Pills */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-muted/60 p-1 text-xs">
            <button
              type="button"
              onClick={() => setCollection("cutouts")}
              className={`rounded-full px-3 py-1 font-medium transition-colors ${
                collection === "cutouts"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cutouts (10)
            </button>
            <button
              type="button"
              onClick={() => setCollection("vectors")}
              className={`rounded-full px-3 py-1 font-medium transition-colors ${
                collection === "vectors"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Vectors (6)
            </button>
            <button
              type="button"
              onClick={() => setCollection("unsplash")}
              className={`rounded-full px-3 py-1 font-medium transition-colors ${
                collection === "unsplash"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Unsplash (6)
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-card-foreground shadow-sm transition hover:bg-muted"
            >
              {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            {/* Bag Button */}
            <button
              type="button"
              onClick={() => showToast(`Shopping bag contains ${cartCount} items ($${cartTotal})`)}
              className="relative flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-card-foreground shadow-sm transition hover:bg-muted"
            >
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Control Strip for Physics & Hanger Customization */}
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-border/40 px-4 py-2.5 text-xs text-muted-foreground sm:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-medium text-foreground">
            <SlidersHorizontal className="size-3.5" /> Rail Config:
          </span>
          <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-0.5">
            <button
              type="button"
              onClick={() => setHanger("wood")}
              className={`rounded-md px-2 py-0.5 text-[11px] transition ${
                hanger === "wood" ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              Wood Hanger
            </button>
            <button
              type="button"
              onClick={() => setHanger("matte")}
              className={`rounded-md px-2 py-0.5 text-[11px] transition ${
                hanger === "matte" ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              Matte Hanger
            </button>
            <button
              type="button"
              onClick={() => setHanger("none")}
              className={`rounded-md px-2 py-0.5 text-[11px] transition ${
                hanger === "none" ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              No Hanger
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAutoplay((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-medium text-card-foreground shadow-xs transition hover:bg-muted"
          >
            {autoplay ? <Pause className="size-3" /> : <Play className="size-3" />}
            {autoplay ? "Pause Rail" : "Autoplay"}
          </button>
          <span className="hidden items-center gap-1 font-mono text-[11px] text-muted-foreground md:inline-flex">
            <Sparkles className="size-3 text-amber-500" />
            Drag or swipe hangers to displace
          </span>
        </div>
      </section>

      {/* Main Standalone Hero Display */}
      <main className="relative flex flex-col items-center justify-center py-6">
        <div className="w-full max-w-6xl">
          <ClothingRailHero
            key={`${collection}-${hanger}`}
            items={activeItems}
            hanger={hanger}
            autoplay={autoplay}
            interval={2800}
            eyebrow={
              collection === "cutouts"
                ? "Studio Capsule · 10 Pieces on the Rail"
                : collection === "vectors"
                ? "Procedural Bezier Tailoring · Mathematical Cloth Simulation"
                : "Editorial Archive · Unsplash Studio Photography"
            }
            heading="A clothing rail you can handle, right on the page."
            caption="Hover or swipe along the rail, displace a hanger, and click to inspect the 3D rotating garment."
            onOpenChange={(idx) => {
              if (idx !== null && activeItems[idx]) {
                setActiveGarment(activeItems[idx]);
              }
            }}
            action={
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (activeGarment) {
                      handleAddToCart(activeGarment);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-md outline-none transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transition-none"
                >
                  <ShoppingBag className="size-4" />
                  Add {activeGarment?.tag ?? "Piece"} to Bag
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const firstBtn = document.querySelector<HTMLButtonElement>("[data-garment='0']");
                    firstBtn?.click();
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-sm transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Inspect First Garment
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            }
          />
        </div>

        {/* Selected Garment Spec Sheet (Standalone Feature Details) */}
        {activeGarment && (
          <section className="mx-auto mt-8 w-full max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {activeGarment.kind ?? "apparel"}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      In Stock
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                    {activeGarment.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-bold tracking-tight">
                    {activeGarment.tag ?? "$58"}
                  </p>
                  <p className="text-[11px] text-muted-foreground">Complimentary shipping</p>
                </div>
              </div>

              <div className="mt-4 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Garment Description
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {activeGarment.description ?? "Crafted with durable organic textiles, tailored seams, and precision draping."}
                  </p>
                  {activeGarment.details && activeGarment.details.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeGarment.details.map((detail) => (
                        <span
                          key={detail}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                        >
                          <Check className="size-3 text-emerald-500" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-border/80 bg-background/70 p-4">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Palette & Materials
                  </h4>
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      className="size-7 rounded-full border border-border shadow-xs"
                      style={{ backgroundColor: activeGarment.color ?? "#EFEBE2" }}
                    />
                    <div>
                      <p className="font-mono text-xs font-medium">{activeGarment.color ?? "#EFEBE2"}</p>
                      <p className="text-[11px] text-muted-foreground">Base colorway</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(activeGarment)}
                    className="mt-4 w-full rounded-xl bg-primary py-2 text-xs font-medium text-primary-foreground shadow-xs transition hover:opacity-90"
                  >
                    Quick Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer / Interaction Help */}
      <footer className="mt-16 border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>Interactive Clothing Rail Gallery · Powered by React, Tailwind CSS, and shadcn/ui</p>
        <p className="mt-1">Use Left / Right arrow keys or swipe along the rail to navigate garments.</p>
      </footer>
    </div>
  );
}
