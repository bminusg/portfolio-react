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
			desc: "Ad Glance is a prototype for a campaign management platform designed to give every agency an individualized workspace with their own tools — including custom services such as an integrated ad server. The goal was to create a flexible foundation for collaboration with creatives, streamline asset creation, and provide basic analytics capabilities. The prototype included a functioning user/permission system, a structured UI built with Nuxt and Tailwind, and a feature that allowed users to dynamically generate Rich Media Ads via a simple form.",
			tasks: [
				"Concept, UX, and wireframe creation",
				"Designing the database structure and overall software architecture",
				"Developing the prototype in Nuxt/Tailwind from scratch",
				"Implementing user and permission management",
				"Building a dynamic Rich Media Ad generator component",
				"Coordinating all roles: strategy, design, development, and testing",
			],
			challanges: [
				"Switching between multiple roles and understanding domain constraints",
				"Defining a scalable data and permission model",
				"Designing a flexible UI/UX for different agency workflows",
				"Keeping the dynamic ad generator simple yet powerful",
			],
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
			id: "microsites",
			title: "Microsites",
			desc: "Various client microsites optimized to highlight product USPs and guide users through clear and engaging user flows. Each microsite required a tailored concept with strong visual communication and smooth interactions.",
			tasks: [
				"Analyzing project goals and key communication points",
				"Building concepts and user flows",
				"UI design and layout creation",
				"Frontend development of microsites",
				"Ensuring a performant, cohesive user experience across devices",
			],
			challanges: [
				"Ensuring consistent cross-browser behavior",
				"Implementing clean responsiveness on all devices",
				"Building performant and meaningful animations",
				"Applying basic SEO best practices to small-scale projects",
			],
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
					id: "sass",
					label: "SASS",
				},
				{
					id: "ps",
					label: "Photoshop",
				},
			],
		},
		{
			id: "tween-sass",
			title: "Tween SASS",
			desc: "Tween-SASS is an open-source SASS utility that dynamically generates keyframe animations via chained tween definitions. Built to streamline Rich Media Ad production by reducing repetitive animation setup while maintaining performance.",
			tasks: [
				"Researching performance-friendly CSS animation properties",
				"Defining animation rules, timings, and easing presets",
				"Implementing SASS mixins to dynamically calculate keyframes",
				"Documenting and preparing the library for public use",
			],
			challanges: [
				"Balancing expressive animation control with simple syntax",
				"Ensuring generated keyframes perform well across devices",
				"Choosing and designing easing curves that feel natural",
				"Keeping the library lightweight and accessible",
			],
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
			desc: "Development of high-impact ad formats with strong visual engagement, including custom formats like the uShape Ad and the Anchor Ad. Work included concepting, design, performance-focused development, and building a reusable toolkit for future ad production.",
			tasks: [
				"Designing interaction concepts and visual layouts",
				"Developing high-impact ads with a focus on performance and compatibility",
				"Communicating with clients during feedback and iteration phases",
				"Creating a reusable internal feature library (video, carousel, parallax, cross-iframe communication, etc.)",
				"Technical QA across visuals, behavior, and tracking",
			],
			challanges: [
				"Balancing needs of users, publishers, and advertisers",
				"Ensuring brand safety within varied publisher environments",
				"Maintaining responsiveness within strict format constraints",
				"Handling environment differences between publishers, devices, and iframes",
			],
			techStack: [
				{
					id: "ts",
					label: "TypeScript",
				},
				{
					id: "sass",
					label: "SASS",
				},
				{
					id: "ps",
					label: "Photoshop",
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
		const section = document.getElementById("projects");

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
