/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_BLOG_ID: process.env.NOTION_BLOG_ID
  }
}

module.exports = nextConfig
