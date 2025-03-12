import { type MantineThemeOverride, createTheme } from "@mantine/core";

const themeOverride: MantineThemeOverride = {
	/** Put your mantine theme override here */
};

export const Theme: ReturnType<typeof createTheme> = createTheme(themeOverride);

export default Theme;
