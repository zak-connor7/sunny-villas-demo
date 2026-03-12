/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.sunnyvillashalkidiki.com' },
    ],
  },
}

module.exports = nextConfig
