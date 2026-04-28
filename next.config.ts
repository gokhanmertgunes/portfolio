import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "sensgreen.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.ing.com.tr",
        pathname: "/F/Documents/Images/**",
      },
      {
        protocol: "https",
        hostname: "mobileaction.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.mobileaction.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w3.bilkent.edu.tr",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
