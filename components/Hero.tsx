"use client";

import { motion } from "framer-motion";
import { Apple, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/25 bg-neon-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon-blue"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Fitness
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your AI Coach Knows{" "}
              <span className="text-gradient-neon">What You Lift.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0"
            >
              Log sets, track 1RM progress, and get coaching from Gemini that
              reads your real workout history — not generic templates.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              id="download"
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#"
                className="group flex w-full max-w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-carbon-100 px-5 py-3.5 transition hover:border-neon-blue/40 hover:bg-carbon-50 sm:w-auto"
              >
                <Apple className="h-7 w-7 text-white transition group-hover:text-neon-blue" />
                <div className="text-left">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                    Download on the
                  </p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex w-full max-w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-carbon-100 px-5 py-3.5 transition hover:border-neon-green/40 hover:bg-carbon-50 sm:w-auto"
              >
                <Play className="h-7 w-7 fill-white text-white transition group-hover:text-neon-green" />
                <div className="text-left">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                    Get it on
                  </p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </Link>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-xs text-gray-600"
            >
              Free to start · SynapLift Pro unlocks unlimited AI Coach & Scan AI
            </motion.p>
          </div>

          {/* Phone mockup placeholder */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-none lg:justify-self-end"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-neon-blue/20 via-transparent to-neon-green/15 blur-2xl"
            />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-carbon-50 p-3 shadow-neon">
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border border-gray-700 bg-gray-800">
                <Image
                  src="/branding/myon-app-icon.png"
                  alt="SynapLift app icon"
                  fill
                  className="object-contain p-12 opacity-90"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent px-4 pb-5 pt-16 text-center">
                  <p className="text-xs font-medium text-gray-500">
                    Replace with iPhone mockup screenshot
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
