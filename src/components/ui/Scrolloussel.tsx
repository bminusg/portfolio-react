import { useEffect, useState, useRef } from "react";
import { ScrollousselItem } from "./ScrollousselItem";
import "@sass/components/ui/scrolloussel.sass";

import type { ScrollousselItemProps } from "./ScrollousselItem";

export const Scrolloussel = ({
	items,
}: {
	items: ScrollousselItemProps["item"][];
}) => {
	function usePrevious(value: number) {
		const ref = useRef(0);
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}

	const [activeIDX, setActiveIDX] = useState(0);
	const prevActiveIDX = usePrevious(activeIDX);

	function setSnapoints(): number[] {
		const container = document.querySelector<HTMLElement>("#work");
		if (!container) return [];

		const containerHeight = window.innerHeight;
		const containerOffsetTop = container.offsetTop;
		const snapPoints: number[] = [
			...items.map(
				(_, i) =>
					i * containerHeight + containerOffsetTop - containerHeight / 2,
			),
		];

		console.log("snapPoints", snapPoints);

		return snapPoints;
	}

	const indexOfClosest = (target: number) => {
		const snapPoints = setSnapoints();
		const i = snapPoints.findIndex((x) => x > target);
		return i === -1 ? snapPoints.length - 1 : Math.max(0, i - 1);
	};

	// const prevItem = () => {
	// 	console.log("prev");
	// 	const prevIDX = activeIDX - 1 < 0 ? items.length - 1 : activeIDX - 1;
	// 	setActiveIDX(prevIDX);
	// };
	//
	// const nextItem = () => {
	// 	console.log("next");
	// 	const nextIDX = activeIDX + 1 >= items.length ? 0 : activeIDX + 1;
	// 	setActiveIDX(nextIDX);
	// };

	let scrollTimeout: number | undefined;
	let isScrolling = false;
	let scrollPosEnd = 0;

	const onScroll = () => {
		if (!isScrolling) {
			isScrolling = true;
		}

		clearTimeout(scrollTimeout);
		scrollTimeout = window.setTimeout(() => {
			scrollPosEnd = window.scrollY;
			isScrolling = false;

			const closestIDX = indexOfClosest(scrollPosEnd);
			console.log("closestIDX", closestIDX, scrollPosEnd);
			console.log("----------------------------------");
			setActiveIDX(closestIDX);
		}, 150);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="scrolloussel" style={{ height: items.length * 100 + "vh" }}>
			<ul className="scrolloussel--list">
				{items.map((item, i) => (
					<li
						key={`scrolloussel-item-${i}`}
						className={`scrolloussel--list-item ${
							i === activeIDX && "is--active"
						}`}
					>
						<ScrollousselItem isActive={i === activeIDX} item={item} />
					</li>
				))}
			</ul>
		</div>
	);
};
