type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: "sm" | "feature" | "md" | "flow" | "lg";
};

const sizeClass = {
  sm: "w-[min(140px,36vw)] sm:w-[140px]",
  feature: "w-[min(160px,40vw)] sm:w-[168px]",
  md: "w-[min(176px,42vw)] sm:w-[176px]",
  flow: "w-[min(168px,38vw)] sm:w-[188px]",
  lg: "w-[min(200px,48vw)] sm:w-[220px] lg:w-[228px]",
} as const;

/** App screenshots are 473×948 — keep in sync with capture size. */
const SHOT_ASPECT = "473 / 948";

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  size = "md",
}: PhoneMockupProps) {
  const isFeature = size === "feature";

  return (
    <div className={`mx-auto w-full max-w-full shrink-0 ${sizeClass[size]} ${className}`}>
      <div
        className={`overflow-hidden bg-[#0a0a0a] shadow-[0_16px_32px_-14px_rgba(0,0,0,0.55)] ${
          isFeature
            ? "rounded-[1.65rem] border border-white/10 p-[2px]"
            : "rounded-[1.75rem] border border-white/10 p-[2px]"
        }`}
      >
        <div
          className={`relative w-full overflow-hidden bg-black ${
            isFeature ? "rounded-[1.5rem]" : "rounded-[1.6rem]"
          }`}
          style={{ aspectRatio: SHOT_ASPECT }}
        >
          <img
            src={src}
            alt={alt}
            width={473}
            height={948}
            decoding="async"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className={
              isFeature
                ? "absolute inset-0 h-full w-full object-cover object-[center_6%]"
                : "block h-full w-full object-cover object-top"
            }
          />
        </div>
      </div>
    </div>
  );
}
