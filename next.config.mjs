/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.ghost.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.thetechmaze.me",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "192.34.60.49",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
