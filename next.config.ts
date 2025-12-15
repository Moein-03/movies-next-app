import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
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
