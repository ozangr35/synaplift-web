"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { StoreBadgeRow } from "@/components/StoreBadge";
import {
  freeFeatures,
  pricingPlans,
  pricingTrustNotes,
  proFeatures,
} from "@/lib/pricing";
import { motionInView } from "@/lib/motion";

type PricingProps = {
  /** When true, omit outer section padding (embedded on home). */
  embedded?: boolean;
};

export default function Pricing({ embedded = false }: PricingProps) {
  const pro = pricingPlans.pro;

  return (
    <section
      id="pricing"
      className={
        embedded
          ? "relative scroll-mt-24 border-t border-white/8 py-20 sm:py-28"
          : "relative scroll-mt-24 pt-28 pb-20 sm:pt-32 sm:pb-28"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...motionInView.header} className="mb-10 text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Train free.{" "}
            <span className="text-gradient-neon">Go Pro for AI.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Unlimited logging, templates, progress, calendar, and history stay
            free, with 1 AI Coach message and 1 Scan AI scan a month. SynapLift
            Pro is Unlimited AI Coach & Scan AI. Pricing is announced at launch.
          </p>
        </motion.div>

        {/* Plan cards | Free + Pro (two-tier + highlighted Pro) */}
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            {...motionInView.card(0.08)}
            className="flex flex-col rounded-3xl border border-white/8 bg-carbon-50 p-6 sm:p-8"
          >
            <p className="text-sm font-bold text-gray-400">
              {pricingPlans.free.name}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">
                {pricingPlans.free.priceLabel}
              </span>
              <span className="text-sm text-gray-500">
                {pricingPlans.free.periodLabel}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              {pricingPlans.free.tagline}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {freeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-blue" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/download"
              className="mt-8 block rounded-xl border border-white/10 bg-carbon py-3.5 text-center text-sm font-bold text-white transition hover:border-neon-blue/40"
            >
              {pricingPlans.free.cta}
            </Link>
          </motion.article>

          <motion.article
            {...motionInView.card(0.12)}
            className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-neon-green/40 bg-gradient-to-b from-neon-green/8 to-carbon-50 p-6 shadow-neon-green sm:p-8"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2 lg:absolute lg:top-4 lg:right-4 lg:mb-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-neon-green/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-neon-green ring-1 ring-neon-green/30">
                <Sparkles className="h-3 w-3" />
                Pro
              </span>
            </div>
            <p className="text-sm font-bold text-neon-green">{pro.name}</p>
            <p className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
              {pro.priceLabel}
            </p>
            <p className="mt-2 text-sm text-gray-400">{pro.tagline}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {proFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-green" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Scan AI on Pro uses batches of up to 5 photos per scan.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <StoreBadgeRow />
              <p className="text-center text-xs text-gray-500">
                Subscribe in the app at launch · {pro.cta}
              </p>
            </div>
          </motion.article>
        </div>

        {/* Feature comparison table */}
        <motion.div
          {...motionInView.panel}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/8 bg-carbon-50"
        >
          <div className="grid grid-cols-[1fr_auto_auto] gap-0 border-b border-white/8 bg-white/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 sm:px-6">
            <span>Feature</span>
            <span className="w-[5.25rem] text-center sm:w-28">Free</span>
            <span className="w-[5.25rem] text-center text-neon-green sm:w-28">
              Pro
            </span>
          </div>
          {[
            ["Workout logging & templates", true, true],
            ["Rest timers & PR charts", true, true],
            ["AI Coach", "1 message to try", "Unlimited"],
            ["Scan AI", "1 / month", "Unlimited"],
            ["Coach uses your lift history", true, true],
          ].map(([label, freeVal, proVal]) => (
            <div
              key={String(label)}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-0 border-b border-white/6 px-4 py-3.5 last:border-0 sm:px-6"
            >
              <span className="text-sm text-gray-300">{label}</span>
              <span className="flex w-[5.25rem] justify-center px-1 text-center sm:w-28">
                {freeVal === true ? (
                  <Check className="h-4 w-4 text-neon-blue" aria-label="Included" />
                ) : (
                  <span className="text-xs font-semibold leading-tight text-gray-400">
                    {freeVal}
                  </span>
                )}
              </span>
              <span className="flex w-[5.25rem] justify-center px-1 text-center sm:w-28">
                {proVal === true ? (
                  <Check className="h-4 w-4 text-neon-green" aria-label="Included" />
                ) : (
                  <span className="text-xs font-semibold leading-tight text-neon-green">
                    {proVal}
                  </span>
                )}
              </span>
            </div>
          ))}
        </motion.div>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 text-center text-xs text-gray-600 sm:text-sm">
          {pricingTrustNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
