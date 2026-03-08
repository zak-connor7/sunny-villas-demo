/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.web-dynamic.gr' },
      { protocol: 'https', hostname: 'www.sunnyvillashalkidiki.com' },
    ],
  },
}

module.exports = nextConfig
