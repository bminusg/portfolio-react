import { SkillsetTabItem } from "./SkillsetTabItem";
import type { Skill } from "./index.tsx";

export const SkillsetTabs = ({ data }: { data: Skill[] }) => {
	return (
		<ul className="skills--list">
			{data.map((item) => (
				<SkillsetTabItem
					key={`skill-item-${item.id}`}
					id={item.id}
					level={item.level}
					label={item.label}
				/>
			))}
		</ul>
	);
};
