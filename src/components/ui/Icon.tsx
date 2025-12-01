import type { Skill } from "../views/Skillset";

export interface IconProps {
	name: Skill["id"] | "logo";
	fill?: string;
	size?: string;
	title?: string;
}

const icons = import.meta.glob("/src/assets/icons/*.svg", {
	eager: true,
	query: "?raw",
	import: "default",
});

export const Icon = ({ name, fill, size, title }: IconProps) => {
	const svg = icons[`/src/assets/icons/${name}.svg`] as string;

	return (
		<i
			className="icon flex"
			style={{ color: fill, fontSize: size }}
			title={title}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: SVG code is sanitized
			dangerouslySetInnerHTML={{ __html: svg }}
		></i>
	);
};
