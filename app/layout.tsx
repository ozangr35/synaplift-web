import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SynapLift — Strength Training, Elevated",
  description:
    "Log workouts, track PRs, and get AI coaching grounded in your real training. SynapLift for iOS and Android.",
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
    icon: "/branding/synaplift-app-icon.png",
    apple: "/branding/synaplift-app-icon.png",
  },
  openGraph: {
    title: "SynapLift — Strength Training, Elevated",
    description:
      "Log workouts, track PRs, and get AI coaching grounded in your real training.",
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
      <body className={`${geistSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
