import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Gallery · Interactive 3D Showcase",
  description: "Interactive 3D Apparel Rail and Horological Watch Vitrine built with React, Tailwind CSS, and shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
