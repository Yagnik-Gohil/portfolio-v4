import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
    ],
  },
  trailingSlash: true,
  output: 'export'
};

export default nextConfig;
