const logos = [
	{
		imgSrc: 'business-insider.png',
		alt: 'Business insider',
	},
	{
		imgSrc: 'forbes.png',
		alt: 'Forbes',
	},
	{
		imgSrc: 'techcrunch.png',
		alt: 'Techcrunch',
	},
	{
		imgSrc: 'the-new-york-times.png',
		alt: 'The new your times',
	},
	{
		imgSrc: 'usa-today.png',
		alt: 'USA Today',
	},
];

const FeaturedIn = (): JSX.Element => {
	return (
		<section className="featured-in-section">
			<div className="container">
				<div className="logos-box">
					{logos.map((logo, index) => {
						return (
							<img
              className="featured-in-logo"
								key={index}
								src={'/img/featured-in-logos/' + logo.imgSrc}
								alt={logo.alt}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedIn;
