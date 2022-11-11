/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ".",
  images: {
    loader: "imgix",
    path: "/",
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      "/about":{page:'/about'}
    }
  },
}

module.exports = nextConfig
