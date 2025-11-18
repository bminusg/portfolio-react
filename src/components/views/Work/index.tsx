import { useState, useCallback } from "react";
import "@sass/pages/work.sass";
import { Scrolloussel } from "../../ui/Scrolloussel.tsx";
import { WorkDetailLayer } from "./WorkDetailLayer.tsx";

import type { Skill } from "../Skillset";

export interface WorkItem {
	id: string;
	title: string;
	desc: string;
	techStack: Skill[];
	teaser: {
		type: "image" | "video";
		src: string;
	};
	preview: {
		type: "image" | "video";
		src: string;
	};
}

export const WorkView = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [activeItem, setActiveItem] = useState<WorkItem>();

	const items: WorkItem[] = [
		{
			id: "ad-glance",
			title: "Ad glance",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [],
			teaser: {
				type: "image",
				src: "/img/teaser/teaser-adglance.png",
			},
			preview: {
				type: "image",
				src: "/test.jpg",
			},
		},
		{
			id: "ad-kit",
			title: "Ad kit",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [],
			teaser: {
				type: "image",
				src: "/test.jpg",
			},
			preview: {
				type: "image",
				src: "/test.jpg",
			},
		},
		{
			id: "tween-sass",
			title: "Tween SASS",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [],
			teaser: {
				type: "image",
				src: "/test.jpg",
			},
			preview: {
				type: "image",
				src: "/test.jpg",
			},
		},
		{
			id: "highimpact-ads",
			title: "High Impact Ads",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus eget metus luctus accumsan id ultrices nunc. Sed ornare lacus adipiscing, posuere lectus et, fringilla augue.",
			techStack: [],
			teaser: {
				type: "image",
				src: "/test.jpg",
			},
			preview: {
				type: "image",
				src: "/test.jpg",
			},
		},
	];

	const doCollapse = useCallback(() => {
		setIsExpanded(false);
	}, []);

	const doExpand = (item: WorkItem) => () => {
		setIsExpanded(true);
		setActiveItem(item);
	};

	return (
		<>
			<div className="content">
				<h2>Work</h2>
			</div>
			<div className="work--content">
				<ul className="work--list flex gap-400">
					{items.map((item) => (
						<li
							key={item.id}
							className="work--list-item"
							onClick={doExpand(item)}
						>
							<img src={item.teaser.src} alt="test" />
						</li>
					))}
				</ul>
				<WorkDetailLayer
					isActive={isExpanded}
					doCollapse={doCollapse}
					content={activeItem}
				/>
			</div>
		</>
	);
};
