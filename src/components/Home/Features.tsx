const featuresList = [
	{
		count: '10',
		description: 'Years of Experience',
	},
	{
		count: '1K+',
		description: 'Camping Destination',
	},
	{
		count: '8K',
		description: 'Happy Customer',
	},
	{
		count: '4.2',
		description: 'Overall Rating',
	},
];

const Features = (): JSX.Element => {
	return (
		<section className="features-section">
			<div className="container grid-4-col features-box">
				{featuresList.map((feature, index) => {
					return (
						<div key={index} className="feature">
							<span>{feature.count}</span>
							<p>{feature.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Features;
