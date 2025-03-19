// "use client";

import { type MantineThemeOverride, createTheme } from "@mantine/core";

const themeOverride: MantineThemeOverride = {
	// components: {
	// 	Button: Button.extend({
	// 		defaultProps: {
	// 			variant: "filled",
	// 		},
	// 	}),
	// },
};

export const Theme: ReturnType<typeof createTheme> = createTheme(themeOverride);

export default Theme;
