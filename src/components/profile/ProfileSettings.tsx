const ProfileSettings = (): JSX.Element => {
	return (
		<section>
			<div>
				<p className="heading-tertiary">ACCOUNT SETTINGS</p>
				<form>
					<div className="input-box">
						<label htmlFor="email">Name</label>
						<input
							type="email"
							id="email"
							placeholder="example@gmail.com"
							autoComplete="on"
						/>
					</div>
					<div className="input-box">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="example@gmail.com"
							autoComplete="on"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};
export default ProfileSettings;
