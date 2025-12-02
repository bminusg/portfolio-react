import { useMemo } from "react";

import { SkillsetTabItem } from "./SkillsetTabItem";
import type { Skill } from "./index.tsx";
import type { TabsItem } from "@/components/ui/Tabs.tsx";

export const SkillsetTabs = ({
	activeID,
	items,
}: {
	activeID: string | null;
	items: TabsItem<Skill[]>[];
}) => {
	const maxSkillItems = useMemo(
		() =>
			items
				.map((item) => item.data.length)
				.reduce((prev, acc) => Math.max(prev, acc)),
		[items],
	);

	const skills = useMemo<Skill[]>(() => {
		const activeItem = items.find((item) => item.id === activeID);

		if (!activeItem) return [];

		const { data } = activeItem;

		return data;
	}, [activeID, items]);

	return (
		<ul
			className="skills--list"
			style={{
				minHeight: `calc(var(--gap-400) * ${maxSkillItems})`,
				gridTemplateRows: `repeat(${maxSkillItems}, var(--gap-400))`,
			}}
		>
			{skills.map((item) => (
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
