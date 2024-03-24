const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/UNIAI' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/UNIAI/' : '',
  experimental: {
    serverlessTrace: true,
  },
};

export default nextConfig;
