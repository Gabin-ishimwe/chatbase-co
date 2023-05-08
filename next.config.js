/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "backend.chatbase.co", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
