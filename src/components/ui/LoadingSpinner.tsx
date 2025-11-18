import { LoaderCircle } from "lucide-react";
import "@sass/components/ui/loading-spinner.sass";

export const LoadingSpinner = () => {
	return (
		<div className="loading-spinner flex flex-col items-center gap-150">
			<div className="loading-spinner--icon">
				<LoaderCircle />
			</div>
			<span className="mono text-uppercase">Loading</span>
		</div>
	);
};
