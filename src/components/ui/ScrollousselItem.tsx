export interface ScrollousselItemProps {
	isActive: boolean;
	item: {
		id: string;
		title: string;
		desc: string;
		image: {
			src: string;
		};
		video?: string;
	};
}

export const ScrollousselItem = ({ isActive, item }: ScrollousselItemProps) => {
	return (
		<div className={`scrolloussel--content ${isActive && "is--active"}`}>
			<div className="scrolloussel--content-txt">
				<h3 className="mb-250">{item.title}</h3>
				<p>{item.desc}</p>
			</div>
			<div className="scrolloussel--content-media">
				{item.video && <video src={item.video} autoPlay loop muted />}
				<img src={item.image.src} alt="test" loading="lazy" />
			</div>
		</div>
	);
};
