import { useState } from "react";
import "@sass/layout/footer.sass";

import type { MouseEventHandler } from "react";

export const Footer = () => {
	const [isImprintOpen, setIsImprintOpen] = useState(false);

	const toggleImprint: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		setIsImprintOpen(!isImprintOpen);
	};

	return (
		<footer className="footer mono text-uppercase flex items-center">
			<div className="content flex justify-between">
				<nav className="footer--nav flex gap-100">
					<a
						href="https://www.linkedin.com/in/benjamin-gebauer-70503228b/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>LinkedIn</span>
					</a>
					<a
						href="https://github.com/bminusg/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Github</span>
					</a>
				</nav>

				<div className={`footer--imprint`} onClick={toggleImprint}>
					<a href="about:blank">
						<span>Imprint</span>
					</a>
					<div
						className={`${isImprintOpen && "is--open"} footer--imprint-layer px-200`}
					>
						<p>
							<strong>Name:</strong> Benjamin Gebauer
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<a href="mailto:benny.gebauer@outlook.de">
								benny.gebauer@outlook.de
							</a>
						</p>
						<p>
							<strong>Address:</strong> An der Villa Bolle 8A, 12557 Berlin
						</p>
						<p>
							<br />
							Responsible for content according
							<br /> to applicable law: Benjamin Gebauer
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
