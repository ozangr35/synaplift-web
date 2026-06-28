import { Mail } from "lucide-react";
import Link from "next/link";
import { companyLegalLine, kvkDisplay, supportEmail } from "@/lib/legal";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pitch", label: "Pitch" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-carbon">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight text-white">SynapLift</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
              Strength training, powered by AI. Built for lifters who want smarter
              logs, sharper insights, and a coach in their pocket.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-gray-400 transition hover:text-neon-blue"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex items-center gap-2 font-semibold text-gray-400 transition hover:text-neon-green"
            >
              <Mail className="h-4 w-4" />
              Contact: {supportEmail}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {companyLegalLine.split(" · ")[0]}</p>
          <p>{kvkDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
