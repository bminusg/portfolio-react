import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button.tsx";
import { Badge } from "@/components/ui/Badge.tsx";
import { Minimize2, ExternalLink } from "lucide-react";
import { Icon } from "@/components/ui/Icon.tsx";

import type { Skill } from "@/components/views/Skillset";

export interface ProjectProps {
	isActive: boolean;
	item: ProjectItem | null;
	doCollapse: () => void;
}

export interface ProjectItem {
	id: string;
	title: string;
	desc: string;
	techStack: Omit<Skill, "level">[];
	cta?: {
		label: string;
		href: string;
	};
}

export const Project = ({ isActive, doCollapse, item }: ProjectProps) => {
	const [isMounted, setIsMounted] = useState(isActive);
	const [animState, setAnimState] = useState(
		isActive ? "is--expand" : "is--collapse",
	);

	useEffect(() => {
		if (isActive) {
			setIsMounted(true);
			setAnimState("is--expand");
		} else {
			setIsMounted(false);
		}
	}, [isActive]);

	const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		if (animState !== "is--collapse") return;

		doCollapse();
	};

	if (!isMounted) return null;

	return (
		<div
			className={`projects--layer flex ${animState}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className="projects--layer-preview"></div>
			<div className="projects--layer-content flex flex-col">
				<h3 className="">{item?.title}</h3>
				<div className="projects--layer-badges flex flex-wrap gap-200">
					{item?.techStack?.map((tech) => (
						<Badge key={`projects--layer-badges__item_${tech.id}`}>
							<Icon name={tech.id} />
							<span>{tech.label}</span>
						</Badge>
					))}
				</div>
				<p className="projects--layer-content__desc">{item?.desc}</p>
				<p className="projects--layer-content__footer flex gap-200">
					<Button
						color="neutral"
						variant="outline"
						onClick={() => setAnimState("is--collapse")}
					>
						<Minimize2 size="1.5em" />
						<span>Collapse</span>
					</Button>

					{item?.cta && (
						<Button
							variant="outline"
							color="primary"
							onClick={() => window.open(item?.cta?.href, "_blank")}
						>
							<ExternalLink size="1.5em" />
							<span>{item.cta.label}</span>
						</Button>
					)}
				</p>
			</div>
		</div>
	);
};
