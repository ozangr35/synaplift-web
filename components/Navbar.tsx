"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/branding/synaplift-logo-wordmark.png"
            alt="SynapLift"
            width={220}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-xs font-semibold text-gray-400 transition hover:text-white sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-3 py-2 text-xs font-bold text-carbon shadow-neon transition hover:opacity-90 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Download App
        </Link>
      </div>
    </header>
  );
}
