import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StoreBadgeRow } from "@/components/StoreBadge";
import Link from "next/link";
import { Mail } from "lucide-react";
import { supportEmail } from "@/lib/legal";

export const metadata = {
  title: "Download | SynapLift",
  description:
    "SynapLift is coming soon on the App Store and Google Play. No public store listing yet.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
          Download
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Coming soon
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          SynapLift is not on the App Store or Google Play yet. We do not have
          public store listings, and we will not post placeholder download
          links. Official badges below will become live links when the stores
          approve the app.
        </p>

        <div className="mt-10 rounded-2xl border border-white/8 bg-carbon-50 p-6 sm:p-8">
          <StoreBadgeRow />
          <p className="mt-4 text-center text-xs text-gray-500">
            App Store and Google Play · coming soon
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/faq#launch"
            className="w-full rounded-xl border border-neon-green/30 bg-neon-green/10 px-5 py-2.5 text-center text-sm font-semibold text-neon-green transition hover:bg-neon-green/15 sm:w-auto"
          >
            Launch FAQ
          </Link>
          <Link
            href="/pricing"
            className="w-full rounded-xl border border-white/10 bg-carbon-50 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-neon-blue/40 sm:w-auto"
          >
            Free vs Pro
          </Link>
        </div>

        <a
          href={`mailto:${supportEmail}`}
          className="mt-8 flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-6 transition hover:border-neon-blue/30"
        >
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-blue" />
          <div>
            <p className="font-bold text-white">Questions about launch?</p>
            <p className="mt-1 text-sm text-neon-blue">{supportEmail}</p>
            <p className="mt-2 text-sm text-gray-500">
              Email us for launch updates. There is no public waitlist or
              TestFlight link yet.
            </p>
          </div>
        </a>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-neon-green hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
