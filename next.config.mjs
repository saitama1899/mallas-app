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
	images: {
		// domains: ['test.com'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
