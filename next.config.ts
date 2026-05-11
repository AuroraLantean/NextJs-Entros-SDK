import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
    //"mongoose",
  ],
};
export default nextConfig;
