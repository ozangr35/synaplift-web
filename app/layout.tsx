import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { assets } from "@/lib/assets";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SynapLift | Strength Training, Elevated",
  description:
    "Built for serious lifters. Log workouts, track PRs, and get AI coaching grounded in your real training.",
  keywords: [
    "fitness",
    "strength training",
    "AI coach",
    "workout tracker",
    "1RM",
    "SynapLift",
  ],
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: assets.branding.appIcon,
    apple: assets.branding.appIcon,
  },
  openGraph: {
    title: "SynapLift | Strength Training, Elevated",
    description:
      "Built for serious lifters. Log workouts, track PRs, and get AI coaching grounded in your real training.",
    type: "website",
    locale: "en_US",
    siteName: "SynapLift",
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} overflow-x-hidden font-sans`}>
        {children}
      </body>
    </html>
  );
}
