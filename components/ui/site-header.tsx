"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Sun, Moon, Shirt, Watch } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

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

  const isWatches = pathname?.startsWith("/watches");
  const isApparel = pathname === "/apparel" || pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background font-mono text-sm font-bold tracking-tight shadow-sm transition group-hover:scale-105">
            M
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight sm:text-base font-serif">
              MAISON GALLERY
            </h1>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:block">
              Interactive 3D Physical Rails
            </p>
          </div>
        </Link>

        {/* Department Switcher Tabs (Apparel vs Watches) */}
        <nav className="flex items-center gap-1 rounded-full border border-border bg-muted/60 p-1 text-xs">
          <Link
            href="/apparel"
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-medium transition-all ${
              isApparel
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Shirt className="size-3.5" />
            <span>Apparel Rail</span>
          </Link>
          <Link
            href="/watches"
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-medium transition-all ${
              isWatches
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Watch className="size-3.5" />
            <span>Watches Vitrine</span>
          </Link>
        </nav>

        {/* Actions (Theme & Bag) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-card-foreground shadow-xs transition hover:bg-muted"
          >
            {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
