import { useEffect, useState } from 'react';
import { setCurrentUserLoginData, toggleModal } from '../store/auth-slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { signIn } from '../api/api';
import { SignInApiData } from '../api/api.interface';

const Auth = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const showLoginModal = useAppSelector((state) => state.auth.showLoginModal);

	const [formData, setFormData] = useState<SignInApiData>({
		email: '',
		password: '',
	});

	const onLogin = async () => {
		const result = await signIn(formData);
		if (result.status == 'success' && result.data) {
			localStorage.setItem('travel-token', result.token || '');
			dispatch(
				setCurrentUserLoginData({ isLoggedIn: true, currentUser: result.data })
			);
			dispatch(toggleModal());
		}
	};

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
					<form
						className="auth-form"
						onSubmit={(e) => {
							e.preventDefault();
							onLogin();
						}}
					>
						<div className="input-box">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								placeholder="example@gmail.com"
								autoComplete="on"
								onChange={(e) => {
									setFormData((prevData) => {
										return { ...prevData, email: e.target.value };
									});
								}}
							/>
						</div>
						<div className="input-box">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
								autoComplete="off"
								onChange={(e) => {
									setFormData((prevData) => {
										return { ...prevData, password: e.target.value };
									});
								}}
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
