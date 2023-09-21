import { FormEvent, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { CurrentUser, PasswordUpdate } from '../../api/api.interface';
import { logout, updateAccountSettings, updatePassword } from '../../api/api';
import { setCurrentUserLoginData } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = (): JSX.Element => {
	const currentUser = useAppSelector((state) => state.auth.currentUser);
	const dispatch = useAppDispatch();
	const navigation = useNavigate();
	const [accountSettingsFormData, setAccountSettingsFormData] =
		useState<CurrentUser>(currentUser!);

	const [isAccountSettingsChanged, setIsAccountSettingsChanged] =
		useState(false);

	const [passwordUpdateData, setPasswordUpdateData] = useState<PasswordUpdate>({
		passwordCurrent: '',
		password: '',
		passwordConfirm: '',
	});

	const onAccountSettingSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set('name', accountSettingsFormData.name);
		formData.set('email', accountSettingsFormData.email);

		formData.set(
			'photo',
			(document.getElementById('newProfileImage') as HTMLInputElement).files![0]
		);
		const result = await updateAccountSettings(formData);

		if (result.status === 'success') {
			dispatch(
				setCurrentUserLoginData({ isLoggedIn: true, currentUser: result.data })
			);
		}
	};

	const onPasswordUpadate = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = await updatePassword(passwordUpdateData);
		if (result.status === 'success') {
			localStorage.setItem('travel-token', result.token || '');
			dispatch(
				setCurrentUserLoginData({ isLoggedIn: true, currentUser: result.data })
			);
			setPasswordUpdateData({
				passwordCurrent: '',
				password: '',
				passwordConfirm: '',
			});
		}
	};

	const onLogout = async () => {
		const result = await logout();
		if (result.status === 'success') {
			navigation('/');
			localStorage.removeItem('travel-token');
			dispatch(
				setCurrentUserLoginData({ isLoggedIn: false, currentUser: undefined })
			);
			document.documentElement.scrollTo(0, 0);
		}
	};

	return (
		<section>
			<div className="profile-settings-box">
				<p className="heading-tertiary account-settings-heading">
					ACCOUNT SETTINGS
				</p>
				<form
					className="account-settings-form"
					onSubmit={onAccountSettingSubmit}
				>
					<div className="input-box">
						<label htmlFor="name">Name</label>
						<input
							required
							type="text"
							id="name"
							placeholder="Your name"
							value={accountSettingsFormData?.name}
							onChange={(e) => {
								setIsAccountSettingsChanged(true);
								setAccountSettingsFormData((prevData) => {
									return { ...prevData, name: e.target.value };
								});
							}}
							autoComplete="on"
						/>
					</div>
					<div className="input-box">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							required
							placeholder="example@gmail.com"
							value={accountSettingsFormData?.email}
							autoComplete="on"
							onChange={(e) => {
								setIsAccountSettingsChanged(true);
								setAccountSettingsFormData((prevData) => {
									return { ...prevData, email: e.target.value };
								});
							}}
						/>
					</div>
					<div className="profile-user-img-box">
						<img
							className="user-img"
							src={`${import.meta.env.VITE_USER_IMG_BASE_URL}/${
								accountSettingsFormData?.photo
							}`}
						/>
						<label htmlFor="newProfileImage" className="img-input-label">
							Choose new photo
						</label>
						<input
							className="img-input"
							type="file"
							id="newProfileImage"
							accept=".jpeg,.jpg,.png"
							onChange={() => {
								setIsAccountSettingsChanged(true);
							}}
						/>
					</div>
					<div className="account-settings-btn-box">
						<button
							type="button"
							className="btn-outlined"
							disabled={!isAccountSettingsChanged}
							onClick={() => {
								setAccountSettingsFormData(currentUser!);
								setIsAccountSettingsChanged(false);
							}}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="btn-filled"
							disabled={!isAccountSettingsChanged}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="change-password-box">
				<p className="heading-tertiary account-settings-heading">
					PASSWORD CHANGE
				</p>
				<form className="account-settings-form" onSubmit={onPasswordUpadate}>
					<div className="input-box">
						<label htmlFor="currPass">Current password</label>
						<input
							type="password"
							id="currPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							autoComplete="on"
							value={passwordUpdateData.passwordCurrent}
							onChange={(e) => {
								setPasswordUpdateData((prevData) => {
									return { ...prevData, passwordCurrent: e.target.value };
								});
							}}
						/>
					</div>
					<div className="input-box">
						<label htmlFor="newPass">New password</label>
						<input
							type="password"
							id="newPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							autoComplete="on"
							value={passwordUpdateData.password}
							onChange={(e) => {
								setPasswordUpdateData((prevData) => {
									return { ...prevData, password: e.target.value };
								});
							}}
						/>
					</div>
					<div className="input-box">
						<label htmlFor="confirmPass">Confirm password</label>
						<input
							type="password"
							id="confirmPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							value={passwordUpdateData.passwordConfirm}
							autoComplete="on"
							onChange={(e) => {
								setPasswordUpdateData((prevData) => {
									return { ...prevData, passwordConfirm: e.target.value };
								});
							}}
						/>
					</div>
					<div className="account-settings-btn-box">
						<button type="submit" className="btn-filled">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="logout-btn-box">
				<button className="btn-filled" onClick={onLogout}>
					Logout
				</button>
			</div>
		</section>
	);
};
export default ProfileSettings;
