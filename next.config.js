const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Set the base path for the Next.js application
  basePath: isProd ? '/UNIAI' : '',

  // Set the asset prefix for the Next.js application
  assetPrefix: isProd ? '/UNIAI/' : '',

  // Other Next.js configuration options...
};
