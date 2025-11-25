import type { Skill } from "../views/Skillset";

export interface IconProps {
	name: Skill["id"];
	fill?: string;
	size?: string;
	title?: string;
}

const icons = import.meta.glob("/src/assets/icons/*.svg", {
	eager: true,
	as: "raw",
});

export const Icon = ({ name, fill, size, title }: IconProps) => {
	const svg = icons[`/src/assets/icons/${name}.svg`];

	return (
		<i
			className="icon"
			style={{ color: fill, fontSize: size }}
			title={title}
			dangerouslySetInnerHTML={{ __html: svg }}
		></i>
	);
};
