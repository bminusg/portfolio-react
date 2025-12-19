import "@sass/components/ui/tabs.sass";
import type { ReactNode } from "react";

export interface TabsItem<T, ID extends string = string> {
	id: ID;
	label: string;
	data: T;
}

export type TabsProps<T, ID extends string = string> = {
	items: TabsItem<T, ID>[];
	activeTabID: string | null;
	children: ReactNode;
	onTabChange: (item: TabsItem<T, ID>) => void;
	minHeight?: string;
};

export const Tabs = <T,>({
	items,
	children,
	activeTabID,
	onTabChange,
	minHeight = "0",
}: TabsProps<T>) => {
	const changeTab = (id: string) => {
		const item = items.find((item) => item.id === id);

		if (!item) return;
		onTabChange(item);
	};

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
						onClick={() => changeTab(id)}
						onKeyDown={() => changeTab(id)}
					>
						<span>{label}</span>
					</div>
				))}
			</nav>

			<div className="tabs--content" style={{ minHeight }}>
				{children}
			</div>
		</div>
	);
};
