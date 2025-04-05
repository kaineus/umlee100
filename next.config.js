/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turbopack과 호환되지 않는 swcMinify 옵션 제거
  compiler: {
    // SWC 컴파일러 옵션
    styledComponents: false,
  },
  // 3D 모델 파일 확장자 추가
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images',
        },
      },
    });

    return config;
  },
  images: {
    domains: ['pub-72d12d452df34e21a92b52490a74585c.r2.dev', '295698880122ee7640b09b4da41cdbe2.r2.cloudflarestorage.com'],
  },
  env: {
    CLOUDFLARE_R2_PUBLIC_URL: process.env.CLOUDFLARE_R2_PUBLIC_URL,
    CLOUDFLARE_R2_BUCKET: process.env.CLOUDFLARE_R2_BUCKET,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};

module.exports = nextConfig; 