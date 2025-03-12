import postcssPlugin from "esbuild-postcss";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/index.ts", "src/**/*.ts", "src/**/*.tsx", "src/**/*.css"],
	format: ["cjs", "esm"],
	dts: true,
	clean: false,
	sourcemap: true,
	target: "es2022",
	external: ["react", "react/jsx-runtime"],
	minify: !options.watch,
	banner: { js: '"use client";' },
	treeshake: true,
	loader: {
		".css": "default",
	},
	esbuildPlugins: [postcssPlugin()],
	esbuildOptions(options) {
		options.loader = {
			...options.loader,
			".css": "css",
		};
	},
}));