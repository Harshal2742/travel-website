import { Review } from '../../api/api.interface';
import ReviewCard from '../common/ReviewCard';

const dummyReviews: Review[] = [
	{
		_id: '1',
		review:
			"I had the most amazing time on the Mountain Adventure tour. The landscapes were absolutely stunning, and the tour guide was incredibly knowledgeable. I couldn't have asked for a better experience. Highly recommended!",
		rating: 5,
		createdAt: '2023-09-11T10:00:00Z',
		tour: 'Mountain Adventure',
		user: {
			_id: 'user1',
			name: 'John Doe',
			photo: '/img/users-profile/user-1.jpg',
		},
		__v: 1,
		id: '1',
	},

	{
		_id: '2',
		review:
			"I can't say enough good things about the Wildlife Safari. The animal sightings were incredible, and the guide was passionate and informative. An outstanding experience that I will never forget!",
		rating: 5,
		createdAt: '2023-09-08T17:45:00Z',
		tour: 'Wildlife Safari',
		user: {
			_id: 'user4',
			name: 'Bob Wilson',
			photo: '/img/users-profile/user-2.jpg',
		},
		__v: 2,
		id: '2',
	},
	{
		_id: '3',
		review:
			'The Jungle Trek was a fantastic adventure! The dense jungle, exotic wildlife, and the soothing sounds of nature made it an unforgettable journey. Our guide made the experience even better!',
		rating: 4,
		createdAt: '2023-09-07T11:20:00Z',
		tour: 'Jungle Trek',
		user: {
			_id: 'user5',
			name: 'Eva Rodriguez',
			photo: '/img/users-profile/user-3.jpg',
		},
		__v: 3,
		id: '3',
	},
];

const Testimonials = (): JSX.Element => {
	return (
		<section className="testimonials-section">
			<div className="container testimonials-container">
				<h2 className="heading-secondary testimonials-heading">
					What our customers are saying about us?
				</h2>
				<p className="testimonials-text">
					Some testimonials from those who go traveling using our services
				</p>
				<div className="grid-3-col testimonials-box">
					{dummyReviews.map((review) => {
						return <ReviewCard {...review} key={review.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
