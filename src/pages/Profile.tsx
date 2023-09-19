import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

const Profile = (): JSX.Element => {
	return (
		<section className="profile-section">
			<div className="container">
				<div>
					<nav className="profile-nav-box">
						<ul className="profile-navlist">
							<li>
								<NavLink
									className={({isActive}) =>
										isActive
											? 'profile-navlink-active'
											: 'profile-navlink-pending'
									}
									to={'/me'}
									end
								>
									Settings
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({isActive}) =>
										isActive
											? 'profile-navlink-active'
											: 'profile-navlink-pending'
									}
									to={'/me/my-bookings'}
									end
								>
									My Bookings
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({isActive}) =>
										isActive
											? 'profile-navlink-active'
											: 'profile-navlink-pending'
									}
									to={'/me/my-reviews'}
									end
								>
									My Reviews
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className='profile-page'>
					<Outlet />
				</div>
			</div>
		</section>
	);
};

export default Profile;
