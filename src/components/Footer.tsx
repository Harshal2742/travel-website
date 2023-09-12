import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
} from 'react-icons/ai';

const footerNavLinkList = [
	{
		title: 'About',
		items: ['Discover', 'Destination', 'Trip plan', 'About us'],
	},
	{
		title: 'Support',
		items: ['Contact us', 'Cookies', 'Privary & terms', 'Sitemap'],
	},
	{
		title: 'Community',
		items: ['Travellers', 'Travelling', 'Forums', 'DestinationGo'],
	},
	{
		title: 'Resources',
		items: ['Service', 'Vision', 'Mission'],
	},
];

const Footer = () => {
	return (
		<footer className="footer-section">
			<div className="container grid-5-col footer-container">
				<div>
					<p className="footer-navlist-title">Social</p>
					<ul className="footer-social-list">
						<li>
							<AiFillInstagram />
						</li>
						<li>
							<AiFillLinkedin />
						</li>
						<li>
							<AiFillFacebook />
						</li>
						<li>
							<AiFillTwitterSquare />
						</li>
					</ul>
				</div>

				{footerNavLinkList.map((list, index) => {
					return (
						<div key={index}>
							<p className="footer-navlist-title">{list.title}</p>
							<ul className="footer-navlist">
								{list.items.map((item, index) => {
									return (
										<li key={index}>
											<a href="#">{item}</a>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
				<p className="copy-right-text">
					© by Harshal Takade. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
