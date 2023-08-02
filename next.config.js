/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.scdn.co",
      "hips.hearstapps.com",
      "upload.wikimedia.org",
      "images-ak.spotifycdn.com",
      "mosaic.scdn.co",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
