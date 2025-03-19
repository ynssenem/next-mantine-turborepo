"use client";

import { ColorSchemeToggle } from "@repo/ui/components/color-scheme-toggle";
import { Welcome } from "@repo/ui/components/welcome";

export default function HomePage() {
	return (
		<>
			<Welcome />
			<ColorSchemeToggle />
		</>
	);
}
