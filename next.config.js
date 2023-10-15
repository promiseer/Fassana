/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'dummyimage.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
