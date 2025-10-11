import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      domains: ["img.youtube.com", "i.ytimg.com", "picsum.photos", "flagsapi.com", "flagcdn.com"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "img.youtube.com",
            pathname: "/vi/**",
         },
         {
            protocol: "https",
            hostname: "i.ytimg.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "picsum.photos",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "flagsapi.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "flagcdn.com",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
