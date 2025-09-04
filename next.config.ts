import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  output: 'export',
  images: {
    domains: ['upload.wikimedia.org', 'i.imgur.com'], 
    unoptimized: true, 
  },
};

export default nextConfig;