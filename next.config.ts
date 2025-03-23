import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["plus.unsplash.com", "picsum.photos", "images.unsplash.com"], // Add allowed domains
  },
};

export default nextConfig;
