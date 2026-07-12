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
    <main className="page-main">
      <Navbar />
      <article className="page-article">
        <p className="section-eyebrow text-neon-green">About us</p>
        <h1 className="mt-3 text-[clamp(1.75rem,4.5vw,2.25rem)] font-black tracking-tight text-white">
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
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-5 transition hover:border-neon-blue/30 sm:p-6"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-blue" />
            <div className="min-w-0">
              <p className="font-bold text-white">Contact</p>
              <p className="mt-1 break-all text-sm text-neon-blue">synaplift@outlook.com</p>
              <p className="mt-2 text-sm text-gray-500">
                Support, feedback, and privacy requests
              </p>
            </div>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          <Link
            href="/contact"
            className="text-sm font-semibold text-neon-green hover:underline"
          >
            More contact options →
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-neon-blue hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
