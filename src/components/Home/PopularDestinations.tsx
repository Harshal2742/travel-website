import { useEffect, useState } from 'react';
import { getTopTours } from '../../api/api';
import { TopTours } from '../../api/api.type';
import TourCard from '../common/TourCard';

const PopularDestinations = (): JSX.Element => {
	const [topTours, setTopTours] = useState<TopTours | undefined>();

	useEffect(() => {
		(async () => {
			const result = await getTopTours();
			if (result.status === 'success') {
				setTopTours(result.data);
			}
		})();
	}, []);

	return (
		<section className="container popular-destinations">
			<h2 className="heading-secondary">Our Popular Destinations</h2>
			<div className='tours-box'>
				{topTours?.slice(0,3).map((tour) => {
					return <TourCard {...tour} />;
				})}
			</div>
		</section>
	);
};

export default PopularDestinations;
