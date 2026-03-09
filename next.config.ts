import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Trade-Network-Limited' : '',
  assetPrefix: isProd ? '/Trade-Network-Limited/' : '',
};

export default nextConfig;
