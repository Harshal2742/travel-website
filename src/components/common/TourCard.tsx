import { Tour } from '../../api/api.interface';
import { IoMdStarOutline } from 'react-icons/io';

type TourCardType = Pick<
	Tour,
	'id' | 'imageCover' | 'name' | 'ratingsAverage' | 'price'
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
					{Array(5)
						.fill(0)
						.map((_, index) => {
							return (
								<IoMdStarOutline
									key={index}
									className={
										index < tour.ratingsAverage
											? 'star-filled'
											: 'star-outlined'
									}
								/>
							);
						})}
				</div>
				<div className="tour-card-price-box">
					<p>
						<span>{`$${tour.price}`}</span> per person
					</p>
				</div>
			</div>
		</div>
	);
};

export default TourCard;
