import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
            app that combines serious workout logging with a Gemini-powered AI
            Coach and Scan AI — so you can train smarter, track real progress,
            and get guidance that feels human, not robotic.
          </p>
          <p>
            Log sets and 1RM trends, build templates, run rest timers, and chat
            with your coach about workouts, recovery, macros, and equipment.
            SynapLift Pro unlocks unlimited AI Coach and Scan AI.
          </p>
          <p>
            We&apos;re based in the Netherlands and focused on one thing: helping
            you get stronger with tools that respect your time in the gym.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-neon-blue hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
