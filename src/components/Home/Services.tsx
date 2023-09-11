import { FaCodeFork, FaSignsPost, FaBusSimple , FaPhone} from "react-icons/fa6"


const servicesList = [
	{
		title: 'Lot of Choices',
		icon: <FaCodeFork className={'service-icon'} />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Best Tour Guid',
		icon: <FaSignsPost className={'service-icon'} />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Easy Booking',
		icon: <FaBusSimple className={'service-icon'}/>,
		description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
	{
		title: 'Always Ready Support',
		icon: <FaPhone className={'service-icon'} />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro voluptatibus reprehenderit sapiente? Ut unde delectus ducimus, quia magnam quae nemo dolor, dolorum et fugit pariatur, molestiae hic eligendi adipisci?',
	},
];

const Services = (): JSX.Element => {
	return (
		<section className="services-section">
			<div className="container">
				<h2 className="heading-secondary">Our Services</h2>
				{/* <p className="services-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
					praesentium quaerat optio quam id dolore maxime nobis eius aliquam!
					Quisquam deserunt fugit esse soluta. Praesentium neque sequi
					reprehenderit. Adipisci, suscipit.
				</p> */}
				<div className="grid-3-col">
					<img className="services-img" src="/img/services.jpg" />

					{servicesList.map((service, index) => {
						return (
							<div key={index} className="services-card">
								<div className="service-title-box">
									{service.icon}
									<p className="service-title">{service.title}</p>
								</div>
								<p className="service-description">{service.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
