/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: false,
    i18n: {
        locales: ["gr", "en"],
        defaultLocale: "gr",
        localeDetection: false
        }
 };

export default nextConfig;
