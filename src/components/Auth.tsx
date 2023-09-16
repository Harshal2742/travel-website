import { useEffect } from 'react';
import { toggleModal } from '../store/auth-slice';
import { useAppDispatch, useAppSelector } from '../store/store';

const Auth = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const showLoginModal = useAppSelector((state) => state.auth.showLoginModal);

	return (
		<div className="auth-container">
			<div
				className="auth-inner-conatiner"
				onClick={() => {
					dispatch(toggleModal());
				}}
			>
				<div
					className="auth-card"
					id="authCard"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<h3 className="heading-tertiary">{`${
						showLoginModal ? 'Login' : 'Sign up'
					}`}</h3>
					<form className="auth-form">
						<div className="input-box">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								placeholder="example@gmail.com"
								autoComplete="on"
							/>
						</div>
						<div className="input-box">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
								autoComplete="off"
							/>
						</div>
						{!showLoginModal && (
							<div className="input-box">
								<label htmlFor="password">Confirm password</label>
								<input
									type="password"
									id="confirmPassword"
									placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
									autoComplete="off"
								/>
							</div>
						)}
						<button className="btn-filled">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
