import { useEffect, useState } from 'react';
import { setCurrentUserLoginData, toggleModal } from '../store/auth-slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { signIn } from '../api/api';
import { SignInApiData } from '../api/api.interface';
import { LabeledInput } from './common/FormInput';
import { toggleNotification } from '../store/ui-slice';

const Auth = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const showLoginModal = useAppSelector((state) => state.auth.showLoginModal);
	const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);

	const [formData, setFormData] = useState<SignInApiData>({
		email: '',
		password: '',
	});

	const onLogin = async () => {
		let emailInvalid = false;
		let passwordInvalid = false;

		if (!formData.email.includes('@') || formData.email.trim().length === 0) {
			emailInvalid = true;
		}

		if (formData.password.trim().length < 8) {
			passwordInvalid = true;
		}

		setIsEmailInvalid(emailInvalid);
		setIsPasswordInvalid(passwordInvalid);

		if (passwordInvalid || emailInvalid) {
			return;
		}

		try {
			const result = await signIn(formData);
			if (result.status == 'success' && result.data) {
				localStorage.setItem('travel-token', result.token || '');
				dispatch(
					setCurrentUserLoginData({
						isLoggedIn: true,
						currentUser: result.data,
					})
				);
				dispatch(toggleModal());
			} else {
				dispatch(
					toggleNotification({
						showNotification: true,
						isSuccess: false,
						message: result.message,
					})
				);
			}
		} catch (e) {
			console.log(e);
			dispatch(
				toggleNotification({
					showNotification: true,
					isSuccess: false,
					message: 'Something went wrong!',
				})
			);
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
						<LabeledInput
							label={'Email'}
							type="email"
							id="email"
							placeholder="example@gmail.com"
							onChange={(e) => {
								setFormData((prevData) => {
									return { ...prevData, email: e.target.value };
								});
							}}
							value={formData.email}
							isInvalid={isEmailInvalid}
						/>

						<LabeledInput
							label="Password"
							type="password"
							id="password"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							autoComplete="off"
							value={formData.password}
							isInvalid={isPasswordInvalid}
							onChange={(e) => {
								setFormData((prevData) => {
									return { ...prevData, password: e.target.value };
								});
							}}
						/>

						{!showLoginModal && (
							<LabeledInput
								label={'Confirm password'}
								type="password"
								id="confirmPassword"
								placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
								autoComplete="off"
								onChange={(e) => {}}
							/>
						)}
						<button className="btn-filled">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
