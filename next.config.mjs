/** @type {import('next').NextConfig} */
import TerserPlugin from "terser-webpack-plugin";

const nextConfig = {
  webpack: (config, { dev /*isServer*/ }) => {
    if (dev) {
      config.optimization.minimize = false;
    } else {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: true,
          },
        }),
      ];
    }

    return config;
  },
};

export default nextConfig;
