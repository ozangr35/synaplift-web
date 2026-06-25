import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "flow" | "lg";
};

const sizeClass = {
  sm: "max-w-[118px]",
  md: "max-w-[158px]",
  flow: "max-w-[200px]",
  lg: "max-w-[300px]",
} as const;

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  size = "md",
}: PhoneMockupProps) {
  return (
    <div className={`relative w-full ${sizeClass[size]} ${className}`}>
      <div className="rounded-[1.6rem] border border-white/10 bg-carbon-50 p-1.5 shadow-neon">
        <div className="relative aspect-[473/948] w-full overflow-hidden rounded-[1.25rem] border border-gray-800 bg-carbon">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              size === "lg"
                ? "(min-width: 1024px) 300px, 75vw"
                : size === "flow"
                  ? "(min-width: 768px) 200px, 45vw"
                  : "(min-width: 768px) 160px, 40vw"
            }
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
