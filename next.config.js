/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // domains: ["res.cloudinary.com"],
      },
    ],
  },
});

// images: {
//   domains: ['res.cloudinary.com'],
// },
