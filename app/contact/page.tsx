import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact — SynapLift",
  description: "Contact SynapLift — support, feedback, and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Questions about the app, billing, or partnerships — we read every
          message.
        </p>

        <div className="mt-10 space-y-6">
          <a
            href="mailto:support@myon.nl"
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-6 transition hover:border-neon-blue/30"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-blue" />
            <div>
              <p className="font-bold text-white">Email</p>
              <p className="mt-1 text-sm text-neon-blue">support@myon.nl</p>
              <p className="mt-2 text-sm text-gray-500">
                Support, feedback, App Store & subscription help
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-carbon-50 p-6">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon-green" />
            <div>
              <p className="font-bold text-white">Company</p>
              <p className="mt-1 text-sm text-gray-400">SynapLift · Netherlands</p>
              <p className="mt-1 text-xs text-gray-600">KVK: 12345678</p>
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
