"use client";
import { ColorSchemeToggle } from "@repo/ui/color-scheme-toggle";
import { Welcome } from "@repo/ui/welcome";
import classes from "./test.module.css";

export default function HomePage() {
	return (
		<>
			<ColorSchemeToggle />
			<Welcome />
			<div className={classes.testtitle}>test</div>
		</>
	);
}