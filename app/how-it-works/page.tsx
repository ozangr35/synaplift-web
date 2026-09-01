import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "How it works | SynapLift",
  description:
    "How SynapLift works: templates, workout logging, progress tracking, and AI coaching.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon">
      <Navbar />
      <div className="pt-16">
        <HowItWorks />
      </div>
      <section className="border-t border-white/8 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center sm:px-6">
          <Link
            href="/product"
            className="w-full rounded-xl border border-neon-green/30 bg-neon-green/10 px-5 py-2.5 text-center text-sm font-semibold text-neon-green transition hover:bg-neon-green/15 sm:w-auto"
          >
            See the full product
          </Link>
          <Link
            href="/faq"
            className="w-full rounded-xl border border-white/10 bg-carbon-50 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-neon-blue/40 sm:w-auto"
          >
            Read the FAQ
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
