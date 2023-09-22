import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { CurrentUser, PasswordUpdate } from '../../api/api.interface';
import { logout, updateAccountSettings, updatePassword } from '../../api/api';
import { setCurrentUserLoginData } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../common/FormInput';
import { toggleNotification } from '../../store/ui-slice';

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

	const [accountSettingsInputInvalid, setAccountSettingsInputInvalid] =
		useState({
			nameInvalid: false,
			emailInvalid: false,
		});

	const [passwordUpdateInputInvalid, setPasswordUpdateInputInvalid] = useState({
		currPassInvalid: false,
		passInvalid: false,
		confPassInvalid: false,
	});

	const onAccountSettingSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let nameInvalid = false;
		let emialInvalid = false;

		const regex = RegExp('[!@#$%&*()_+=|<>?{}\\[\\]~-]|[0-9]');

		if (
			accountSettingsFormData.name.trim().length === 0 ||
			regex.test(accountSettingsFormData.name)
		) {
			nameInvalid = true;
		}

		if (
			accountSettingsFormData.email.trim().length === 0 ||
			!accountSettingsFormData.email.includes('@')
		) {
			emialInvalid = true;
		}

		setAccountSettingsInputInvalid({
			nameInvalid: nameInvalid,
			emailInvalid: emialInvalid,
		});

		if (nameInvalid || emialInvalid) {
			return;
		}

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

			dispatch(
				toggleNotification({
					showNotification: true,
					isSuccess: true,
					message: 'Profile updated successfully',
				})
			);
		}
	};

	const onPasswordUpadate = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (passwordUpdateData.passwordCurrent.length < 8) {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, currPassInvalid: true };
			});
			return;
		} else {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, currPassInvalid: false };
			});
		}

		if (passwordUpdateData.password.length < 8) {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, passInvalid: true };
			});
			return;
		} else {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, passInvalid: false };
			});
		}

		if (passwordUpdateData.passwordConfirm.length < 8) {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, confPassInvalid: true };
			});
			return;
		} else {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, confPassInvalid: false };
			});
		}

		if (passwordUpdateData.password !== passwordUpdateData.passwordConfirm) {
			setPasswordUpdateInputInvalid((prevData) => {
				return { ...prevData, passInvalid: true, confPassInvalid: true };
			});
			return;
		}
		setPasswordUpdateInputInvalid({
			currPassInvalid: false,
			passInvalid: false,
			confPassInvalid: false,
		});
		try {
			const result = await updatePassword(passwordUpdateData);
			if (result.status === 'success') {
				localStorage.setItem('travel-token', result.token || '');
				dispatch(
					setCurrentUserLoginData({
						isLoggedIn: true,
						currentUser: result.data,
					})
				);
				setPasswordUpdateData({
					passwordCurrent: '',
					password: '',
					passwordConfirm: '',
				});
				dispatch(
					toggleNotification({
						showNotification: true,
						isSuccess: true,
						message: 'Password updated successfully',
					})
				);
			} else {
				dispatch(
					toggleNotification({
						showNotification: true,
						isSuccess: false,
						message: result.message,
					})
				);
			}
		} catch {
			dispatch(
				toggleNotification({
					showNotification: true,
					isSuccess: false,
					message: 'Something went wrong!',
				})
			);
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
					<LabeledInput
						label="Name"
						type="text"
						id="user-name"
						placeholder="Your name"
						value={accountSettingsFormData?.name}
						onChange={(e) => {
							setIsAccountSettingsChanged(true);
							setAccountSettingsFormData((prevData) => {
								return { ...prevData, name: e.target.value };
							});
						}}
						autoComplete="on"
						isInvalid={accountSettingsInputInvalid.nameInvalid}
						invalidMessage={'Name should contain only alphabets.'}
					/>
					<LabeledInput
						label={'Email'}
						type="email"
						id="email"
						placeholder="example@gmail.com"
						value={accountSettingsFormData?.email}
						autoComplete="on"
						onChange={(e) => {
							setIsAccountSettingsChanged(true);
							setAccountSettingsFormData((prevData) => {
								return { ...prevData, email: e.target.value };
							});
						}}
						isInvalid={accountSettingsInputInvalid.emailInvalid}
					/>
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
								setAccountSettingsInputInvalid({
									nameInvalid: false,
									emailInvalid: false,
								});
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
					<LabeledInput
						label={'Current password'}
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
						isInvalid={passwordUpdateInputInvalid.currPassInvalid}
						invalidMessage={'Password must be at least 8 character long'}
					/>
					<LabeledInput
						label={'New password'}
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
						isInvalid={
							passwordUpdateInputInvalid.passInvalid &&
							!passwordUpdateInputInvalid.confPassInvalid
						}
						invalidMessage={'Password must be at least 8 character long'}
					/>
					<LabeledInput
						label={'Confirm password'}
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
						isInvalid={passwordUpdateInputInvalid.confPassInvalid}
						invalidMessage={
							passwordUpdateInputInvalid.passInvalid &&
							passwordUpdateInputInvalid.confPassInvalid
								? 'Confirm password should match the new password'
								: 'Password must be at least 8 character long'
						}
					/>
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
