import Image from "next/image";
import { assets } from "@/lib/assets";
import { appStoreUrl } from "@/lib/site";

const badges = {
  "app-store": {
    src: assets.badges.appStore,
    width: 120,
    height: 40,
    label: "Download on the App Store",
    defaultHref: appStoreUrl,
  },
} as const;

type StoreBadgeProps = {
  store: keyof typeof badges;
  href?: string | null;
};

/** Official artwork only when a live store URL is set. Otherwise plain text. */
export function StoreBadgeRow({ className }: { className?: string }) {
  const ios = appStoreUrl ? <StoreBadge store="app-store" /> : null;

  if (!ios) {
    return (
      <p
        className={
          className ?? "text-sm font-semibold text-gray-400"
        }
      >
        Coming soon on iPhone
      </p>
    );
  }

  return (
    <div className={className ?? "flex flex-wrap items-center justify-center gap-3"}>
      {ios}
    </div>
  );
}

export default function StoreBadge({ store, href }: StoreBadgeProps) {
  const badge = badges[store];
  const resolvedHref = href !== undefined ? href : badge.defaultHref;
  if (!resolvedHref) return null;

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={badge.label}
      className="inline-flex shrink-0"
    >
      <Image
        src={badge.src}
        alt=""
        width={badge.width}
        height={badge.height}
        className="h-10 w-auto opacity-95 transition hover:opacity-100 sm:h-11"
      />
    </a>
  );
}
