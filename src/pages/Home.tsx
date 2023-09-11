import FeaturedIn from '../components/Home/FeaturedIn';
import Features from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import PopularDestinations from '../components/Home/PopularDestinations';
import Services from '../components/Home/Services';
import Subscribe from '../components/Home/Subscribe';
import Testimonials from '../components/Home/Testimonials';

const Home = (): JSX.Element => {
	return (
		<>
			<Hero />
			<FeaturedIn />
			<PopularDestinations />
			<Services />
			<Testimonials />
			<Features />
			<Subscribe />
		</>
	);
};

export default Home;
