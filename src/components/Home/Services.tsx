const servicesList = [
	{
		title: 'Lot of Choices',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Best Tour Guid',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Easy Booking',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Always Ready Support',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
];

const Services = (): JSX.Element => {
	return (
		<section className="services-section">
			<div className="container">
				<h2 className="heading-secondary">Our Services</h2>
				<p className="services-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
					praesentium quaerat optio quam id dolore maxime nobis eius aliquam!
					Quisquam deserunt fugit esse soluta. Praesentium neque sequi
					reprehenderit. Adipisci, suscipit.
				</p>
				<div className="grid-3-col">
					<img className="services-img" src="/img/services.jpg" />
				</div>
			</div>
		</section>
	);
};

export default Services;
