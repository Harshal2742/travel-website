import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { toggleModal } from '../store/auth-slice';

enum NavigationPath {
	Home = '/',
	AllTours = '/all-tours',
	Blogs = '/blogs',
	Services = '/services',
}

const Header = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();

	return (
		<header
			className={`header ${
				location.pathname != NavigationPath.Home && 'make-visible'
			}`}
		>
			<div>
				<h1 className="header-logo">Travelling</h1>
			</div>
			<nav>
				<ul className={'navlist'}>
					<li>
						<NavLink
							to={NavigationPath.Home}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={NavigationPath.AllTours}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							All tours
						</NavLink>
					</li>
					<li>
						<NavLink
							to={NavigationPath.Blogs}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to={NavigationPath.Services}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Services
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="btn-box">
				<button
					className="btn-outlined"
					onClick={() => dispatch(toggleModal({ showLoginModal: true }))}
				>
					Login
				</button>
				<button
					className="btn-filled"
					onClick={() => dispatch(toggleModal({ showLoginModal: false }))}
				>
					Sign up
				</button>
			</div>
		</header>
	);
};

export default Header;
