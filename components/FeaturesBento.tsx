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
import { motionInView } from "@/lib/motion";

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
    screenshot: "/screenshots/feature-coach.png",
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
    screenshot: "/screenshots/feature-scan.png",
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
    screenshot: "/screenshots/feature-progress.png",
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
          ? "relative scroll-mt-24 py-20 sm:py-28"
          : "relative scroll-mt-24 pt-28 pb-20 sm:pt-32 sm:pb-28"
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...motionInView.header}
          className="mb-12 text-center sm:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-green">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient-neon">train smarter</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A premium training stack — AI coaching, physique analysis, and pro-grade
            tracking in one app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {features.map((feature, index) => {
            const styles = accentStyles[feature.accent];
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                {...motionInView.card(index * 0.08)}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-carbon-50 p-5 sm:p-6 transition duration-300 ${styles.border}`}
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
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <bullet.icon
                          className={`h-3.5 w-3.5 shrink-0 ${styles.icon}`}
                        />
                        {bullet.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-6 flex flex-1 flex-col justify-end border-t border-white/6 pt-5">
                  <div className="flex min-h-[300px] items-center justify-center sm:min-h-[320px]">
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
