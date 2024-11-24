/** @type {import('next').NextConfig} */
import i18nextConfig from './next-i18next.config.mjs';

const nextConfig = {
    transpilePackages: ['@fortawesome/fontawesome-svg-core'],
    reactStrictMode: true,
    i18n: i18nextConfig.i18n, 
  };
  
export default nextConfig;
