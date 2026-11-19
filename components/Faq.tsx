"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { supportEmail } from "@/lib/legal";
import { motionInView } from "@/lib/motion";

const faqs: { id?: string; q: string; a: string }[] = [
  {
    q: "How much does Pro cost?",
    a: "€8.99 a month or €69.99 a year. The App Store shows the price in your local currency. Cancel anytime.",
  },
  {
    q: "What's free?",
    a: "Workout logging, templates, rest timers, charts and history are free forever. You also get 1 free AI Coach message after you sign in.",
  },
  {
    q: "What does Pro add?",
    a: "Unlimited AI Coach, with Scan AI included.",
  },
  {
    q: "How does Coach know my training?",
    a: "It reads the workouts, PRs and volume you logged in the app. It gives general fitness guidance, not medical advice.",
  },
  {
    q: "Can I ask Coach about food?",
    a: "Yes, type a question or attach a meal photo. It's a quick check, not dietitian advice.",
  },
  {
    q: "What happens to my Scan photos?",
    a: "Your photo is sent to Google's AI for the analysis and isn't stored on our servers. Scan is for adults (18+) only.",
  },
  {
    q: "What should I wear for Scan?",
    a: "Fitted workout clothes, alone in the frame. Men can scan shirtless, women wear a top or sports bra. No underwear.",
  },
  {
    q: "Do I need an account?",
    a: "Yes, sign in with Apple or Google so your workouts and Pro stay with you.",
  },
  {
    q: "Which languages?",
    a: "English, Turkish, German, Spanish, French, Portuguese, Japanese and Chinese.",
  },
  {
    q: "Is it on Android?",
    a: "Not yet. SynapLift is iPhone-only for now.",
  },
  {
    q: "How do I cancel or restore?",
    a: "Cancel in your iPhone's subscription settings. Use Restore Purchases in the app after reinstalling.",
  },
  {
    q: "How do I delete my account?",
    a: "Settings > Delete account. This doesn't cancel your subscription; cancel that in the App Store.",
  },
  {
    id: "launch",
    q: "When does it launch?",
    a: "Soon on the App Store. The link will be on this site the day it goes live.",
  },
];

export default function Faq() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div {...motionInView.header} className="mb-12 text-center sm:mb-14">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            FAQ
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Short answers about the app, your data and Pro.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <motion.div key={item.q} {...motionInView.card(index * 0.04)}>
              <details
                id={item.id}
                className="group scroll-mt-24 rounded-2xl border border-white/8 bg-carbon-50 open:border-neon-blue/25"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-white marker:content-none sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="shrink-0 text-lg font-normal text-gray-500 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-white/6 px-5 pb-5 text-sm leading-relaxed text-gray-400 sm:px-6">
                  {item.q === "How much does Pro cost?" ? (
                    <>
                      {item.a}{" "}
                      <Link
                        href="/pricing"
                        className="font-semibold text-neon-blue hover:underline"
                      >
                        See pricing
                      </Link>
                    </>
                  ) : item.id === "launch" ? (
                    <>
                      {item.a} For launch questions, email{" "}
                      <a
                        href={`mailto:${supportEmail}`}
                        className="font-semibold text-neon-blue hover:underline"
                      >
                        {supportEmail}
                      </a>
                      .
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
