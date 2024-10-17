/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['devcloud.raza.cool', "devcloud.disalaud.lat"],
  },
  darkMode: "class",
  experimental: {
    reactCompiler: true,
  }
};

export default nextConfig;
