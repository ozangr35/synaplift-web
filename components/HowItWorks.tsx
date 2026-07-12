import { ArrowRight, Brain, ClipboardList, Flame } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import Reveal from "@/components/Reveal";
import { assets } from "@/lib/assets";

const flowScreens = [
  {
    src: assets.screenshots.flowWorkout,
    alt: "SynapLift active workout logging screen",
    label: "Log sets",
  },
  {
    src: assets.screenshots.featureProgress,
    alt: "SynapLift strength progress chart",
    label: "Track PRs",
  },
  {
    src: assets.screenshots.flowCalendar,
    alt: "SynapLift workout calendar and history",
    label: "Review history",
  },
];

const steps = [
  {
    step: "01",
    title: "Build Template",
    description:
      "Create custom workout templates with exercises, sets, and targets — or start from proven routines.",
    icon: ClipboardList,
    color: "text-neon-blue",
    bg: "bg-neon-blue/15",
    ring: "ring-neon-blue/25",
  },
  {
    step: "02",
    title: "Crush Workout",
    description:
      "Log every set with rest timers, quick entry, and live volume tracking while you train.",
    icon: Flame,
    color: "text-neon-green",
    bg: "bg-neon-green/15",
    ring: "ring-neon-green/25",
  },
  {
    step: "03",
    title: "AI Analysis",
    description:
      "Review progress charts, chat with your AI Coach, and run Scan AI for physique insights.",
    icon: Brain,
    color: "text-neon-blue",
    bg: "bg-neon-blue/15",
    ring: "ring-neon-blue/25",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="section-shell">
        <Reveal className="mb-10 text-center sm:mb-14">
          <p className="section-eyebrow text-neon-blue">How it works</p>
          <h2 className="mt-3 text-[clamp(1.75rem,4.5vw,2.25rem)] font-black tracking-tight">
            From plan to progress in{" "}
            <span className="text-gradient-neon">three steps</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={index * 70}>
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl ${item.bg} ring-1 ${item.ring}`}
                  >
                    <Icon className={`h-7 w-7 ${item.color}`} strokeWidth={2} />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-carbon-100 text-[10px] font-black text-white ring-1 ring-white/10">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="mt-6 h-5 w-5 rotate-90 text-gray-600 md:hidden"
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="mt-10 rounded-3xl border border-white/8 bg-carbon-50 p-5 sm:mt-14 sm:p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {flowScreens.map((screen) => (
              <div
                key={screen.src}
                className="flex w-full flex-col items-center gap-3"
              >
                <PhoneMockup src={screen.src} alt={screen.alt} size="flow" />
                <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
