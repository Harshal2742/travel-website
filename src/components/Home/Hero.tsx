const Hero = (): JSX.Element => {
	return (
		<section className="section-hero">
			<div className="hero-img-box">
				<img className="hero-img" src="/img/home-hero.jpg" />
			</div>
			<div className="hero-content-box">
				<h1 className="heading-primary hero-heding">
					Dare to live the life you've wanted
				</h1>
				<p className="hero-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					error modi dolores magni. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit.
				</p>
        <button className="btn-filled" >
          Start exploring now
        </button>
			</div>
		</section>
	);
};

export default Hero;
