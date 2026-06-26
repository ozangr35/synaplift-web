import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages builds only — `output: "export"` breaks `next dev`.
  ...(isProd ? { output: "export" as const } : {}),
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
