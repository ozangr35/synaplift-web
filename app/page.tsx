import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <FeaturesBento embedded />
      <Pricing embedded />
      <section className="border-t border-white/8 py-12 sm:py-16">
        <div className="section-shell flex flex-col items-center gap-6 text-center">
          <p className="max-w-lg text-sm text-gray-400 sm:text-base">
            Ready to see the full flow — templates, logging, and AI coaching?
          </p>
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/product"
              className="w-full rounded-xl border border-white/10 bg-carbon-50 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-neon-blue/40 sm:w-auto"
            >
              How the product works
            </Link>
            <Link
              href="/pricing"
              className="w-full rounded-xl border border-white/10 bg-carbon-50 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-neon-blue/40 sm:w-auto"
            >
              View pricing
            </Link>
            <Link
              href="/faq"
              className="w-full rounded-xl border border-neon-green/30 bg-neon-green/10 px-6 py-3 text-center text-sm font-bold text-neon-green transition hover:bg-neon-green/15 sm:w-auto"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
