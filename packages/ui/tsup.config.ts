import postcssPlugin from "esbuild-postcss";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/index.ts", "src/configs/*.ts"],
	format: ["esm"],
	dts: true,
	clean: false,
	sourcemap: true,
	splitting: true,
	target: "es2022",
	external: ["react", "react/jsx-runtime"],
	minify: !options.watch,
	// banner: { js: '"use client";' },
	treeshake: true,
	loader: {
		".css": "default",
	},
	esbuildPlugins: [
		postcssPlugin({
			extensions: [".css"],
		}),
	],
	esbuildOptions(options) {
		options.loader = {
			...options.loader,
			".css": "css",
		};

		options.format = "esm";
	},
}));