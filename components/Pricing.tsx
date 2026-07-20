"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StoreBadge from "@/components/StoreBadge";
import {
  BillingInterval,
  freeFeatures,
  pricingPlans,
  pricingTrustNotes,
  proFeatures,
} from "@/lib/pricing";
import { appStoreUrl } from "@/lib/site";
import { motionInView } from "@/lib/motion";

type PricingProps = {
  /** When true, omit outer section padding (embedded on home). */
  embedded?: boolean;
};

export default function Pricing({ embedded = false }: PricingProps) {
  const [interval, setInterval] = useState<BillingInterval>("yearly");
  const pro = pricingPlans.pro;
  const price =
    interval === "yearly" ? pro.yearly : pro.monthly;

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
            Workouts, templates, and progress tracking stay free — like Strong and
            Hevy. SynapLift Pro unlocks unlimited AI Coach and Scan AI when you
            are ready.
          </p>
        </motion.div>

        {/* Billing toggle — annual default (fitness app best practice) */}
        <motion.div
          {...motionInView.card(0.05)}
          className="mx-auto mb-10 flex max-w-md flex-col items-center gap-3"
        >
          <div
            role="tablist"
            aria-label="Billing interval"
            className="inline-flex rounded-xl border border-white/10 bg-carbon-50 p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={interval === "monthly"}
              onClick={() => setInterval("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-bold transition ${
                interval === "monthly"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={interval === "yearly"}
              onClick={() => setInterval("yearly")}
              className={`relative rounded-lg px-5 py-2 text-sm font-bold transition ${
                interval === "yearly"
                  ? "bg-gradient-to-r from-neon-blue/20 to-neon-green/20 text-white ring-1 ring-neon-green/30"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Yearly
              <span className="ml-1.5 hidden text-[10px] font-black uppercase tracking-wide text-neon-green sm:inline">
                Save ${pro.yearly.savingsVsMonthly}
              </span>
            </button>
          </div>
          {interval === "yearly" && (
            <p className="text-xs text-gray-500">
              {pro.yearly.perMonthLabel} billed as {pro.yearly.label}/year ·{" "}
              {pro.yearly.savingsPercent}% off vs monthly
            </p>
          )}
        </motion.div>

        {/* Plan cards — Free + Pro (Hevy-style two-tier + highlighted Pro) */}
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
              href="/#download"
              className="mt-8 block rounded-xl border border-white/10 bg-carbon py-3.5 text-center text-sm font-bold text-white transition hover:border-neon-blue/40"
            >
              {pricingPlans.free.cta}
            </Link>
          </motion.article>

          <motion.article
            {...motionInView.card(0.12)}
            className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-neon-green/40 bg-gradient-to-b from-neon-green/8 to-carbon-50 p-6 shadow-neon-green sm:p-8"
          >
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-neon-green/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-neon-green ring-1 ring-neon-green/30">
                <Sparkles className="h-3 w-3" />
                {interval === "yearly"
                  ? pro.yearly.badge
                  : "Most popular"}
              </span>
            </div>
            <p className="text-sm font-bold text-neon-green">{pro.name}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">
                {price.label}
              </span>
              <span className="text-sm text-gray-400">/{price.period}</span>
            </div>
            {interval === "yearly" && (
              <p className="mt-1 text-sm font-semibold text-neon-green">
                {pro.yearly.perMonthLabel} · save ${pro.yearly.savingsVsMonthly}/yr
              </p>
            )}
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
            <div id="download" className="mt-8 flex flex-col items-center gap-3">
              <StoreBadge store="app-store" href={appStoreUrl} />
              <p className="text-center text-xs text-gray-500">
                Subscribe in the app after download · {pro.cta}
              </p>
            </div>
          </motion.article>
        </div>

        {/* Feature comparison table (Strong / Hevy pattern) */}
        <motion.div
          {...motionInView.panel}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/8 bg-carbon-50"
        >
          <div className="grid grid-cols-[1fr_auto_auto] gap-0 border-b border-white/8 bg-white/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 sm:px-6">
            <span>Feature</span>
            <span className="w-16 text-center sm:w-20">Free</span>
            <span className="w-16 text-center text-neon-green sm:w-20">Pro</span>
          </div>
          {[
            ["Workout logging & templates", true, true],
            ["Rest timers & PR charts", true, true],
            ["AI Coach messages", "1 trial", "Unlimited"],
            ["Scan AI physique analysis", false, true],
            ["Coach uses your lift history", false, true],
          ].map(([label, freeVal, proVal]) => (
            <div
              key={String(label)}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-0 border-b border-white/6 px-4 py-3.5 last:border-0 sm:px-6"
            >
              <span className="text-sm text-gray-300">{label}</span>
              <span className="flex w-16 justify-center sm:w-20">
                {freeVal === true ? (
                  <Check className="h-4 w-4 text-neon-blue" aria-label="Included" />
                ) : freeVal === false ? (
                  <X className="h-4 w-4 text-gray-600" aria-label="Not included" />
                ) : (
                  <span className="text-xs font-semibold text-gray-400">
                    {freeVal}
                  </span>
                )}
              </span>
              <span className="flex w-16 justify-center sm:w-20">
                {proVal === true ? (
                  <Check className="h-4 w-4 text-neon-green" aria-label="Included" />
                ) : (
                  <span className="text-xs font-semibold text-neon-green">
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
