import { Mail } from "lucide-react";
import Link from "next/link";
import { companyLegalLine, kvkDisplay, supportEmail } from "@/lib/legal";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/pitch", label: "Pitch" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-carbon">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <p className="text-2xl font-black tracking-tight text-white">SynapLift</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
              Strength training, powered by AI. Built for lifters who want smarter
              logs, sharper insights, and a coach in their pocket.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
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
              className="col-span-2 inline-flex items-center gap-2 font-semibold text-gray-400 transition hover:text-neon-green"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="break-all">{supportEmail}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {companyLegalLine.split(" · ")[0]}</p>
          <p className="sm:text-right">{kvkDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
