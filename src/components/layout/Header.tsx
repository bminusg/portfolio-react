import { BrainCircuit, BriefcaseBusiness, Contact } from "lucide-react";
import { Icon } from "@/components/ui/Icon.tsx";
import "@sass/layout/header.sass";

import type { View } from "../../App.tsx";

export const Header = ({ views }: { views: Record<string, View> }) => {
	function handleOnClick() {
		document.body.style.overflow = "auto";
	}

	return (
		<header className={`header flex items-center`}>
			<div className={`header--content flex justify-between items-center `}>
				<a
					href="#home"
					target="_self"
					className={`${views.home.isActive ? "is--active" : ""} header--nav-anchor header--logo`}
				>
					<div className="header--icon header--logo-icon">
						<Icon name="logo" size="16px" fill="var(--color-primary-700)" />
						<Icon name="logo" size="16px" fill="var(--color-primary-300)" />
					</div>
				</a>

				<nav className="header--nav flex items-center">
					<a
						href="#skillset"
						target="_self"
						className={`${views.skillset.isActive && "is--active"} header--nav-anchor flex items-center gap-050`}
						onClick={handleOnClick}
					>
						<div className="header--icon header--nav-icon">
							<i className="icon">
								<BrainCircuit size="16" color="var(--color-primary-700)" />
							</i>
							<i className="icon">
								<BrainCircuit size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Skillset</span>
					</a>
					<a
						href="#projects"
						target="_self"
						className={`${views.projects.isActive && "is--active"} header--nav-anchor flex items-center gap-050`}
						onClick={handleOnClick}
					>
						<div className="header--icon header--nav-icon">
							<i className="icon">
								<BriefcaseBusiness size="16" color="var(--color-primary-700)" />
							</i>
							<i className="icon">
								<BriefcaseBusiness size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Projects</span>
					</a>
					<a
						href="#contact"
						target="_self"
						className={`${views.contact.isActive && "is--active"} header--nav-anchor flex items-center gap-050`}
						onClick={handleOnClick}
					>
						<div className="header--icon header--nav-icon">
							<i className="icon">
								<Contact size="16" color="var(--color-primary-700)" />
							</i>
							<i className="icon">
								<Contact size="16" color="var(--color-primary-300)" />
							</i>
						</div>
						<span>Contact</span>
					</a>
				</nav>
			</div>
		</header>
	);
};
