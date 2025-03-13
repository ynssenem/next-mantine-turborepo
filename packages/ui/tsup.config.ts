import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/**/*.{ts,tsx}"],
	format: ["esm", "cjs"],
	clean: true,
	dts: true,
	minify: !options.watch,
	loader: {
		".css": "default",
	},
	esbuildPlugins: [
		preserveDirectivesPlugin({
			directives: ["use client", "use strict"],
			include: /\.(js|ts|jsx|tsx)$/,
			exclude: /node_modules/,
		}),
	],
}));