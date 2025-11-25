import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button.tsx";
import { Badge } from "@/components/ui/Badge.tsx";
import { Minimize2, ExternalLink } from "lucide-react";
import type { WorkItem } from "./index.tsx";
import { Icon } from "@/components/ui/Icon.tsx";

export interface WorkDetailLayerProps {
	isActive: boolean;
	content: WorkItem | null;
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
		if (e.target !== e.currentTarget) return;
		if (animState !== "is--collapse") return;

		doCollapse();
	};

	if (!isMounted) return null;

	return (
		<div
			className={`work--layer flex ${animState}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className="work--layer-preview"></div>
			<div className="work--layer-content flex flex-col">
				<h3 className="">{content?.title}</h3>
				<div className="work--layer-badges flex flex-wrap gap-200">
					{content?.techStack?.map((tech) => (
						<Badge key={`work--layer-badges__item_${tech.id}`}>
							<Icon name={tech.id} />
							<span>{tech.label}</span>
						</Badge>
					))}
				</div>
				<p className="work--layer-content__desc">{content?.desc}</p>
				<p className="work--layer-content__footer flex gap-200">
					<Button
						color="neutral"
						variant="outline"
						onClick={() => setAnimState("is--collapse")}
					>
						<Minimize2 size="1.5em" />
						<span>Collapse</span>
					</Button>

					{content?.cta && (
						<Button
							variant="outline"
							color="primary"
							onClick={() => window.open(content?.cta?.href, "_blank")}
						>
							<ExternalLink size="1.5em" />
							<span>{content.cta.label}</span>
						</Button>
					)}
				</p>
			</div>
		</div>
	);
};
