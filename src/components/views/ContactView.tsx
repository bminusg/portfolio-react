import { LoadingSpinner } from "../ui/LoadingSpinner";
import { replaceHref } from "@/utils/replaceData";

import "@sass/pages/contact.sass";

export const ContactView = ({ isActive }: { isActive: boolean }) => {
	if (!isActive)
		return (
			<div className="content flex justify-center">
				<LoadingSpinner />
			</div>
		);

	return (
		<div className="content flex gap-250 items-center justify-center">
			<div className="contact--img"></div>
			<div className="contact--txt px-150">
				<h2 className="mb-250">Let's work together</h2>
				<p className="mb-350">
					If you'd like to talk about a project we can build together — or you
					have feedback on my work — feel free to reach out. I'm always open to
					good ideas, collaboration, and thoughtful conversations.
				</p>

				<div className="flex gap-350">
					<div className="contact--txt-social">
						<h4 className="mb-200">E-Mail</h4>
						<ul>
							<li>
								<a
									onMouseDown={replaceHref}
									href="bWFpbHRvOmJlbm55LmdlYmF1ZXJAb3V0bG9vay5kZQ=="
								>
									bgebauer [at] yolobirds.dev
								</a>
							</li>
						</ul>
					</div>
					<div className="contact--txt-social">
						<h4 className="mb-200">Social Network</h4>
						<ul>
							<li className="mb-150">
								<a
									href="https://github.com/bminusg"
									target="_blank"
									rel="noopener"
								>
									Github
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/benjamin-gebauer-70503228b/"
									target="_blank"
									rel="noopener"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
					<div className="contact--content-img"></div>
				</div>
			</div>
		</div>
	);
};
