import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['upload.wikimedia.org','i.imgur.com'],
  },
};

export default nextConfig;