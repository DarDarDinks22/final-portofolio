import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  output: 'export',
  images: {
    unoptimized: true, 
    domains: ['upload.wikimedia.org', 'i.imgur.com'],
  },
};

export default nextConfig;