import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-json-server.typicode.com',
        pathname: '/moein-03/movies-next-app-api/**',
      },
    ],
  },
};

export default nextConfig;
