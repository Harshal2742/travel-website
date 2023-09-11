import FeaturedIn from '../components/Home/FeaturedIn';
import Hero from '../components/Home/Hero';
import PopularDestinations from '../components/Home/PopularDestinations';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';

const Home = (): JSX.Element => {
	return (
		<>
			<Hero />
			<FeaturedIn />
			<PopularDestinations />
			<Services />
			<Testimonials />
		</>
	);
};

export default Home;
