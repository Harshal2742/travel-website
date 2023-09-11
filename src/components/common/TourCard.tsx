import { Tour } from '../../api/api.interface';

type TourCardType = Pick<
	Tour,
	'id' | 'imageCover' | 'name' | 'ratingsAverage' | 'price' | 'ratingsQuantity'
>;

const TourCard = (tour: TourCardType): JSX.Element => {
	return (
		<div className="tour-card">
			<div className="img-title-box">
				<img
					className="tour-card-img"
					src={import.meta.env.VITE_TOUR_IMG_BASE_URL + tour.imageCover}
					alt={tour.name}
				/>
				<h3 className="heading-tertiary tour-cart-title">
					<span>{tour.name}</span>
				</h3>
			</div>
			<div className="tour-card-text-box">
				<div>
					<p className='tour-card-rating'>
						{<span>{tour.ratingsAverage}</span>}
						{`
						rating 
						(${tour.ratingsQuantity})
						`}
					</p>
				</div>
				<div>
					<p className="tour-card-price">
						<span>{`$${tour.price}`}</span> per person
					</p>
				</div>
			</div>
		</div>
	);
};

export default TourCard;
