"use client";

import { motion } from "framer-motion";
import { Dumbbell, Shield, Sparkles, Zap } from "lucide-react";
import { motionInView } from "@/lib/motion";

const highlights = [
  {
    icon: Dumbbell,
    title: "Built for serious lifters",
    body: "Templates, rest timers, and 1RM charts, not generic fitness fluff.",
  },
  {
    icon: Sparkles,
    title: "AI that reads your log",
    body: "Coach advice grounded in the sets and PRs you actually recorded.",
  },
  {
    icon: Zap,
    title: "Try before you Pro",
    body: "One free AI Coach message. Upgrade only when AI is worth it to you.",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    body: "GDPR-aligned policy, in-app consent before AI, account deletion in Settings.",
  },
] as const;

export default function SocialProof() {
  return (
    <section className="border-y border-white/8 bg-carbon-50/50 py-10 sm:py-12">
      <div className="section-shell">
        <motion.div
          {...motionInView.header}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...motionInView.card(index * 0.06)}
                className="flex min-h-[140px] flex-col items-center rounded-2xl border border-white/6 bg-carbon/40 p-5 text-center sm:p-6 lg:items-start lg:text-left"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-neon-blue" />
                </div>
                <p className="text-sm font-black text-white">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 sm:text-sm">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
