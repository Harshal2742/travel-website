import { Review } from '../../api/api.interface';
import { IoMdStarOutline } from 'react-icons/io';

const ReviewCard = (review: Review) => {
	return (
		<div className="review-card">
			<div>
				<img
					className="user-img"
					src={
						review.fromServer
							? `http://localhost:3000/img/users/${review.user.photo}`
							: review.user.photo
					}
					alt={'User profile picture'}
				/>
			</div>
			<p className="user-name">{review.user.name}</p>
			<div className="star-box">
				{Array(5)
					.fill(0)
					.map((_, index) => {
						return (
							<IoMdStarOutline
								key={index}
								className={
									index < review.rating ? 'star-filled' : 'star-outlined'
								}
							/>
						);
					})}
			</div>
			<p className="review-text">{review.review}</p>
		</div>
	);
};

export default ReviewCard;
