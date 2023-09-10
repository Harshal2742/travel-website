import FeaturedIn from '../components/Home/FeaturedIn';
import Hero from '../components/Home/Hero';
import PopularDestinations from '../components/Home/PopularDestinations';
import Services from '../components/Home/Services';

const Home = (): JSX.Element => {
	return (
		<>
			<Hero />
			<FeaturedIn />
			<PopularDestinations />
			<Services />
		</>
	);
};

export default Home;
