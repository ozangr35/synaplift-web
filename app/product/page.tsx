import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Product — SynapLift",
  description:
    "How SynapLift works — templates, workout logging, progress tracking, and AI coaching in one strength training app.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon">
      <Navbar />
      <section className="border-b border-white/8 pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
            Product
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            One app from{" "}
            <span className="text-gradient-neon">warm-up to weekly review</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
            Build templates, log sessions with rest timers and quick entry, then
            review charts and AI feedback — all tied to the workouts you actually
            did.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#features"
              className="rounded-xl border border-white/10 bg-carbon-50 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-neon-blue/40"
            >
              See features
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-neon-green/30 bg-neon-green/10 px-5 py-2.5 text-sm font-semibold text-neon-green transition hover:bg-neon-green/15"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Footer />
    </main>
  );
}
