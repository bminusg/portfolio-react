import { useState, useCallback, useEffect } from "react";
import { Project } from "./Project.tsx";
import { Icon } from "@/components/ui/Icon";

import "@/sass/pages/projects.sass";

import type { ProjectItem } from "./Project.tsx";

export const ProjectsView = ({ isActive }: { isActive: boolean }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [activeItem, setActiveItem] = useState<ProjectItem | null>(null);

	const items: ProjectItem[] = [
		{
			id: "ad-glance",
			title: "Ad glance",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [
				{
					id: "vue",
					label: "Vue",
				},
				{
					id: "ts",
					label: "TypeScript",
				},
				{
					id: "supabase",
					label: "Supabase",
				},
				{
					id: "figma",
					label: "Figma",
				},
			],
			cta: {
				label: "Browse Code",
				href: "https://github.com/bminusg/ad-glance",
			},
		},
		{
			id: "ad-kit",
			title: "Ad kit",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [
				{
					id: "ts",
					label: "TypeScript",
				},
				{
					id: "node",
					label: "Node",
				},
				{
					id: "sass",
					label: "SASS",
				},
			],
		},
		{
			id: "tween-sass",
			title: "Tween SASS",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [
				{
					id: "sass",
					label: "SASS",
				},
			],
			cta: {
				label: "Browse Code",
				href: "https://github.com/bminusg/tween-sass",
			},
		},
		{
			id: "highimpact-ads",
			title: "High Impact Ads",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [
				{
					id: "js",
					label: "JavaScript",
				},
				{
					id: "sass",
					label: "SASS",
				},
			],
		},
	];

	const doCollapse = useCallback(() => {
		setIsExpanded(false);
	}, []);

	function doExpand(item: ProjectItem) {
		setIsExpanded(true);
		setActiveItem(item);
	}

	useEffect(() => {
		const body = document.body;
		const section = document.getElementById("work");

		if (!section) return;

		if (isExpanded) {
			body.style.overflow = "hidden";
			section.scrollIntoView({ behavior: "smooth" });
		} else {
			body.style.overflow = "auto";
		}
	}, [isExpanded]);

	useEffect(() => {
		if (isActive) return;

		setIsExpanded(false);
		setActiveItem(null);
	}, [isActive]);

	const onClick = (event: React.MouseEvent, item: ProjectItem) => {
		event.preventDefault();
		doExpand(item);
	};

	return (
		<>
			<ul className="projects--list">
				{items.map((item) => (
					<li
						key={item.id}
						className="projects--list-item flex items-end"
						onClick={(event) => onClick(event, item)}
					>
						<div className="projects--list-content">
							<h3 className="mb-150">{item.title}</h3>
							<ul className="flex gap-150 mb-200">
								{item.techStack.map((skill) => (
									<li key={skill.id}>
										<Icon
											name={skill.id}
											fill="var(--color-primary)"
											size="var(--gap-250)"
											title={skill.label}
										/>
									</li>
								))}
							</ul>
							<small>{item.desc}</small>
						</div>
					</li>
				))}
			</ul>
			<Project
				isActive={isExpanded && isActive}
				doCollapse={doCollapse}
				item={activeItem}
			/>
		</>
	);
};
