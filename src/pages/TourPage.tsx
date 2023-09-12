import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTour } from '../api/api';
import { Tour } from '../api/api.interface';

const TourPage = (): JSX.Element => {
	const { tourId } = useParams();
	const [tour, setTour] = useState<Tour | undefined>();

	useEffect(() => {
		if (tourId) {
			(async () => {
				const result = await getTour(tourId);
				if (result.status === 'success') {
					setTour(result.data);
				}
			})();
		}
	}, [tourId]);

	return (
		<>
			<div className="tour-container">
				<section className="tour-section-header">
					<div className="tour-section">
						<img
							className="tour-cover-img"
							src={import.meta.env.VITE_TOUR_IMG_BASE_URL + tour?.imageCover}
						/>
						<div className="cover-img-overlay">&nbsp;</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default TourPage;
