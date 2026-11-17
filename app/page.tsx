import Link from "next/link";
import { Shirt, Watch, ArrowRight, Sparkles, Layers, Sliders } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-[calc(100vh-61px)] flex flex-col items-center justify-center px-4 py-12 sm:px-6">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 20%, color-mix(in oklab, var(--color-foreground) 6%, transparent), transparent 70%), linear-gradient(to bottom, transparent 60%, color-mix(in oklab, var(--color-foreground) 3%, transparent))",
        }}
      />

      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Interactive Physical Metaphors · 3D Product Rails
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-5xl text-balance">
          Tactile digital showcases engineered for luxury commerce.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Experience real-time spring physics, mechanical restitution, and dual-sided 3D inspection. Choose a department below to explore the interactive rails.
        </p>

        {/* Dual Department Feature Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
          {/* Card 1: Apparel Rail */}
          <Link
            href="/apparel"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 text-muted-foreground/30 group-hover:text-foreground/20 transition-colors">
              <Shirt className="size-20" />
            </div>
            <div>
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-foreground text-background">
                <Shirt className="size-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                Atelier Clothing Rail
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Slide wooden hangers along the rail, experience cloth drape lag, and lift garments into a full-canvas front-and-back inspection.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-foreground group-hover:translate-x-1 transition-transform">
              <span>Explore 10-Piece Rail</span>
              <ArrowRight className="size-3.5" />
            </div>
          </Link>

          {/* Card 2: Watch Vitrine */}
          <Link
            href="/watches"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 text-muted-foreground/30 group-hover:text-amber-500/20 transition-colors">
              <Watch className="size-20" />
            </div>
            <div>
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-amber-500 text-black">
                <Watch className="size-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight font-serif">
                Haute Horlogerie Vitrine
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Precision-machined timepieces on illuminated vitrine stands. Dynamic sapphire crystal glare, sweeping seconds, and 360° exhibition caseback movements.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-amber-500 group-hover:translate-x-1 transition-transform">
              <span>Explore 8 Complications</span>
              <ArrowRight className="size-3.5" />
            </div>
          </Link>
        </div>

        {/* Feature Highlights Pill */}
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-4 rounded-full border border-border bg-card/60 px-6 py-2.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <Sparkles className="size-3.5 text-amber-500" />
            Mathematical SVG Engine
          </span>
          <span>·</span>
          <span>Zero External Images Needed</span>
          <span>·</span>
          <span>OKLab Metallic Shaders</span>
          <span>·</span>
          <span>Sub-stepped Inertia Ticker</span>
        </div>
      </div>
    </div>
  );
}
