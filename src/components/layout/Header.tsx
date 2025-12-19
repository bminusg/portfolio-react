import { BrainCircuit, BriefcaseBusiness, Contact } from "lucide-react";
import { Icon } from "@/components/ui/Icon.tsx";
import "@sass/layout/header.sass";

import type { View } from "../../App.tsx";

export const Header = ({ views }: { views: Record<string, View> }) => {
	const handleOnClick = (id: string) => {
		document.body.style.overflow = "auto";

		const targetElement = document.getElementById(id);
		if (!targetElement) return;

		targetElement.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className={`header flex items-center`}>
			<div className={`header--content flex justify-between items-center `}>
				<button
					className={`${views.home.isActive ? "is--active" : ""} header--nav-btn header--logo`}
					onClick={() => handleOnClick("home")}
					type="button"
				>
					<div className="header--icon header--logo-icon">
						<Icon name="logo" size="24px" fill="var(--color-primary-600)" />
						<Icon name="logo" size="24px" fill="var(--color-primary-300)" />
					</div>
				</button>

				<nav className="header--nav flex items-center">
					<button
						className={`${views.skillset.isActive && "is--active"} header--nav-btn flex items-center gap-050`}
						onClick={() => handleOnClick("skillset")}
						type="button"
					>
						<div className="header--icon header--nav-icon">
							<i className="icon flex">
								<BrainCircuit size="16" color="var(--color-primary-600)" />
							</i>
							<i className="icon flex">
								<BrainCircuit size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Skillset</span>
					</button>
					<button
						className={`${views.projects.isActive && "is--active"} header--nav-btn flex items-center gap-050`}
						onClick={() => handleOnClick("projects")}
						type="button"
					>
						<div className="header--icon header--nav-icon">
							<i className="icon flex">
								<BriefcaseBusiness size="16" color="var(--color-primary-600)" />
							</i>
							<i className="icon flex">
								<BriefcaseBusiness size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Projects</span>
					</button>
					<button
						className={`${views.contact.isActive && "is--active"} header--nav-btn flex items-center gap-050`}
						onClick={() => handleOnClick("contact")}
						type="button"
					>
						<div className="header--icon header--nav-icon">
							<i className="icon flex">
								<Contact size="16" color="var(--color-primary-600)" />
							</i>
							<i className="icon flex">
								<Contact size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Contact</span>
					</button>
				</nav>
			</div>
		</header>
	);
};
