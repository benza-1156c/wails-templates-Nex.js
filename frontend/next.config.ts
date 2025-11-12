import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  compress: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
