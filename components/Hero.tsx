"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import StoreBadge from "@/components/StoreBadge";
import { assets } from "@/lib/assets";
import { appStoreUrl } from "@/lib/site";
import { heroFadeUp } from "@/lib/motion";

const fadeUp = heroFadeUp;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-neon-green/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-40"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-14">
          {/* Copy */}
          <div className="w-full min-w-0 max-w-xl text-center xl:flex-1 xl:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/25 bg-neon-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon-blue"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Built for Serious Lifters
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
            >
              Strength Without the Spreadsheet.{" "}
              <span className="text-gradient-neon">Insight Without Guesswork.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg xl:mx-0"
            >
              SynapLift logs your sets, tracks PRs and volume, and coaches you from
              your real training history — including quick answers on whether your
              food looks healthy when you ask or send a photo.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              id="download"
              className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 xl:justify-start"
            >
              <StoreBadge store="app-store" href={appStoreUrl} />
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-xs text-gray-600"
            >
              Free to start · SynapLift Pro unlocks AI Coach & Scan AI
            </motion.p>
          </div>

          {/* Phone mockup placeholder */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative shrink-0"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-neon-blue/20 via-transparent to-neon-green/15 blur-2xl"
            />
            <PhoneMockup
              src={assets.screenshots.heroHome}
              alt="SynapLift home screen showing weekly summary and AI Coach"
              size="lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
