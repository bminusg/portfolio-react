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
				{
					id: "7c6a9c12-9ab2-4b6e-a57a-d5b42af4ca35",
					value: "Concept, UX, and wireframe creation",
				},
				{
					id: "3b4f9f57-112b-4de2-9202-fefcc34469e8",
					value:
						"Designing the database structure and overall software architecture",
				},
				{
					id: "d7cf8038-b190-4a78-87c7-f9460f8188e0",
					value: "Developing the prototype in Nuxt/Tailwind from scratch",
				},
				{
					id: "519b69d2-7af3-4fcb-8c27-a6655407dd12",
					value: "Implementing user and permission management",
				},
				{
					id: "f6418ece-8d7e-4c9b-b8e2-ef6e41a8a72d",
					value: "Building a dynamic Rich Media Ad generator component",
				},
				{
					id: "5f931a4e-a58f-43a0-9ccd-8fd5840ec1f0",
					value:
						"Coordinating all roles: strategy, design, development, and testing",
				},
			],
			challanges: [
				{
					id: "e1d9f5fd-bbba-49bb-b64c-1bde9a3fbd14",
					value:
						"Switching between multiple roles and understanding domain constraints",
				},
				{
					id: "6a3aa2d7-26d2-454d-a832-7e6d673131b7",
					value: "Defining a scalable data and permission model",
				},
				{
					id: "4b125c08-7c17-4d25-879b-ca9852a2a06c",
					value: "Designing a flexible UI/UX for different agency workflows",
				},
				{
					id: "d04ea3c9-5f36-4d9a-b1a7-a0f12bd7e1a8",
					value: "Keeping the dynamic ad generator simple yet powerful",
				},
			],
			techStack: [
				{ id: "vue", label: "Vue" },
				{ id: "ts", label: "TypeScript" },
				{ id: "supabase", label: "Supabase" },
				{ id: "figma", label: "Figma" },
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
				{
					id: "bc438765-2967-4d55-a814-6f87b944d612",
					value: "Analyzing project goals and key communication points",
				},
				{
					id: "99f4c3e9-eb4b-4c0c-b268-24c833feebcd",
					value: "Building concepts and user flows",
				},
				{
					id: "8650097f-dfb0-45c1-89f7-728e070e60d5",
					value: "UI design and layout creation",
				},
				{
					id: "2dcfa12d-b35b-45d5-9700-41c2bbb7a2df",
					value: "Frontend development of microsites",
				},
				{
					id: "e6ca7a4f-652e-4413-8f5b-759c47c7ee52",
					value:
						"Ensuring a performant, cohesive user experience across devices",
				},
			],
			challanges: [
				{
					id: "a7feeada-d952-4df2-aded-e72b7dd3c477",
					value: "Ensuring consistent cross-browser behavior",
				},
				{
					id: "1d67db0c-85ea-41ba-a553-3a4d8f040b36",
					value: "Implementing clean responsiveness on all devices",
				},
				{
					id: "bc27af9f-2d08-461c-94ac-1d52f8e9d81d",
					value: "Building performant and meaningful animations",
				},
				{
					id: "0f7002eb-61d4-41c3-af1f-c690c92cd329",
					value: "Applying basic SEO best practices to small-scale projects",
				},
			],
			techStack: [
				{ id: "vue", label: "Vue" },
				{ id: "ts", label: "TypeScript" },
				{ id: "sass", label: "SASS" },
				{ id: "ps", label: "Photoshop" },
			],
		},

		{
			id: "tween-sass",
			title: "Tween SASS",
			desc: "Tween-SASS is an open-source SASS utility that dynamically generates keyframe animations via chained tween definitions. Built to streamline Rich Media Ad production by reducing repetitive animation setup while maintaining performance.",
			tasks: [
				{
					id: "a2e81a28-2314-4db6-b93a-9f6203ec2e54",
					value: "Researching performance-friendly CSS animation properties",
				},
				{
					id: "f1f29b94-bb75-4cea-9641-920bbbebc0c1",
					value: "Defining animation rules, timings, and easing presets",
				},
				{
					id: "1ff3f12e-5d58-4c0d-a5b6-a73c76d0b291",
					value: "Implementing SASS mixins to dynamically calculate keyframes",
				},
				{
					id: "b61230d6-d4c1-452c-a5f6-9c0dd88f8033",
					value: "Documenting and preparing the library for public use",
				},
			],
			challanges: [
				{
					id: "9cc3ee55-51a7-4850-9e91-a8d96f62f9c1",
					value: "Balancing expressive animation control with simple syntax",
				},
				{
					id: "f22c0168-c07b-4f06-84f9-9d63a4dfa064",
					value: "Ensuring generated keyframes perform well across devices",
				},
				{
					id: "9114fd6f-63c9-4ea4-9bfb-61fe9e2cce59",
					value: "Choosing and designing easing curves that feel natural",
				},
				{
					id: "8606a217-2997-4a88-a4a3-6574c9df3a38",
					value: "Keeping the library lightweight and accessible",
				},
			],
			techStack: [{ id: "sass", label: "SASS" }],
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
				{
					id: "1dbf2273-15ea-46a7-9f0d-ac0ca2b83d24",
					value: "Designing interaction concepts and visual layouts",
				},
				{
					id: "25e172f7-526b-4a01-b809-a2906feb5a7a",
					value:
						"Developing high-impact ads with a focus on performance and compatibility",
				},
				{
					id: "c8504032-25aa-461b-a533-6fe538cf30e1",
					value:
						"Communicating with clients during feedback and iteration phases",
				},
				{
					id: "0c68945a-9edb-4a4b-b998-0bdd3076a27b",
					value:
						"Creating a reusable internal feature library (video, carousel, parallax, cross-iframe communication, etc.)",
				},
				{
					id: "cc814823-df23-42bc-aa74-4cbb6fd3479d",
					value: "Technical QA across visuals, behavior, and tracking",
				},
			],
			challanges: [
				{
					id: "f86be71f-82d8-4ee8-8ee2-3739eb4e8798",
					value: "Balancing needs of users, publishers, and advertisers",
				},
				{
					id: "75f43080-e611-493a-87de-fcd7c13f31d1",
					value: "Ensuring brand safety within varied publisher environments",
				},
				{
					id: "8dd24f06-285d-4180-9de3-f228b66c3040",
					value: "Maintaining responsiveness within strict format constraints",
				},
				{
					id: "6d976b5d-a04c-4cd8-bb7d-12a5190b156a",
					value:
						"Handling environment differences between publishers, devices, and iframes",
				},
			],
			techStack: [
				{ id: "ts", label: "TypeScript" },
				{ id: "sass", label: "SASS" },
				{ id: "ps", label: "Photoshop" },
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

	const onClick = (
		event: React.MouseEvent | React.KeyboardEvent,
		item: ProjectItem,
	) => {
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
						onKeyUp={(event) => onClick(event, item)}
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
