"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/product", label: "Product" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();

  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl">
      <div className="mx-auto grid h-[60px] max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-[64px] sm:gap-4 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="flex min-w-0 items-center justify-start gap-0.5 sm:gap-1"
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
                className={`shrink-0 rounded-lg px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition sm:px-4 sm:text-sm ${
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

        <div className="flex justify-center">
          <Link
            href="/"
            scroll
            onClick={goHome}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue sm:h-12 sm:w-12"
            aria-label="SynapLift home"
          >
            <Image
              src="/branding/synaplift-app-icon.png"
              alt=""
              width={48}
              height={48}
              className="h-full w-full rounded-2xl object-cover object-center"
              priority
            />
          </Link>
        </div>

        <div className="flex min-w-0 justify-end">
          <Link
            href="/#download"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-3 py-2 text-xs font-bold whitespace-nowrap text-carbon shadow-neon transition hover:opacity-90 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden min-[420px]:inline">Download App</span>
            <span className="min-[420px]:hidden">Download</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
