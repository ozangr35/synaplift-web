import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesBento embedded />
      <section className="border-t border-white/8 py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <p className="text-sm text-gray-400">
            Ready to see the full flow — templates, logging, and AI coaching?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/product"
              className="rounded-xl border border-white/10 bg-carbon-50 px-6 py-3 text-sm font-bold text-white transition hover:border-neon-blue/40"
            >
              How the product works
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-neon-green/30 bg-neon-green/10 px-6 py-3 text-sm font-bold text-neon-green transition hover:bg-neon-green/15"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
