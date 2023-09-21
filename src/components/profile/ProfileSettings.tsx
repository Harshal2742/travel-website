import { FormEvent, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { CurrentUser } from '../../api/api.interface';
import { updateAccountSettings } from '../../api/api';

const ProfileSettings = (): JSX.Element => {
	const currentUser = useAppSelector((state) => state.auth.currentUser);
	const dispatch = useAppDispatch();
	const [accountSettingsFormData, setAccountSettingsFormData] =
		useState<CurrentUser>(currentUser!);

	const [isAccountSettingsChanged, setIsAccountSettingsChanged] =
		useState(false);

	const onAccountSettingSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData()
		// formData.set("name")
		
		// const result = updateAccountSettings()
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
						<input className="img-input" type="file" id="newProfileImage" />
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
				<form className="account-settings-form">
					<div className="input-box">
						<label htmlFor="currPass">Current password</label>
						<input
							type="password"
							id="currPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							autoComplete="on"
						/>
					</div>
					<div className="input-box">
						<label htmlFor="newPass">New password</label>
						<input
							type="password"
							id="newPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							// value={accountSettingsFormData?.email}
							autoComplete="on"
						/>
					</div>
					<div className="input-box">
						<label htmlFor="confirmPass">Confirm password</label>
						<input
							type="password"
							id="confirmPass"
							placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
							// value={accountSettingsFormData?.email}
							autoComplete="on"
						/>
					</div>
					<div className="account-settings-btn-box">
						<button type="submit" className="btn-filled">
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default ProfileSettings;
