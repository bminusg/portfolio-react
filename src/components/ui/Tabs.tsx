import { useMemo, useState } from "react";
import "@sass/components/ui/tabs.sass";

import type React from "react";

export interface TabsItem<T> {
	id: string;
	label: string;
	data: T;
}

export type TabsProps<T> = {
	items: TabsItem<T>[];
	Content: React.FC<{ data: T }>;
};

export const Tabs = <T,>({ items, Content }: TabsProps<T>) => {
	const [activeTabID, setActiveTabID] = useState<string>(items[0].id);

	const activeTab = useMemo(
		() => items.find((item) => item.id === activeTabID),
		[activeTabID, items],
	);

	return (
		<div className="tabs">
			<nav className="tabs--nav mb-200">
				{items.map(({ id, label }) => (
					// biome-ignore lint/a11y/useSemanticElements: positive
					<div
						key={id}
						className={`${id === activeTabID && "is--active"} tabs--nav-item`}
						role="button"
						tabIndex={0}
						onClick={() => setActiveTabID(id)}
						onKeyDown={() => setActiveTabID(id)}
					>
						<span className="mono">{label}</span>
					</div>
				))}
			</nav>

			<div className="tabs--content">
				{activeTab && <Content data={activeTab.data} />}
			</div>
		</div>
	);
};
