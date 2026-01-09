import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable experimental features if needed
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Compression
  compress: true,

  // Powering off x-powered-by header
  poweredByHeader: false,

  // Generate standalone output for Hostinger
  output: 'standalone',
};

export default nextConfig;
