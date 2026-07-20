"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, ClipboardList, Flame } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { assets } from "@/lib/assets";
import { motionInView } from "@/lib/motion";

const flowScreens = [
  {
    src: assets.screenshots.flowWorkout,
    alt: "SynapLift active workout logging screen",
    label: "Log sets",
  },
  {
    src: assets.screenshots.featureProgress,
    alt: "SynapLift strength progress chart",
    label: "Track PRs",
  },
  {
    src: assets.screenshots.flowCalendar,
    alt: "SynapLift workout calendar and history",
    label: "Review history",
  },
];

const steps = [
  {
    step: "01",
    title: "Build Template",
    description:
      "Create custom workout templates with exercises, sets, and targets — or start from proven routines.",
    icon: ClipboardList,
    color: "text-neon-blue",
    bg: "bg-neon-blue/15",
    ring: "ring-neon-blue/25",
  },
  {
    step: "02",
    title: "Crush Workout",
    description:
      "Log every set with rest timers, quick entry, and live volume tracking while you train.",
    icon: Flame,
    color: "text-neon-green",
    bg: "bg-neon-green/15",
    ring: "ring-neon-green/25",
  },
  {
    step: "03",
    title: "AI Analysis",
    description:
      "Review progress charts, chat with your AI Coach, and run Scan AI for physique insights.",
    icon: Brain,
    color: "text-neon-blue",
    bg: "bg-neon-blue/15",
    ring: "ring-neon-blue/25",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...motionInView.header}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            From plan to progress in{" "}
            <span className="text-gradient-neon">three steps</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                {...motionInView.card(index * 0.1)}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl ${item.bg} ring-1 ${item.ring}`}
                >
                  <Icon className={`h-7 w-7 ${item.color}`} strokeWidth={2} />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-carbon-100 text-[10px] font-black text-white ring-1 ring-white/10">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="mt-6 h-5 w-5 rotate-90 text-gray-600 md:hidden"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Wide mockup strip placeholder */}
        <motion.div
          {...motionInView.panel}
          className="mt-14 rounded-3xl border border-white/8 bg-carbon-50 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
            {flowScreens.map((screen) => (
              <div
                key={screen.src}
                className="flex flex-col items-center gap-3"
              >
                <PhoneMockup
                  src={screen.src}
                  alt={screen.alt}
                  size="flow"
                />
                <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
