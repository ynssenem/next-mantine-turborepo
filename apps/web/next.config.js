import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
	reactStrictMode: false,
	experimental: {
		turbo: {
			enabled: true,
		},
		optimizePackageImports: [
			"@mantine/core",
			"@mantine/hooks",
			"@repo/ui",
			"@tabler/icons-react",
		],
	},
});