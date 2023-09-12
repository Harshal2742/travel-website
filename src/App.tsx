import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllTours from './components/AllTours';
import Loader from './components/common/Loader';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/all-tours" element={<AllTours />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
