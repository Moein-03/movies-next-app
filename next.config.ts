import { pattern } from "framer-motion/client";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '6500',
        pathname: '/movie/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '6500',
        pathname: '/casts/**',
      },
    ],
  },
};

export default nextConfig;
