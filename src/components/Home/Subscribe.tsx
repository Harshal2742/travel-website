const Subscribe = (): JSX.Element => {
	return (
		<section className="subscribe-section">
			<div className="container subscribe-card">
				<h2 className="heading-secondary subscribe-heading">
					Prepare Yourself & Let's Explore The Beauty of The World
				</h2>
				<p className="subscribe-text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
					temporibus perspiciatis repudiandae rerum consequuntur. Neque
					assumenda blanditiis ex similique qui quia quasi, voluptatem saepe aut
					illum itaque odit? Facilis, minus!
				</p>
				<form className="subscribe-form">
					<input type="email" placeholder="Enter your email" className="email-input" />
					<button className="btn-filled">Subscribe</button>
				</form>
			</div>
		</section>
	);
};

export default Subscribe;
