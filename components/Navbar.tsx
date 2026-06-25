"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto mt-4 max-w-6xl px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "mt-2" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-white/10 bg-carbon/80 shadow-glass"
              : "border-white/5 bg-carbon/50"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/branding/myon-app-icon.png"
              alt="SynapLift"
              width={36}
              height={36}
              className="rounded-xl ring-1 ring-white/10 transition group-hover:ring-neon-blue/40"
              priority
            />
            <Image
              src="/branding/myon-logo-wordmark.png"
              alt="SynapLift"
              width={88}
              height={24}
              className="hidden h-6 w-auto sm:block"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-5 py-2.5 text-sm font-bold text-carbon shadow-neon transition hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Now
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-white/10 bg-carbon/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-5 py-3 text-sm font-bold text-carbon"
              >
                <Download className="h-4 w-4" />
                Download Now
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
