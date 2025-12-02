import { useState, useEffect } from "react";
import { Minimize2, ExternalLink, CircleCheck, Swords } from "lucide-react";

import { Button } from "@/components/ui/Button.tsx";
import { Badge } from "@/components/ui/Badge.tsx";
import { Icon } from "@/components/ui/Icon.tsx";

import type { Skill } from "@/components/views/Skillset";

export interface ProjectProps {
	isActive: boolean;
	item: ProjectItem | null;
	doCollapse: () => void;
}

export interface ProjectDetail {
	id: string;
	value: string;
}

export interface ProjectItem {
	id: string;
	title: string;
	desc: string;
	tasks: ProjectDetail[];
	challanges: ProjectDetail[];
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
			<div className="projects--layer-content">
				<h3>{item?.title}</h3>
				<div className="projects--layer-badges flex gap-150">
					{item?.techStack?.map((tech) => (
						<Badge key={`projects--layer-badges__item_${tech.id}`}>
							<Icon name={tech.id} />
							<span>{tech.label}</span>
						</Badge>
					))}
				</div>

				<div className="projects--content-txt">
					<div className="projects--content-txt__scroll">
						<div className="projects--content-txt__desc mb-200">
							<h4 className="mb-100">Description</h4>
							<p>{item?.desc}</p>
						</div>

						<div className="flex flex-wrap gap-200">
							<div className="projects--content-txt__tasks">
								<h4 className="mb-100">Tasks</h4>
								<ul>
									{item?.tasks.map((task) => (
										<li key={task.id}>
											<i>
												<CircleCheck
													size="12"
													color="var(--color-primary-500)"
												/>
											</i>
											<span>{task.value}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="projects--content-txt__challenges">
								<h4 className="mb-100">Challenges</h4>
								<ul>
									{item?.challanges.map((challange) => (
										<li key={challange.id}>
											<i>
												<Swords size="12" color="var(--color-primary-500)" />
											</i>
											<span>{challange.value}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
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
