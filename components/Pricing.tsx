"use client";

import { motion } from "framer-motion";
import { Check, Crown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motionInView } from "@/lib/motion";

const proFeatures = [
  "Unlimited AI Coach chat",
  "Unlimited Scan AI analysis",
  "Priority AI responses",
  "Full progress analytics",
  "All 5 app themes unlocked",
];

const freeFeatures = [
  "Workout logging & templates",
  "Rest timers & volume tracking",
  "Limited AI Coach messages",
  "Limited Scan AI credits",
  "Theme picker in Settings",
];

const appThemes = [
  {
    name: "Neon Pump",
    description: "Electric lime on dark — bold gym-floor energy.",
    background: "#1C1C1E",
    accent: "#BFFF2E",
  },
  {
    name: "Chalk & Iron",
    description: "Clean light mode — spreadsheet-clear, gym-bag simple.",
    background: "#F2F4F7",
    accent: "#2B82D9",
    light: true,
  },
  {
    name: "Blood & Sweat",
    description: "High-contrast red on black — intensity first.",
    background: "#000000",
    accent: "#E53935",
  },
  {
    name: "Golden Era",
    description: "Warm gold on soft white — classic bodybuilding vibe.",
    background: "#F5F5F7",
    accent: "#C9A227",
    light: true,
  },
  {
    name: "Carbon",
    description: "Pure monochrome — zero distraction, max focus.",
    background: "#000000",
    accent: "#FFFFFF",
  },
];

type PlanId = "free" | "monthly" | "yearly";

const plans: {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  sub?: string;
  badge?: string;
  featured?: boolean;
}[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    sub: "Start logging today",
  },
  {
    id: "monthly",
    name: "Pro Monthly",
    price: "$10",
    period: "/ month",
    sub: "Billed monthly · cancel anytime",
  },
  {
    id: "yearly",
    name: "Pro Yearly",
    price: "$100",
    period: "/ year",
    sub: "~$8.33/mo · save $20 vs monthly",
    badge: "Best value",
    featured: true,
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState<PlanId>("yearly");

  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...motionInView.header}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Pick a plan.{" "}
            <span className="text-gradient-neon">Train your way.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Free to start. Pro is $10/month or $100/year — same features, your
            billing choice. Purchases run through the App Store or Google Play;
            restore anytime in the app.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, index) => {
            const isSelected = selected === plan.id;
            const isPro = plan.id !== "free";
            return (
              <motion.button
                key={plan.id}
                type="button"
                {...motionInView.card(index * 0.06)}
                onClick={() => setSelected(plan.id)}
                className={`relative w-full rounded-3xl border p-6 text-left transition sm:p-8 ${
                  isSelected
                    ? "border-neon-green/50 bg-carbon-50 shadow-neon-green ring-1 ring-neon-green/30"
                    : "border-white/8 bg-carbon-50 hover:border-white/15"
                } ${plan.featured && !isSelected ? "border-neon-green/20" : ""}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-carbon">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center gap-2">
                  {isPro ? (
                    <Crown className="h-4 w-4 text-neon-green" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-neon-blue" />
                  )}
                  <p
                    className={`text-sm font-bold uppercase tracking-widest ${
                      isPro ? "text-neon-green" : "text-gray-500"
                    }`}
                  >
                    {plan.name}
                  </p>
                </div>

                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">{plan.sub}</p>

                <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-6">
                  {(isPro ? proFeatures : freeFeatures).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isPro ? "text-neon-green" : "text-neon-blue"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <span
                  className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                    isSelected
                      ? "bg-gradient-to-r from-neon-blue to-neon-green text-carbon"
                      : "border border-white/10 text-gray-400"
                  }`}
                >
                  {isSelected ? "Selected" : "Select plan"}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.div {...motionInView.panel} className="mt-6 text-center">
          <Link
            href="/#download"
            className="inline-flex w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-neon-blue to-neon-green py-3.5 text-sm font-bold text-carbon transition hover:opacity-90 sm:w-auto sm:px-10"
          >
            Download & subscribe in app
          </Link>
          <p className="mt-3 text-xs text-gray-600">
            Final price may vary slightly by region and store taxes.
          </p>
        </motion.div>

        <motion.div
          {...motionInView.header}
          className="mt-20 border-t border-white/8 pt-16 sm:mt-24"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-neon-green">
            For every lifter
          </p>
          <h3 className="mt-3 text-center text-2xl font-black text-white sm:text-3xl">
            Five themes. One app that meets you where you train.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            Whether you are logging your first barbell session, chasing PRs in a
            commercial gym, or running a home setup — SynapLift adapts. Switch
            themes anytime in Settings: dark neon for night sessions, light chalk
            for daytime clarity, or carbon when you want zero noise.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {appThemes.map((theme, index) => (
              <motion.div
                key={theme.name}
                {...motionInView.card(index * 0.04)}
                className="rounded-2xl border border-white/8 bg-carbon-50 p-4"
              >
                <div
                  className="mb-3 flex h-12 items-center justify-center rounded-xl border border-black/10"
                  style={{ backgroundColor: theme.background }}
                >
                  <span
                    className="h-5 w-5 rounded-full ring-2 ring-black/10"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <p className="text-sm font-bold text-white">{theme.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
