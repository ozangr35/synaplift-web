import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata = {
  title: "About — SynapLift",
  description: "About SynapLift — AI-powered strength training for serious lifters.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-green">
          About us
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Built for lifters who want more than a spreadsheet
        </h1>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-gray-400">
          <p>
            <strong className="text-white">SynapLift</strong> is a strength training
            app that combines serious workout logging with an AI Coach and Scan
            AI — so you can train smarter, track real progress, and get guidance
            that feels human, not robotic.
          </p>
          <p>
            Log sets and 1RM trends, build templates, run rest timers, and chat
            with your coach about workouts, recovery, macros, and equipment.
            SynapLift Pro unlocks unlimited AI Coach and Scan AI.
          </p>
          <p>
            We&apos;re <strong className="text-white">Bootsurf</strong>, based in
            the Netherlands — building SynapLift to help you get stronger with
            tools that respect your time in the gym.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="mailto:synaplift@outlook.com"
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-6 transition hover:border-neon-blue/30"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-blue" />
            <div>
              <p className="font-bold text-white">Contact</p>
              <p className="mt-1 text-sm text-neon-blue">synaplift@outlook.com</p>
              <p className="mt-2 text-sm text-gray-500">
                Support, feedback, and privacy requests
              </p>
            </div>
          </a>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-block text-sm font-semibold text-neon-green hover:underline"
        >
          More contact options →
        </Link>

        <Link
          href="/"
          className="mt-6 inline-block text-sm font-semibold text-neon-blue hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
