import { Tabs } from "../../ui/Tabs.tsx";
import { SkillsetTabs } from "./SkillsetTabs.tsx";
import { Card } from "../../ui/Card.tsx";
import "@sass/pages/skills.sass";

import type { TabsItem } from "../../ui/Tabs.tsx";

export interface Skill {
	id: string;
	label: string;
	level: number;
}

export const SkillsetView = ({ isActive }: { isActive: boolean }) => {
	const now = new Date();
	const ageOfEngineering = new Date(2016, 0, 1);
	const yearsOfExperience = now.getFullYear() - ageOfEngineering.getFullYear();

	const skillset: TabsItem<Skill[]>[] = [
		{
			id: "frontend",
			label: "Frontend",
			data: [
				{
					id: "vue",
					label: "Vue",
					level: 95,
				},
				{
					id: "react",
					label: "React",
					level: 75,
				},

				{
					id: "js",
					label: "JavaScript",
					level: 95,
				},
				{
					id: "ts",
					label: "TypeScript",
					level: 70,
				},
				{
					id: "html",
					label: "HTML",
					level: 95,
				},
				{
					id: "css",
					label: "CSS",
					level: 95,
				},
				{
					id: "sass",
					label: "Sass",
					level: 95,
				},
			],
		},
		{
			id: "backend",
			label: "Backend",
			data: [
				{
					id: "node",
					label: "Node",
					level: 80,
				},
				{
					id: "drizzle",
					label: "Drizzle-ORM",
					level: 50,
				},
				{
					id: "supabase",
					label: "Supabase",
					level: 60,
				},
				{
					id: "postgres",
					label: "PostgreSQL",
					level: 15,
				},
				{
					id: "php",
					label: "PHP",
					level: 20,
				},
			],
		},
		{
			id: "design",
			label: "Design",
			data: [
				{
					id: "figma",
					label: "Figma",
					level: 80,
				},
				{
					id: "ps",
					label: "Adobe Photoshop",
					level: 95,
				},
				{
					id: "ai",
					label: "Adobe Illustrator",
					level: 70,
				},
				{
					id: "ae",
					label: "Adobe After Effects",
					level: 60,
				},
			],
		},
		{
			id: "worklfow",
			label: "Workflow",
			data: [
				{
					id: "git",
					label: "Git",
					level: 70,
				},
				{
					id: "jira",
					label: "Jira",
					level: 85,
				},
				{
					id: "confluence",
					label: "Confluence",
					level: 80,
				},
			],
		},
	];

	return (
		<div className="content">
			<h2>Skillset</h2>
			<div className="flex justify-center">
				<Card>
					<div className="skills--content flex justify-center gap-350">
						<div className="skills--txt">
							<h3 className="mb-250">
								Established in 1986 in Berlin, I'm a former digital advertising
								designer turned frontend developer.
							</h3>
							<p>
								My background spans pixel-perfect web design, motion design, and
								interaction design - skills honed while creating rich media ads
								and high-impact digital experiences. For the past{" "}
								<span>{yearsOfExperience} years</span>, I shifted my focus
								toward development, increasingly drawn to building things rather
								than just designing them. Today, I combine visual precision with
								modern frontend engineering to create tools, single-page
								applications, and dashboard UIs that feel fast, intuitive, and
								thoughtfully animated.
							</p>
						</div>
						<div className="skills--tabs">
							<h3 className="mb-250">
								Blending motion, interaction design, and a versatile frontend
								tech stack to craft engaging user experiences.
							</h3>
							<Tabs items={skillset} Content={SkillsetTabs} />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};
