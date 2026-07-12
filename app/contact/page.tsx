import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import {
  companyLegalLine,
  kvkDisplay,
  supportEmail,
} from "@/lib/legal";

export const metadata = {
  title: "Contact — SynapLift",
  description: "Contact SynapLift — support, feedback, and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <Navbar />
      <article className="page-article">
        <p className="section-eyebrow text-neon-blue">Contact</p>
        <h1 className="mt-3 text-[clamp(1.75rem,4.5vw,2.25rem)] font-black tracking-tight text-white">
          Get in touch
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          Questions about the app, billing, or partnerships — we read every
          message. Reach us at{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="break-all font-semibold text-neon-blue hover:underline"
          >
            {supportEmail}
          </a>
          .
        </p>

        <div className="mt-10 space-y-4 sm:space-y-6">
          <a
            href={`mailto:${supportEmail}`}
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-5 transition hover:border-neon-blue/30 sm:p-6"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-blue" />
            <div className="min-w-0">
              <p className="font-bold text-white">Support</p>
              <p className="mt-1 break-all text-sm text-neon-blue">{supportEmail}</p>
              <p className="mt-2 text-sm text-gray-500">
                Support, feedback, App Store &amp; subscription help
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-5 sm:p-6">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon-green" />
            <div className="min-w-0">
              <p className="font-bold text-white">Company</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{companyLegalLine}</p>
              <p className="mt-1 text-xs text-gray-600">{kvkDisplay}</p>
            </div>
          </div>
        </div>

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
