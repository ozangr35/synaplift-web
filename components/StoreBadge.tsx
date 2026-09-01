import Image from "next/image";
import { assets } from "@/lib/assets";
import { appStoreUrl, playStoreUrl } from "@/lib/site";

const badges = {
  "app-store": {
    src: assets.badges.appStore,
    width: 120,
    height: 40,
    label: "Download on the App Store",
    soonLabel: "App Store, coming soon",
    defaultHref: appStoreUrl,
  },
  "google-play": {
    src: assets.badges.googlePlay,
    width: 135,
    height: 52,
    label: "Get it on Google Play",
    soonLabel: "Google Play, coming soon",
    defaultHref: playStoreUrl,
  },
} as const;

type StoreBadgeProps = {
  store: keyof typeof badges;
  href?: string | null;
};

/** Official badges only. Renders as non-links until store URLs are set in lib/site.ts. */
export function StoreBadgeRow({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex flex-wrap items-center justify-center gap-3"}>
      <StoreBadge store="app-store" />
      <StoreBadge store="google-play" />
    </div>
  );
}

export default function StoreBadge({ store, href }: StoreBadgeProps) {
  const badge = badges[store];
  const resolvedHref = href !== undefined ? href : badge.defaultHref;
  const isLive = Boolean(resolvedHref);

  const image = (
    <Image
      src={badge.src}
      alt=""
      width={badge.width}
      height={badge.height}
      className={`h-10 w-auto sm:h-11 ${isLive ? "opacity-95 transition hover:opacity-100" : "opacity-55"}`}
    />
  );

  if (isLive) {
    return (
      <a
        href={resolvedHref!}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={badge.label}
        className="inline-flex shrink-0"
      >
        {image}
      </a>
    );
  }

  return (
    <div aria-label={badge.soonLabel} className="inline-flex shrink-0 cursor-default">
      {image}
    </div>
  );
}
