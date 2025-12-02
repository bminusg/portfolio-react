import { useState } from "react";
import "@sass/layout/footer.sass";

import type { MouseEventHandler } from "react";

export const Footer = () => {
	const [isImprintOpen, setIsImprintOpen] = useState(false);

	const toggleImprint: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		setIsImprintOpen(!isImprintOpen);
	};

	return (
		<footer className="footer mono text-uppercase flex items-center">
			<div className="content flex justify-between">
				<nav className="footer--nav flex gap-100">
					<a href="https://github.com/bminusg/" target="_blank" rel="noopener">
						<span>Github</span>
					</a>
					<a
						href="https://www.linkedin.com/in/benjamin-gebauer-70503228b/"
						target="_blank"
						rel="noopener"
					>
						<span>LinkedIn</span>
					</a>
				</nav>

				<div className="footer--imprint">
					<a href="about:blank" onClick={toggleImprint}>
						<span>Imprint</span>
					</a>

					{isImprintOpen && (
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
					)}
				</div>
			</div>
		</footer>
	);
};
