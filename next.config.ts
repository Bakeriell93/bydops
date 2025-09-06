import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://bydops.vercel.app',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'byd-ops-brain-production-secret-key-2024',
  },
};

export default nextConfig;
