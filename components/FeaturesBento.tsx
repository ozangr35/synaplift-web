"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Camera,
  Dumbbell,
  MessageSquare,
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
      "Chat with an AI coach that reads your logged lifts, PRs, and volume — for advice that matches your real training, not a generic template.",
    icon: Bot,
    accent: "blue" as const,
    span: "lg:col-span-2 lg:row-span-2",
    bullets: [
      { icon: MessageSquare, text: "Real-time chat coaching" },
      { icon: Dumbbell, text: "Workout & equipment advice" },
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
    span: "lg:col-span-1",
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
    span: "lg:col-span-1",
    bullets: [
      { icon: Timer, text: "Built-in rest timers" },
      { icon: TrendingUp, text: "1RM & volume charts" },
    ],
    screenshot: "/screenshots/feature-progress.png",
    screenshotAlt: "SynapLift one-rep max progress chart",
  },
];

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

export default function FeaturesBento() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...motionInView.header}
          className="mb-12 text-center sm:mb-16"
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

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {features.map((feature, index) => {
            const styles = accentStyles[feature.accent];
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                {...motionInView.card(index * 0.08)}
                className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-carbon-50 p-6 transition duration-300 ${styles.border} ${feature.span}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} to-transparent opacity-0 transition group-hover:opacity-100`}
                />

                <div
                  className={`relative flex h-full flex-col ${feature.id === "coach" ? "lg:flex-row lg:items-center lg:gap-8" : ""}`}
                >
                  <div className="flex-1">
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconBg} ring-1 ${styles.ring}`}
                    >
                      <Icon className={`h-5 w-5 ${styles.icon}`} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet.text}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <bullet.icon
                            className={`h-4 w-4 shrink-0 ${styles.icon}`}
                          />
                          {bullet.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-6 flex justify-center ${feature.id === "coach" ? "lg:mt-0 lg:shrink-0" : ""}`}
                  >
                    <PhoneMockup
                      src={feature.screenshot}
                      alt={feature.screenshotAlt}
                      size={feature.id === "coach" ? "md" : "sm"}
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
