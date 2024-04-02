/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// module.exports = nextConfig;
// 개발 단계에서 자동반영을 허용하기 위해 다음과 같이 설정
module.exports = {
  nextConfig: nextConfig,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
