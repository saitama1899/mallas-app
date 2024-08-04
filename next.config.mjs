import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig = {
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: "static",
					reportFilename: "../bundles/report.html",
					openAnalyzer: false,
				}),
			);
		}

		if (dev) {
			config.optimization.minimize = false;
		} else {
			config.optimization.minimize = true;
			config.optimization.minimizer = [
				new TerserPlugin({
					terserOptions: {
						compress: true,
						mangle: true,
						output: {
							comments: false,
						},
					},
				}),
			];
		}

		config.optimization.concatenateModules = true;

		return config;
	},
	images: {
		domains: ["https://mallas-app.vercel.app"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
