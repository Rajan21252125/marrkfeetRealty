import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["plus.unsplash.com", "unsplash.com", "images.unsplash.com"], // Add allowed domains
  },
};

export default nextConfig;
