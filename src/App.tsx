import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllTours from './pages/AllTours';
import Tour from './pages/TourPage';
import Auth from './components/Auth';
import { useAppSelector } from './store/store';

function App() {
	const showAuthModal = useAppSelector((state) => state.auth.showModal);
	return (
		<>
			{showAuthModal && <Auth />}
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/all-tours" element={<AllTours />} />
					<Route path="/tour/:tourId" element={<Tour />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
