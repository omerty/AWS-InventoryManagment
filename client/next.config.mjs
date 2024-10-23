/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a3-inventorymanagment.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
