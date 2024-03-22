/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_BLOG_ID: process.env.NOTION_BLOG_ID,
    RAINDROP_TOKEN: process.env.RAINDROP_TOKEN,
    URL_YOUTUBE: process.env.URL_YOUTUBE,
    URL_GITHUB: process.env.URL_GITHUB,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'i.ytimg.com'],
  },
  i18n
}

module.exports = nextConfig
