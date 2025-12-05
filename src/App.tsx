import { useState, useEffect } from "react";

import { Header } from "@/components/layout/Header.tsx";
import { Footer } from "@/components/layout/Footer.tsx";

import { CoverView } from "@/components/views/CoverView.tsx";
import { SkillsetView } from "@/components/views/Skillset";
import { ProjectsView } from "@/components/views/Projects";
import { ContactView } from "@/components/views/ContactView.tsx";

import "./sass/main.sass";

export interface View {
	isActive: boolean;
	props: Record<string, never>;
}

export interface ViewProps {
	isActive: boolean;
	id: string;
}

function App() {
	const [views, setViews] = useState<Record<string, View>>({
		home: {
			isActive: true,
			props: {},
		},
		skillset: {
			isActive: false,
			props: {},
		},
		projects: {
			isActive: false,
			props: {},
		},
		contact: {
			isActive: false,
			props: {},
		},
	});

	useEffect(() => {
		const onIntersection = (entries: IntersectionObserverEntry[]) => {
			setViews((prev) => {
				const updated = { ...prev };

				entries.forEach((entry) => {
					const id = entry.target.id;
					updated[id] = {
						...updated[id],
						isActive: entry.isIntersecting,
					};
				});

				return updated;
			});
		};

		const observer = new IntersectionObserver(onIntersection, {
			root: null,
			rootMargin: `-${window.innerHeight / 2}px 0px`,
			threshold: 0,
		});

		const sections = document.querySelectorAll(".section");

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Header views={views} />
			<main>
				<div
					id="home"
					className={`section ${
						views.home.isActive && "is--active"
					} home flex items-center`}
				>
					<CoverView isActive={views.home.isActive} />
				</div>
				<div
					id="skillset"
					className={`skills section ${
						views.skillset.isActive && "is--active"
					}  flex items-center`}
				>
					<SkillsetView isActive={views.skillset.isActive} />
				</div>
				<div
					id="projects"
					className={`section ${views.projects.isActive && "is--active"} projects`}
				>
					<ProjectsView isActive={views.projects.isActive} />
				</div>
				<div
					id="contact"
					className={`section ${
						views.contact.isActive && "is--active"
					} contact flex items-center`}
				>
					<ContactView isActive={views.contact.isActive} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
