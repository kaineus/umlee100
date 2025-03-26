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
};

module.exports = nextConfig; 