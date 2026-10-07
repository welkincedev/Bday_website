import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.siteTitle} | For ${siteConfig.girlfriendName}`,
  description: siteConfig.subTitle,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}>
      <body
        className="bg-[#0A0A0B] text-[#E8E6E3] antialiased selection:bg-[#D4AF37] selection:text-black font-sans min-h-screen overflow-x-hidden"
      >
        {/* Subtle Luxury Film Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] bg-[url('/noise.png')] mix-blend-overlay" />
        {children}
      </body>
    </html>
  );
}
