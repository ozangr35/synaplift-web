import Image from "next/image";
import { assets } from "@/lib/assets";

const badges = {
  "app-store": {
    src: assets.badges.appStore,
    width: 120,
    height: 40,
    label: "Download on the App Store",
    soonLabel: "App Store — coming soon",
  },
  "google-play": {
    src: assets.badges.googlePlay,
    width: 135,
    height: 52,
    label: "Get it on Google Play",
    soonLabel: "Google Play — coming soon",
  },
} as const;

type StoreBadgeProps = {
  store: keyof typeof badges;
  href?: string | null;
};

export default function StoreBadge({ store, href }: StoreBadgeProps) {
  const badge = badges[store];
  const isLive = Boolean(href);

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
        href={href!}
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
