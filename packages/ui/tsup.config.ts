import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";
import { defineConfig } from "tsup";

export default defineConfig(() => ({
	entry: ["src/index.ts", "src/configs/*.ts"],
	format: ["esm", "cjs"],
	dts: true,
	// clean: true,
	// sourcemap: true,
	// splitting: true,
	// minify: true,
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