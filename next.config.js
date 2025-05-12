/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // This allows us to use images from Unsplash for placeholders
  },
}

module.exports = nextConfig 