import { Tour } from '../../api/api.interface';

type TourCardType = Pick<Tour, 'id' | 'imageCover' | 'duration' | 'name'>;

const TourCard = (tour: TourCardType): JSX.Element => {
	return (
		<div className='tour-card'>
			<div>
				<img
          className='tour-card-img'
					src={import.meta.env.VITE_TOUR_IMG_BASE_URL + tour.imageCover}
					alt={tour.name}
				/>
			</div>
			<div className='tour-card-text-box'>
				<p className='heading-tertiary'>{tour.name}</p>
			</div>
		</div>
	);
};

export default TourCard;
