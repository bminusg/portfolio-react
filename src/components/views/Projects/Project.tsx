import { useState, useEffect } from "react";
import {
	Minimize2,
	ExternalLink,
	CircleCheck,
	Swords,
	ArrowLeft,
	ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/Button.tsx";
import { Badge } from "@/components/ui/Badge.tsx";
import { Icon } from "@/components/ui/Icon.tsx";

import type { Skill } from "@/components/views/Skillset";

export interface ProjectProps {
	isActive: boolean;
	item: ProjectItem | null;
	doCollapse: () => void;
	setNext: () => void;
	setPrev: () => void;
}

export interface ProjectDetail {
	id: string;
	value: string;
}

export interface Source {
	url: string;
	type: "video/webm" | "video/mp4" | "video/mp4;codecs=hvc1" | "image";
}

export interface PreviewAsset {
	id: string;
	type: "image" | "video";
	src: Source[];
	alt?: string;
	isTeaser?: boolean;
	poster?: string;
}

export interface ProjectItem {
	id: string;
	title: string;
	desc: string;
	tasks: ProjectDetail[];
	challenges: ProjectDetail[];
	techStack: Omit<Skill, "level">[];
	assets: PreviewAsset[];
	cta?: {
		label: string;
		href: string;
	};
}

export const Project = ({
	isActive,
	doCollapse,
	item,
	setPrev,
	setNext,
}: ProjectProps) => {
	const [isMounted, setIsMounted] = useState(isActive);
	const [animState, setAnimState] = useState(
		isActive ? "is--expand" : "is--collapse",
	);

	const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		if (animState !== "is--collapse") return;

		doCollapse();
	};

	const hasVideoSourceAlphaSupport = (): boolean => {
		return !/iPad|iPhone/.test(navigator.userAgent);
	};

	useEffect(() => {
		if (isActive) {
			setIsMounted(true);
			setAnimState("is--expand");
		} else {
			setIsMounted(false);
		}
	}, [isActive]);

	if (!isMounted) return null;

	return (
		<div
			className={`projects--layer flex gap-350 ${animState}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className="projects--layer-preview flex justify-center items-center">
				{item?.assets.map((asset) => {
					return (
						<div className="projects--preview-item" key={asset.id}>
							{asset.type === "image" && (
								<img
									src={asset.src[0].url}
									alt={asset.alt || ""}
									className="projects--layer-preview__img"
								/>
							)}

							{asset.type.startsWith("video") && (
								<video
									loop
									muted
									playsInline
									autoPlay
									className="projects--layer-preview__video"
									poster={asset.poster || ""}
								>
									{asset.src
										.filter(hasVideoSourceAlphaSupport)
										.map((source) => (
											<source
												key={source.url}
												src={source.url}
												type={source.type}
											/>
										))}
								</video>
							)}
						</div>
					);
				})}
			</div>
			<div className="projects--layer-content">
				<h2>{item?.title}</h2>

				<p className="projects--layer-content__footer flex gap-200 mb-250">
					<Button color="neutral" variant="outline" onClick={setPrev}>
						<ArrowLeft size="1.5em" />
					</Button>

					<Button color="neutral" variant="outline" onClick={setNext}>
						<ArrowRight size="1.5em" />
					</Button>

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

				<div className="projects--content-txt">
					<div className="projects--content-txt__scroll">
						<div className="projects--layer-badges flex gap-150 mb-300">
							{item?.techStack?.map((tech) => (
								<Badge key={`projects--layer-badges__item_${tech.id}`}>
									<Icon name={tech.id} />
									<span>{tech.label}</span>
								</Badge>
							))}
						</div>

						<div className="flex flex-wrap gap-300">
							<div className="projects--content-txt__desc">
								<h4 className="mb-200">Description</h4>
								<p>{item?.desc}</p>
							</div>

							<div className="projects--content-txt__tasks">
								<h4 className="mb-200">Tasks</h4>
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
								<h4 className="mb-200">Challenges</h4>
								<ul>
									{item?.challenges.map((challange) => (
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
			</div>
		</div>
	);
};
