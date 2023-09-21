import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTour } from '../api/api';
import { Tour } from '../api/api.interface';
import Loader from '../components/common/Loader';
import { IoMdTime, IoMdCalendar, IoMdTrendingUp } from 'react-icons/io';
import { IoPersonOutline, IoStarOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import ReviewCard from '../components/common/ReviewCard';
import { useAppSelector } from '../store/store';

const TourPage = (): JSX.Element => {
	const { tourId } = useParams();
	const [tour, setTour] = useState<Tour | undefined>();
	const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

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
				{tour ? (
					<>
						<section className="tour-section-header">
							<div>
								<img
									className="tour-cover-img"
									src={
										import.meta.env.VITE_TOUR_IMG_BASE_URL + tour?.imageCover
									}
								/>
							</div>
							<div className="tour-header-content">
								<h1 className="tour-title">
									<span>{tour.name}</span>
								</h1>
								<div className="location-time-box">
									<div className="tour-duration">
										<IoMdTime className="clock-logo" />
										<span>{`${tour.duration} DAYS`}</span>
									</div>
									<div className="tour-location">
										<HiOutlineLocationMarker className="location-logo" />
										<span>{tour.startLocation.description}</span>
									</div>
								</div>
							</div>
						</section>
						<section className="tour-description-section">
							<div className="tour-details">
								<div>
									<p className="tour-desciption-title">QUICK FACTS</p>
									<div className="quick-fact">
										<IoMdCalendar className="quick-fact-icon" />
										<span className="quick-fact-title">NEXT DATE</span>
										<span className="quick-fact-data">
											{new Date(tour.startDates[0]).toLocaleString('en-IN', {
												year: 'numeric',
												month: 'long',
											})}
										</span>
									</div>
									<div className="quick-fact">
										<IoMdTrendingUp className="quick-fact-icon" />
										<span className="quick-fact-title">DIFFICULTY</span>
										<span className="quick-fact-data">{tour.difficulty}</span>
									</div>
									<div className="quick-fact">
										<IoPersonOutline className="quick-fact-icon" />
										<span className="quick-fact-title">PARTICIPANTS</span>
										<span className="quick-fact-data">{tour.maxGroupSize}</span>
									</div>
									<div className="quick-fact">
										<IoStarOutline className="quick-fact-icon" />
										<span className="quick-fact-title">RATING</span>
										<span className="quick-fact-data">{`${tour.ratingsAverage}/5`}</span>
									</div>
								</div>
								<div>
									<p className="tour-desciption-title">YOUR TOUR GUIDES</p>
									{tour.guides.map((guide) => {
										return (
											<div key={guide._id} className="guide">
												<img
													className="tour-guide-img"
													src={
														import.meta.env.VITE_USER_IMG_BASE_URL + guide.photo
													}
												/>
												<span className="guide-role">{guide.role}</span>
												<span className="guide-name">{guide.name}</span>
											</div>
										);
									})}
								</div>
							</div>
							<div className="about-tour">
								<p className="tour-desciption-title">{`About ${tour.name}`}</p>
								<p className="about-tour-text">{tour.description}</p>
							</div>
						</section>
						<section className="tour-images-section">
							{tour.images.map((imgSrc, index) => {
								return (
									<div key={index} className="tour-img-box">
										<img
											className="tour-img"
											src={import.meta.env.VITE_TOUR_IMG_BASE_URL + imgSrc}
										/>
									</div>
								);
							})}
						</section>
						<section className="review-section">
							<div className="review-container">
								{tour.reviews.map((review) => {
									const updateReview = { ...review };
									const newImgSrc =
										import.meta.env.VITE_USER_IMG_BASE_URL + review.user.photo;
									updateReview.user.photo = newImgSrc;
									return <ReviewCard {...updateReview} />;
								})}
							</div>
						</section>
						<section className="book-tour-section">
							<div className="book-tour-card">
								<div className="book-tour-img-box">
									<img
										className="book-tour-img-1"
										src={
											import.meta.env.VITE_TOUR_IMG_BASE_URL + tour.images[0]
										}
									/>
									<img
										className="book-tour-img-2"
										src={
											import.meta.env.VITE_TOUR_IMG_BASE_URL + tour.images[1]
										}
									/>
									<img
										className="book-tour-img-3"
										src={
											import.meta.env.VITE_TOUR_IMG_BASE_URL + tour.images[2]
										}
									/>
								</div>
								<div>
									<p className="heading-tertiary">WHAT ARE YOU WAITING FOR?</p>
									<p className="book-tour-text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
								</div>
								<div className="book-tout-btn-box" >
									<button className="btn-filled book-tour-btn">
										{!isLoggedIn ? `Login to book tour` : 'Book Tour'}
									</button>
								</div>
							</div>
						</section>
					</>
				) : (
					<Loader />
				)}
			</div>
		</>
	);
};

export default TourPage;
