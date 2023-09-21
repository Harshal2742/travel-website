import { useEffect, useState } from 'react';
import { Tour } from '../../api/api.interface';
import { getMyTours } from '../../api/api';
import TourCard from '../common/TourCard';
import Loader from '../common/Loader';

const MyBookings = (): JSX.Element => {
	const [tours, setTours] = useState<Tour[] | undefined>(undefined);
	useEffect(() => {
		(async () => {
			const result = await getMyTours();

			if (result.status === 'success' && result.data) {
				setTours(result.data);
			}
		})();
	}, []);
	console.log(tours);
	return (
		<section>
			{tours ? (
				<>
					{tours.length > 0 ? (
						<div className="grid-3-col">
							{tours.map((tour) => {
								return <TourCard key={tour.id} {...tour} />;
							})}
						</div>
					) : (
						<p className="heading-tertiary text-center">{'No tours booked!'}</p>
					)}
				</>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default MyBookings;
