import FeaturedIn from "../components/Home/FeaturedIn";
import Hero from "../components/Home/Hero";
import PopularDestinations from "../components/Home/PopularDestinations";


const Home = (): JSX.Element => {
	return <>
    <Hero />
    <FeaturedIn />
    <PopularDestinations />
  </>;
};

export default Home;
