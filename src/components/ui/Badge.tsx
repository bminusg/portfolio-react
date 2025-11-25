import "@sass/components/ui/badge.sass";

export interface BadgeProps {
	children: React.ReactNode;
	color?: string;
	variant?: "solid" | "outline" | "soft";
}

export const Badge = ({ children }: BadgeProps) => {
	return <span className="badge flex gap-150 items-center">{children}</span>;
};
