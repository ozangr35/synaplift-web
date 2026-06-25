import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  BarChart3,
  Bot,
  Globe,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "SynapLift — Pitch Overview",
  description:
    "Investor & business overview for SynapLift — AI strength training for serious lifters.",
};

const sections = [
  {
    icon: Target,
    title: "Problem",
    body: "Most gym apps are either dumb logbooks (Hevy, Strong) or generic AI body-scan clones with no memory of what you actually lift. Lifters want guidance that knows their PRs, volume, and weak points — not another cookie-cutter plan.",
  },
  {
    icon: Zap,
    title: "Solution",
    body: "SynapLift combines serious workout logging with a Gemini-powered AI Coach that reads your training history, plus Scan AI for physique feedback. One app: log → progress → coach that actually knows you.",
  },
  {
    icon: TrendingUp,
    title: "Market",
    body: "Global fitness app market is multi-billion and growing. AI fitness is crowded on body-scan alone, but the “coach + real lift data” wedge is underserved. First focus: EU/NL + multilingual lifters (8 languages).",
  },
  {
    icon: Bot,
    title: "Product (live demo)",
    bullets: [
      "Workout templates, set logging, rest timers, 1RM charts",
      "AI Coach chat with server-side context from your Firestore history",
      "Scan AI — physique analysis via secure Cloud Functions → Gemini",
      "Freemium limits; SynapLift Pro (monthly / yearly / lifetime)",
      "GDPR-ready privacy, account deletion, Bootsurf (NL entity)",
    ],
  },
  {
    icon: BarChart3,
    title: "Business model",
    body: "B2C subscription via App Store / Google Play (RevenueCat). AI Coach & Scan AI gated behind SynapLift Pro. Free tier drives activation; paywall after coach engagement (3 free messages). Lifetime tier for subscription-fatigued EU users.",
  },
  {
    icon: Shield,
    title: "Moat & compliance",
    bullets: [
      "Server-authoritative AI — keys never on client",
      "Explicit Google Gemini consent (Apple 5.1.2)",
      "EU privacy policy + medical disclaimer",
      "Training data flywheel: more logs → better coach context",
    ],
  },
  {
    icon: Globe,
    title: "Traction & stage",
    body: "Pre-launch / TestFlight-ready. Built by student entrepreneur team. Seeking mentorship, distribution advice, and optional pre-seed for ASO, trademark (EU Class 9), and user acquisition in TR + NL.",
  },
  {
    icon: Users,
    title: "Ask (25 June event)",
    bullets: [
      "Feedback on positioning vs. Form AI / Hevy / Fitbod",
      "Go-to-market for EU student & gym communities",
      "Pricing sanity check (monthly / yearly / lifetime)",
      "Introductions to fitness influencers or accelerator programs",
    ],
  },
];

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-green">
          Pitch deck · June 2026
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          SynapLift — AI Coach That Knows Your Lifts
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          Strength training app · Bootsurf · Netherlands ·{" "}
          <a
            href="mailto:synaplift@outlook.com"
            className="font-semibold text-neon-blue hover:underline"
          >
            synaplift@outlook.com
          </a>
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/8 bg-carbon-50/50 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-blue/15">
                  <section.icon className="h-5 w-5 text-neon-blue" />
                </div>
                <h2 className="text-lg font-black text-white">
                  {section.title}
                </h2>
              </div>
              {section.body && (
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-400">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-neon-green/25 bg-neon-green/5 p-6">
          <p className="text-sm font-bold text-neon-green">Live demo flow</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-300">
            <li>Sign in → complete profile</li>
            <li>Log a workout (or show existing history)</li>
            <li>AI Coach: ask about weak points — show history-aware reply</li>
            <li>Scan AI: physique photo → structured feedback</li>
            <li>Settings: privacy, delete account, SynapLift Pro</li>
          </ol>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link
            href="/"
            className="font-semibold text-neon-blue hover:underline"
          >
            ← Marketing site
          </Link>
          <Link
            href="/privacy"
            className="font-semibold text-gray-400 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-semibold text-gray-400 hover:text-white"
          >
            Terms
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
