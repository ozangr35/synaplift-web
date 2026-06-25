"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import Link from "next/link";
import { motionInView } from "@/lib/motion";

const freeFeatures = [
  "Workout logging & templates",
  "Rest timers & volume tracking",
  "Limited AI Coach messages",
  "Limited Scan AI credits",
];

const proFeatures = [
  "Unlimited AI Coach chat",
  "Unlimited Scan AI analysis",
  "Priority AI responses",
  "Full progress analytics",
];

export default function Pricing() {
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
            Start free.{" "}
            <span className="text-gradient-neon">Go Pro when ready.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Subscriptions are managed through the App Store and Google Play.
            Restore purchases anytime in the app.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <motion.div
            {...motionInView.card()}
            className="rounded-3xl border border-white/8 bg-carbon-50 p-8"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Free
            </p>
            <p className="mt-3 text-4xl font-black text-white">€0</p>
            <p className="mt-1 text-sm text-gray-500">Forever</p>
            <ul className="mt-8 space-y-3">
              {freeFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <Check className="h-4 w-4 shrink-0 text-neon-blue" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionInView.card(0.08)}
            className="relative overflow-hidden rounded-3xl border border-neon-green/30 bg-carbon-50 p-8 shadow-neon-green"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-neon-green/10 blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-neon-green" />
                <p className="text-sm font-bold uppercase tracking-widest text-neon-green">
                  SynapLift Pro
                </p>
              </div>
              <p className="mt-3 text-4xl font-black text-white">
                Monthly / Yearly
              </p>
              <p className="mt-1 text-sm text-gray-500">
                See in-app pricing for your region
              </p>
              <ul className="mt-8 space-y-3">
                {proFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-gray-200"
                  >
                    <Check className="h-4 w-4 shrink-0 text-neon-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#download"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-neon-blue to-neon-green py-3.5 text-sm font-bold text-carbon transition hover:opacity-90"
              >
                Download & Upgrade
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
