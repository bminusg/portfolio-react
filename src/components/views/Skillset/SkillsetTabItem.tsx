import React, { useEffect, useRef, useState } from "react";
import type { Skill } from "./index.tsx";
import { Icon } from "@/components/ui/Icon.tsx";

export const SkillsetTabItem: React.FC<Skill> = ({ level, label, id }) => {
	const [displayLevel, setDisplayLevel] = useState(0);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		let start: number | null = null;

		const animate = (timestamp: number) => {
			if (!start) start = timestamp;

			const progress = timestamp - start;
			const duration = 600;
			const nextLevel = Math.min(
				Math.floor((progress / duration) * level),
				level,
			);

			setDisplayLevel(nextLevel);

			if (nextLevel < level) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [level]);

	return (
		<li className="skills--list-item">
			<div
				className="skills--icon flex items-center justify-center"
				title={label}
			>
				<Icon name={id} fill="var(--color-grey-500)" size="var(--gap-300)" />
			</div>
			<div className="skills--label">
				<small>{label}</small>
			</div>
			<div className="skills--bar">
				<span>
					<span style={{ width: `${displayLevel}%` }}></span>
				</span>
			</div>
			<div className="skills--level flex items-center gap-100">
				<h3>{displayLevel}</h3>
				<span>%</span>
			</div>
		</li>
	);
};
