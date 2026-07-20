import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: 8 June 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-400">
          {children}
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-sm font-semibold text-neon-green hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function MedicalDisclaimerBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neon-green/25 bg-carbon-50 p-5 text-xs leading-relaxed tracking-wide text-gray-300">
      {children}
    </div>
  );
}

export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="font-semibold text-neon-blue hover:underline">
      {children}
    </a>
  );
}
