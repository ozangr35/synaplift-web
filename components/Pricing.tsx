"use client";

import { Check, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import StoreBadge from "@/components/StoreBadge";
import {
  BillingInterval,
  freeFeatures,
  pricingPlans,
  pricingTrustNotes,
  proFeatures,
} from "@/lib/pricing";
import { appStoreUrl } from "@/lib/site";

type PricingProps = {
  embedded?: boolean;
};

export default function Pricing({ embedded = false }: PricingProps) {
  const [interval, setInterval] = useState<BillingInterval>("yearly");
  const pro = pricingPlans.pro;
  const price = interval === "yearly" ? pro.yearly : pro.monthly;

  return (
    <section
      id="pricing"
      className={
        embedded
          ? "relative scroll-mt-24 border-t border-white/8 section-pad-embedded"
          : "relative scroll-mt-24 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"
      />

      <div className="section-shell">
        <Reveal className="mb-8 text-center sm:mb-12">
          <p className="section-eyebrow text-neon-blue">Pricing</p>
          <h2 className="mt-3 text-[clamp(1.75rem,4.5vw,2.25rem)] font-black tracking-tight text-white">
            Train free.{" "}
            <span className="text-gradient-neon">Go Pro for AI.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Workouts, templates, and progress tracking stay free — like Strong and
            Hevy. SynapLift Pro unlocks unlimited AI Coach and Scan AI when you
            are ready.
          </p>
        </Reveal>

        <Reveal delay={40} className="mx-auto mb-8 w-full max-w-md sm:mb-10">
          <div className="flex flex-col items-center gap-3">
          <div
            role="tablist"
            aria-label="Billing interval"
            className="grid w-full grid-cols-2 rounded-xl border border-white/10 bg-carbon-50 p-1 sm:inline-flex sm:w-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={interval === "monthly"}
              onClick={() => setInterval("monthly")}
              className={`rounded-lg px-3 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
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
              className={`rounded-lg px-3 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
                interval === "yearly"
                  ? "bg-gradient-to-r from-neon-blue/20 to-neon-green/20 text-white ring-1 ring-neon-green/30"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span className="block sm:inline">Yearly</span>
              <span className="mt-0.5 block text-[10px] font-black uppercase tracking-wide text-neon-green sm:mt-0 sm:ml-1.5 sm:inline">
                Save ${pro.yearly.savingsVsMonthly}
              </span>
            </button>
          </div>
          {interval === "yearly" && (
            <p className="px-2 text-center text-xs leading-relaxed text-gray-500">
              {pro.yearly.perMonthLabel} billed as {pro.yearly.label}/year ·{" "}
              {pro.yearly.savingsPercent}% off vs monthly
            </p>
          )}
          </div>
        </Reveal>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <Reveal delay={60} className="h-full">
            <article className="card-hover flex h-full flex-col rounded-3xl border border-white/8 bg-carbon-50 p-6 sm:p-8">
              <p className="text-sm font-bold text-gray-400">
                {pricingPlans.free.name}
              </p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#download"
                className="mt-8 block rounded-xl border border-white/10 bg-carbon py-3.5 text-center text-sm font-bold text-white transition-colors hover:border-neon-blue/40"
              >
                {pricingPlans.free.cta}
              </Link>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-neon-green/40 bg-gradient-to-b from-neon-green/8 to-carbon-50 p-6 shadow-neon-green sm:pt-8 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2 lg:absolute lg:top-4 lg:right-4 lg:mb-0">
                <span className="inline-flex items-center gap-1 rounded-full bg-neon-green/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-neon-green ring-1 ring-neon-green/30">
                  <Sparkles className="h-3 w-3" />
                  {interval === "yearly" ? pro.yearly.badge : "Most popular"}
                </span>
              </div>
              <p className="text-sm font-bold text-neon-green">{pro.name}</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-4xl font-black text-white">{price.label}</span>
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col items-center gap-3">
                <StoreBadge store="app-store" href={appStoreUrl} />
                <p className="text-center text-xs text-gray-500">
                  Subscribe in the app after download · {pro.cta}
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto mt-10 w-full max-w-3xl sm:mt-14">
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-carbon-50">
            <div className="overflow-x-auto">
              <div className="min-w-[280px]">
                <div className="grid grid-cols-[minmax(0,1fr)_4rem_4rem] gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 sm:grid-cols-[minmax(0,1fr)_5rem_5rem] sm:gap-0 sm:px-6">
                  <span>Feature</span>
                  <span className="text-center">Free</span>
                  <span className="text-center text-neon-green">Pro</span>
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
                    className="grid grid-cols-[minmax(0,1fr)_4rem_4rem] items-center gap-2 border-b border-white/6 px-4 py-3.5 last:border-0 sm:grid-cols-[minmax(0,1fr)_5rem_5rem] sm:gap-0 sm:px-6"
                  >
                    <span className="text-sm leading-snug text-gray-300">{label}</span>
                    <span className="flex justify-center">
                      {freeVal === true ? (
                        <Check className="h-4 w-4 text-neon-blue" aria-label="Included" />
                      ) : freeVal === false ? (
                        <X className="h-4 w-4 text-gray-600" aria-label="Not included" />
                      ) : (
                        <span className="text-[11px] font-semibold text-gray-400 sm:text-xs">
                          {freeVal}
                        </span>
                      )}
                    </span>
                    <span className="flex justify-center">
                      {proVal === true ? (
                        <Check className="h-4 w-4 text-neon-green" aria-label="Included" />
                      ) : (
                        <span className="text-[11px] font-semibold text-neon-green sm:text-xs">
                          {proVal}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 px-2 text-center text-xs text-gray-600 sm:text-sm">
          {pricingTrustNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
