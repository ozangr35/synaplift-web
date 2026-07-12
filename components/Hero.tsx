import { Sparkles } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import StoreBadge from "@/components/StoreBadge";
import { assets } from "@/lib/assets";
import { appStoreUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow-blue" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow-green" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-30"
      />

      <div className="section-shell relative">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
          {/* Copy — always visible, no entrance animation */}
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-blue/25 bg-neon-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon-blue sm:mb-6">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              Built for Serious Lifters
            </div>

            <h1 className="w-full text-[clamp(1.875rem,5.5vw,3.25rem)] font-black leading-[1.08] tracking-tight text-white">
              Your Personal Trainer,{" "}
              <span className="text-gradient-neon">In Your Pocket.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
              Strength without the spreadsheet. SynapLift logs your sets, tracks PRs
              and volume, and coaches you from your real training history — including
              quick answers on whether your food looks healthy when you ask or send a
              photo.
            </p>

            <div
              id="download"
              className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 md:justify-start"
            >
              <StoreBadge store="app-store" href={appStoreUrl} />
            </div>

            <p className="mt-5 text-xs text-gray-600 sm:mt-6">
              Free to start · SynapLift Pro unlocks AI Coach & Scan AI
            </p>
          </div>

          {/* Phone */}
          <div className="mx-auto flex w-full min-w-0 justify-center md:justify-end">
            <div className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[220px] lg:max-w-[228px]">
              <div className="hero-float relative phone-glow rounded-[2.5rem]">
                <PhoneMockup
                  src={assets.screenshots.heroHome}
                  alt="SynapLift home screen showing weekly summary and AI Coach"
                  size="lg"
                  priority
                  className="w-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
