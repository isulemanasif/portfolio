import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Suleman Asif | Portfolio",
  description: "BBA Student & Supply Chain Professional Portfolio. Specializing in Logistics, IT, and AI.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MSA Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500 selection:text-white`}
      >
        <Preloader />
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] grain-overlay"></div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
