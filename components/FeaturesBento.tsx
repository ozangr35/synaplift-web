"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Camera,
  Dumbbell,
  MessageSquare,
  Salad,
  Timer,
  TrendingUp,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { assets } from "@/lib/assets";
import { hoverLift, motionInView } from "@/lib/motion";

const features = [
  {
    id: "coach",
    title: "Smart AI Coach",
    description:
      "Chat with an AI coach that reads your logged lifts, PRs, and volume — plus ask how healthy a meal is or attach a food photo for quick feedback.",
    icon: Bot,
    accent: "blue" as const,
    bullets: [
      { icon: MessageSquare, text: "Real-time chat coaching" },
      { icon: Dumbbell, text: "Workout & equipment advice" },
      { icon: Salad, text: "Ask if your food is healthy — text or photo" },
    ],
    screenshot: assets.screenshots.featureCoach,
    screenshotAlt: "SynapLift AI Coach workout plan with save as template",
  },
  {
    id: "scan",
    title: "Scan AI",
    description:
      "Upload a physique photo for instant AI analysis — body composition insights and actionable suggestions.",
    icon: Camera,
    accent: "green" as const,
    bullets: [{ icon: Camera, text: "Photo-based physique analysis" }],
    screenshot: assets.screenshots.featureScan,
    screenshotAlt: "SynapLift Scan AI physique analysis results",
  },
  {
    id: "tracking",
    title: "Pro Tracking",
    description:
      "Rest timers, volume analytics, and 1RM charts so every session compounds into measurable progress.",
    icon: BarChart3,
    accent: "blue" as const,
    bullets: [
      { icon: Timer, text: "Built-in rest timers" },
      { icon: TrendingUp, text: "1RM & volume charts" },
    ],
    screenshot: assets.screenshots.featureProgress,
    screenshotAlt: "SynapLift one-rep max progress chart",
  },
] as const;

const accentStyles = {
  blue: {
    ring: "ring-neon-blue/30",
    iconBg: "bg-neon-blue/15",
    icon: "text-neon-blue",
    glow: "from-neon-blue/10",
    border: "hover:border-neon-blue/30",
  },
  green: {
    ring: "ring-neon-green/30",
    iconBg: "bg-neon-green/15",
    icon: "text-neon-green",
    glow: "from-neon-green/10",
    border: "hover:border-neon-green/30",
  },
};

export default function FeaturesBento({ embedded = false }: { embedded?: boolean }) {
  return (
    <section
      id="features"
      className={
        embedded
          ? "relative scroll-mt-24 section-pad-embedded"
          : "relative scroll-mt-24 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24"
      }
    >
      <div className="section-shell">
        <motion.div
          {...motionInView.header}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="section-eyebrow text-neon-green">Features</p>
          <h2 className="mt-3 text-[clamp(1.75rem,4.5vw,2.25rem)] font-black tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient-neon">train smarter</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            A premium training stack — AI coaching, physique analysis, and pro-grade
            tracking in one app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
          {features.map((feature, index) => {
            const styles = accentStyles[feature.accent];
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                {...motionInView.card(index * 0.08)}
                {...hoverLift}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-carbon-50 p-5 transition duration-300 sm:p-6 ${styles.border}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} to-transparent opacity-0 transition group-hover:opacity-100`}
                />

                <div className="relative flex min-h-0 flex-1 flex-col">
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${styles.iconBg} ring-1 ${styles.ring}`}
                  >
                    <Icon className={`h-5 w-5 ${styles.icon}`} />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet.text}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <bullet.icon
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.icon}`}
                        />
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-5 flex flex-col justify-end border-t border-white/6 pt-5 sm:mt-6">
                  <div className="flex min-h-[240px] items-center justify-center sm:min-h-[280px] lg:min-h-[300px]">
                    <PhoneMockup
                      src={feature.screenshot}
                      alt={feature.screenshotAlt}
                      size="feature"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
