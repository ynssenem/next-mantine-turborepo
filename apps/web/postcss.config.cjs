const baseConfig = require("@repo/ui/postcss-config");

module.exports = {
	...baseConfig,
	plugins: {
		...baseConfig.plugins,
		autoprefixer: {},
	},
};