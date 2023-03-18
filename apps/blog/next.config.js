/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['core'],
  compress: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
