export const replaceHref = (e: React.MouseEvent<HTMLAnchorElement>) => {
	const { currentTarget } = e;
	const { origin } = window.location;

	const value = currentTarget.href.replace(origin, "").substring(1);
	const decoded = atob(value);

	currentTarget.setAttribute("href", decoded);
};
