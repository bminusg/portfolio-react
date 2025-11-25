import "@sass/components/ui/button.sass";

export interface ButtonProps {
	children: React.ReactNode;
	variant: "solid" | "outline" | "ghost";
	color: "primary" | "neutral";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
}
export const Button = ({ children, variant, color, onClick }: ButtonProps) => {
	return (
		<button
			className="button inline-flex gap-100 items-center"
			data-variant={variant}
			data-color={color}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
