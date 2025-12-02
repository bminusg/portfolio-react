import { useCallback, useMemo, useState } from "react";
import { Tabs } from "../../ui/Tabs.tsx";
import { SkillsetTabs } from "./SkillsetTabs.tsx";
import { Card } from "../../ui/Card.tsx";
import "@sass/pages/skills.sass";

import type { TabsItem } from "../../ui/Tabs.tsx";

export type SkillID =
	| "vue"
	| "react"
	| "js"
	| "ts"
	| "html"
	| "css"
	| "sass"
	| "node"
	| "drizzle"
	| "supabase"
	| "postgres"
	| "php"
	| "figma"
	| "ps"
	| "ai"
	| "ae"
	| "git"
	| "jira"
	| "confluence";

export interface Skill {
	id: SkillID;
	label: string;
	level: number;
}

export const SkillsetView = ({ isActive }: { isActive: boolean }) => {
	const skillset: TabsItem<Skill[]>[] = useMemo(
		() => [
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
						label: "Photoshop",
						level: 95,
					},
					{
						id: "ai",
						label: "Illustrator",
						level: 70,
					},
					{
						id: "ae",
						label: "After Effects",
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
		],
		[],
	);

	const [activeTabID, setActiveTabID] = useState<string | null>(skillset[0].id);

	const effectiveTabID = useMemo(() => {
		if (!isActive) return null;
		return activeTabID ?? skillset[0].id;
	}, [isActive, activeTabID, skillset]);

	// click handler:
	const setSkillTabContent = useCallback((item: TabsItem<Skill[]>) => {
		setActiveTabID(item.id);
	}, []);

	return (
		<div className="content">
			<div className="flex justify-center">
				<Card>
					<div className="skills--content flex justify-center gap-350">
						<div className="skills--txt">
							<h3 className="mb-250">Est. 1986 in Berlin</h3>
							<p>
								I'm a former digital advertising designer turned frontend
								developer. After years in digital advertising building highly
								optimized interactive experiences, I shifted fully into
								development—focusing on modern frontend engineering, UI
								architecture, and intuitive, animation-driven user experiences.
							</p>
							<p>
								My core skills are Frontend architecture, UI engineering, SPA
								development, performance optimization, motion/interaction
								design, prototyping, internal tooling and automation.
							</p>
						</div>
						<div className="skills--tabs">
							<h3 className="mb-250">Tech Stack</h3>
							<Tabs
								items={skillset}
								activeTabID={effectiveTabID}
								onTabChange={setSkillTabContent}
							>
								<SkillsetTabs items={skillset} activeID={effectiveTabID} />
							</Tabs>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};
