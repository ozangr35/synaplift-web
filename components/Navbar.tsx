"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const linkClass = (active: boolean) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
      active
        ? "bg-white/8 text-white"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/95">
      <div className="mx-auto flex h-[60px] w-full max-w-6xl min-w-0 items-center justify-between gap-2 px-4 sm:h-[64px] sm:gap-3 sm:px-6">
        <Link
          href="/"
          scroll
          onClick={goHome}
          className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[22%] bg-black ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue sm:h-11 sm:w-11"
          aria-label="SynapLift home"
        >
          <img
            src={assets.branding.appIcon}
            alt=""
            width={44}
            height={44}
            decoding="async"
            className="block h-full w-full object-contain object-center"
          />
        </Link>

        {/* Desktop nav — hidden on small screens to prevent crowding */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/#features"
                ? pathname === "/"
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors lg:px-4 ${
                  active
                    ? "bg-white/8 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/#pricing"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-2.5 text-xs font-bold text-carbon shadow-neon transition-opacity hover:opacity-90 sm:h-auto sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            aria-label="Download SynapLift app"
            onClick={() => setMenuOpen(false)}
          >
            <Download className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Download App</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/8 bg-carbon transition-[max-height,opacity] duration-200 ease-out md:hidden ${
          menuOpen
            ? "max-h-[min(24rem,calc(100dvh-4rem))] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/#features"
                ? pathname === "/"
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(active)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
