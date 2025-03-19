import "@repo/ui/global.css";

import {
	ColorSchemeScript,
	MantineProvider,
	mantineHtmlProps,
} from "@mantine/core";

import { Theme } from "@repo/ui/theme";
import type { PropsWithChildren } from "react";

export const metadata = {
	title: "Mantine Next.js template",
	description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body>
				<MantineProvider theme={Theme}>{children}</MantineProvider>
			</body>
		</html>
	);
}