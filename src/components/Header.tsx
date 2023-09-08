import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div>
				<h1 className='header-logo'>Travelling</h1>
			</div>
			<nav>
				<ul className="navlist">
					<li>
						<NavLink
							to={'/'}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/all-tours'}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							All tours
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/blog'}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/services'}
							className={({ isActive }) => {
								return isActive ? 'navlink-active' : 'navlink-pending';
							}}
						>
							Services
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className='btn-box'>
				<button className='btn-outlined'>Login</button>
				<button className='btn-filled'>Sign up</button>
			</div>
		</header>
	);
};

export default Header;
