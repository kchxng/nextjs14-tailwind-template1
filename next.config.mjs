/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // For static"
  // Enable hostname for remote access image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
