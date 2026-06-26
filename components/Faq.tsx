"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { motionInView } from "@/lib/motion";

const faqs = [
  {
    q: "What is SynapLift?",
    a: "SynapLift is a strength training app that combines workout logging, progress analytics, an AI Coach that reads your lift history (and can comment on meals you ask about), and Scan AI for physique feedback.",
  },
  {
    q: "Is SynapLift free?",
    a: "Yes. You can log workouts, use templates, rest timers, and track progress for free. You get one free AI Coach message to try; SynapLift Pro unlocks unlimited AI Coach and Scan AI.",
  },
  {
    q: "What does SynapLift Pro include?",
    a: "Unlimited AI Coach chat, unlimited Scan AI analysis, priority AI responses, and full progress analytics. Pro is $10/month or $100/year (save $20 vs paying monthly). Billed through the App Store or Google Play.",
  },
  {
    q: "How does the AI Coach know my training?",
    a: "The coach uses your logged workouts, PRs, volume, and profile context to tailor advice — not a one-size-fits-all program.",
  },
  {
    q: "Can I ask the AI Coach about my food?",
    a: "Yes. Type a question or attach a meal photo in AI Coach chat — for example, whether a plate looks balanced or how it fits your goals. It’s a quick sanity check, not medical or dietitian advice.",
  },
  {
    q: "Is my data private?",
    a: "We collect only what’s needed to run the app and improve your experience. Read our Privacy Policy for full details on storage, AI processing, and your rights.",
  },
  {
    q: "When will the app be on the App Store and Google Play?",
    a: "We’re preparing for launch. Download links on the homepage will go live as soon as the stores are available in your region.",
  },
  {
    q: "How do I cancel or restore a subscription?",
    a: "Subscriptions are managed by Apple or Google. Cancel anytime in your device subscription settings. Use Restore Purchases in the app if you reinstall or switch devices.",
  },
];

export default function Faq() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div {...motionInView.header} className="mb-12 text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-green">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Questions lifters ask{" "}
            <span className="text-gradient-neon">before they download</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Quick answers about SynapLift, privacy, subscriptions, and the app.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <motion.div key={item.q} {...motionInView.card(index * 0.04)}>
              <details className="group rounded-2xl border border-white/8 bg-carbon-50 open:border-neon-blue/25">
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-white marker:content-none sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="shrink-0 text-lg font-normal text-gray-500 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-white/6 px-5 pb-5 text-sm leading-relaxed text-gray-400 sm:px-6">
                  {item.q === "Is my data private?" ? (
                    <>
                      We collect only what’s needed to run the app. See our{" "}
                      <Link href="/privacy" className="font-semibold text-neon-blue hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for full details.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </details>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Still stuck?{" "}
          <Link href="/contact" className="font-semibold text-neon-green hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
