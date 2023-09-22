import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllTours from './pages/AllTours';
import Tour from './pages/TourPage';
import Auth from './components/Auth';
import { useAppDispatch, useAppSelector } from './store/store';
import { useEffect } from 'react';
import { getCurrentUser } from './api/api';
import { setCurrentUserLoginData } from './store/auth-slice';
import Loader from './components/common/Loader';
import ProfileSettings from './components/profile/ProfileSettings';
import Profile from './pages/Profile';
import MyBookings from './components/profile/MyBookings';
import MyReviews from './components/profile/MyReviews';
import Notification from './components/common/Notification';
import NotFound from './pages/NotFound';

function App() {
	const showAuthModal = useAppSelector((state) => state.auth.showModal);
	const dispatch = useAppDispatch();

	const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
	const currentUser = useAppSelector((state) => state.auth.currentUser);
	const showNotification = useAppSelector((state) => state.ui.showNotification);

	useEffect(() => {
		if (isLoggedIn && !currentUser) {
			(async () => {
				try {
					const result = await getCurrentUser();
					if (result.status === 'success') {
						dispatch(
							setCurrentUserLoginData({
								isLoggedIn: true,
								currentUser: result.data,
							})
						);
					} else {
						dispatch(
							setCurrentUserLoginData({
								isLoggedIn: false,
								currentUser: undefined,
							})
						);
					}
				} catch (e) {
					console.log(e);
					dispatch(
						setCurrentUserLoginData({
							isLoggedIn: false,
							currentUser: undefined,
						})
					);
				}
			})();
		}
	}, [isLoggedIn, currentUser, dispatch]);

	const showLoader = isLoggedIn && currentUser == undefined;

	return !showLoader ? (
		<>
			{showAuthModal && <Auth />}
			{showNotification && <Notification />}
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/all-tours" element={<AllTours />} />
					<Route path="/tour/:tourId" element={<Tour />} />

					{isLoggedIn && (
						<Route path="/me" element={<Profile />}>
							<Route index element={<ProfileSettings />} />
							<Route path="my-bookings" element={<MyBookings />} />
							<Route path="my-reviews" element={<MyReviews />} />
						</Route>
					)}
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	) : (
		<Loader />
	);
}

export default App;
