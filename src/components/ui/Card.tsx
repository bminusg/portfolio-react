import "@sass/components/ui/card.sass";
import type { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
	return (
		<div className="card">
			<main className="">{children}</main>
		</div>
	);
};
