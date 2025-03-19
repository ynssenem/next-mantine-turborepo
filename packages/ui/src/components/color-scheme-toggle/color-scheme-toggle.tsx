import { Button, Group, useMantineColorScheme } from "@mantine/core";
import {
	IconDeviceImacFilled,
	IconMoonFilled,
	IconSunFilled,
} from "@tabler/icons-react";

export function ColorSchemeToggle() {
	const { setColorScheme } = useMantineColorScheme();

	return (
		<Group justify="center" mt="xl">
			<Button
				onClick={() => setColorScheme("light")}
				leftSection={<IconSunFilled size={16} />}
			>
				Light
			</Button>
			<Button
				onClick={() => setColorScheme("dark")}
				leftSection={<IconMoonFilled size={16} />}
			>
				Dark
			</Button>
			<Button
				onClick={() => setColorScheme("auto")}
				leftSection={<IconDeviceImacFilled size={16} />}
			>
				Auto
			</Button>
		</Group>
	);
}
