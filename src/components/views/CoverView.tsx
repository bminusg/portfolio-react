import { useEffect } from "react";
import "@sass/pages/home.sass";

export const CoverView = ({ isActive }: { isActive: boolean }) => {
	useEffect(() => {
		const video = document.getElementById("video") as HTMLVideoElement;
		if (!video) return;

		if (isActive) {
			video.play();
		} else {
			video.pause();
		}
	}, [isActive]);

	return (
		<>
			<video
				src="video/output.webm"
				playsInline
				loop
				muted
				id="video"
				preload="auto"
				className="video"
			/>
			<div className="home--content content flex flex-col gap-200 justify-center items-center">
				<p className="mono">
					Hi, my name is Benny Gebauer, and I am a passionate
				</p>
				<h1>
					Frontend <br /> Developer
				</h1>
				<p className="monot">with a design DNA.</p>
				<p className="mono">
					Browse my code on{" "}
					<a href="https://github.com/bminusg" target="_blank" rel="noopener">
						GitHub
					</a>
					, connect with me on{" "}
					<a
						href="https://www.linkedin.com/in/benjamin-gebauer-70503228b/"
						target="_blank"
						rel="noopener"
					>
						LinkedIn
					</a>
					, or contact me directly to send feedback on my{" "}
					<a href="#work" target="_self">
						work
					</a>
					.
				</p>
			</div>
		</>
	);
};
