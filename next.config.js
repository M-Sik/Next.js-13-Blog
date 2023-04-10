/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // ssg 정적 빌드를 위한 설정
  // output: 'export',
  // distDir: 'dist',
  // trailingSlash: true,
  // assetPrefix: '.',
};

module.exports = nextConfig;
