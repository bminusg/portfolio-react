import { useMemo } from "react";
import { motion } from "framer-motion";

import { SkillsetTabItem } from "./SkillsetTabItem";

import type { Skill } from "./index.tsx";
import type { TabsItem } from "@/components/ui/Tabs.tsx";
import type { Variants } from "framer-motion";

export const SkillsetTabs = ({
	activeID,
	items,
}: {
	activeID: string | null;
	items: TabsItem<Skill[]>[];
}) => {
	const skills = useMemo<Skill[]>(() => {
		const activeItem = items.find((item) => item.id === activeID);

		if (!activeItem) return [];

		const { data } = activeItem;

		return data;
	}, [activeID, items]);

	const listVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.12,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.25,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.ul
			className="skills--list"
			key={activeID}
			layout
			variants={listVariants}
			initial="hidden"
			animate="visible"
		>
			{skills.map((item) => (
				<motion.li
					key={`skill-item-${item.id}`}
					layout
					className="skills--list-item"
					variants={itemVariants}
				>
					<SkillsetTabItem id={item.id} level={item.level} label={item.label} />
				</motion.li>
			))}
		</motion.ul>
	);
};
