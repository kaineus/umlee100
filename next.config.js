/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-72d12d452df34e21a92b52490a74585c.r2.dev',
      },
      {
        protocol: 'https',
        hostname: '295698880122ee7640b09b4da41cdbe2.r2.cloudflarestorage.com',
      },
    ],
  },
  env: {
    CLOUDFLARE_R2_PUBLIC_URL: process.env.CLOUDFLARE_R2_PUBLIC_URL,
    CLOUDFLARE_R2_BUCKET: process.env.CLOUDFLARE_R2_BUCKET,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
