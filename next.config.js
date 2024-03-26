// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Set the base path for the Next.js application
  basePath: isProd ? '/UNIAI' : '',

  // Set the asset prefix for the Next.js application
  assetPrefix: isProd ? '/UNIAI/' : '',

  // Configure Next.js to export static HTML
  // Learn more: https://nextjs.org/docs/advanced-features/static-html-export
  output: {
    // Set the directory where exported files will be written
    // Adjust the path as needed based on your project structure
    dir: 'out',
  },
};
