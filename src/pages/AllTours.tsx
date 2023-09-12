import { useEffect, useState } from 'react';
import { Tour } from '../api/api.interface';
import { getAllTours } from '../api/api';
import TourCard from '../components/common/TourCard';
import Loader from '../components/common/Loader';

const AllTours = (): JSX.Element => {
	const [tours, setTours] = useState<Tour[] | undefined>();

	useEffect(() => {
		(async () => {
			const result = await getAllTours();
			if (result.status === 'success') {
				setTours(result.data);
			}
		})();
	}, []);

	return (
		<section className="all-tours-section">
			{tours ? (
				<div className="container grid-3-col">
					{tours?.map((tour) => {
						return <TourCard {...tour} />;
					})}
				</div>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default AllTours;
