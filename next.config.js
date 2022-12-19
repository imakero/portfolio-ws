/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  i18n: {
    localeDetection: false,
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["a.storyblok.com"],
  },
};

module.exports = nextConfig;
