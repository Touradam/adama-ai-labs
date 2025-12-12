import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages (repository name)
  basePath: process.env.NODE_ENV === 'production' ? '/adama-ai-labs' : '',
  
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/adama-ai-labs/' : '',

  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable experimental features if needed
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
