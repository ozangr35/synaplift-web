import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SynapLift — Strength Training, Powered by AI",
  description:
    "Log workouts, track 1RM progress, and get personalized guidance from an AI Coach that knows your lifts. Download SynapLift for iOS and Android.",
  keywords: [
    "fitness",
    "strength training",
    "AI coach",
    "workout tracker",
    "1RM",
    "SynapLift",
  ],
  icons: {
    icon: "/branding/synaplift-app-icon.png",
    apple: "/branding/synaplift-app-icon.png",
  },
  openGraph: {
    title: "SynapLift — Strength Training, Powered by AI",
    description:
      "Log workouts, track 1RM progress, and get personalized guidance from an AI Coach that knows your lifts.",
    type: "website",
    locale: "en_US",
    siteName: "SynapLift",
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
