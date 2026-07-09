"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import StoreBadge from "@/components/StoreBadge";
import { assets } from "@/lib/assets";
import { appStoreUrl } from "@/lib/site";
import { heroFadeUp, heroFloat } from "@/lib/motion";

const fadeUp = heroFadeUp;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pb-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[min(520px,80vw)] w-[min(720px,120vw)] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-16 h-64 w-64 rounded-full bg-neon-green/8 blur-[100px] sm:right-0 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-40"
      />

      <div className="section-shell relative">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          {/* Copy */}
          <div className="w-full min-w-0 max-w-xl text-center lg:flex-1 lg:max-w-2xl lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-blue/25 bg-neon-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon-blue sm:mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Built for Serious Lifters
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[clamp(1.875rem,5.5vw,3.25rem)] font-black leading-[1.08] tracking-tight"
            >
              Strength Without the Spreadsheet.{" "}
              <span className="text-gradient-neon">Insight Without Guesswork.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg lg:mx-0"
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
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
            >
              <StoreBadge store="app-store" href={appStoreUrl} />
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-5 text-xs text-gray-600 sm:mt-6"
            >
              Free to start · SynapLift Pro unlocks AI Coach & Scan AI
            </motion.p>
          </div>

          {/* Phone mockup */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative w-full max-w-[280px] shrink-0 sm:max-w-none lg:w-auto"
          >
            <motion.div
              {...heroFloat}
              className="relative"
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
                className="relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
