import { useState, useEffect } from "react";
import type { WorkItem } from "./index.tsx";

export interface WorkDetailLayerProps {
	isActive: boolean;
	content?: WorkItem;
	doCollapse: () => void;
}

export const WorkDetailLayer = ({
	isActive,
	doCollapse,
	content,
}: WorkDetailLayerProps) => {
	const [isMounted, setIsMounted] = useState(isActive);
	const [animState, setAnimState] = useState(
		isActive ? "is--expand" : "is--collapse",
	);

	useEffect(() => {
		if (isActive) {
			setIsMounted(true);
			setAnimState("is--expand");
		} else {
			setIsMounted(false);
		}
	}, [isActive]);

	const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return; // ignore child animations
		if (animState !== "is--collapse") return;

		doCollapse();
	};

	if (!isMounted) return null;

	return (
		<div
			className={`work--layer flex ${animState}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className="work--layer-preview flex gap-200">
				<img
					src={content?.preview.src}
					alt="test"
					loading="lazy"
					className="work--layer-img"
				/>
			</div>
			<div className="work--layer-content">
				<h3 onClick={() => setAnimState("is--collapse")}>{content?.title}</h3>
			</div>
		</div>
	);
};
