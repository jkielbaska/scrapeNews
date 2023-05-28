/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["www.si.com"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};
module.exports = nextConfig;
