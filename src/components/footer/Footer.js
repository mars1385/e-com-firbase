//import
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
	//jsx
	return (
		<footer className='site-footer custom-border-top '>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 ml-auto mb-5 mb-lg-0'>
						<div className='row'>
							<div className='col-md-12'>
								<h3 className='footer-heading mb-4'>Quick Links</h3>
							</div>
							<div className='col-md-4 '>
								<ul className='list-unstyled'>
									<li>
										<Link to={'/shop/bags'}>Bags</Link>
									</li>
									<li>
										<Link to={'/shop/shoes'}>Shoes</Link>
									</li>
									<li>
										<Link to={'/shop/watches'}>Watches</Link>
									</li>
									<li>
										<Link to={'/shop/tShirts'}>T-shirts</Link>
									</li>
								</ul>
							</div>
							<div className='col-md-6 col-lg-4'>
								<ul className='list-unstyled'>
									<li>
										<Link to={'/shop/jeans'}>Jeans</Link>
									</li>
									<li>
										<Link to={'/shop/jackets'}>Jackets</Link>
									</li>
									<li>
										<Link to={'/shop/womens'}>Womens</Link>
									</li>
									<li>
										<Link to={'/shop/mens'}>Mens</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-4 '>
						<div className='block-5 mb-5'>
							<h3 className='footer-heading mb-4'>Contact Info</h3>
							<ul className='list-unstyled'>
								<li className='address'>
									<i className='fas fa-address-card' />
									203 Fake St. Mountain View, San Francisco, California, USA
								</li>
								<li className='phone'>
									<i className='fas fa-phone' />
									<a href='tel://23923929210'>+2 392 3929 210</a>
								</li>
								<li className='email'>
									<i className='fas fa-envelope' />
									emailaddress@domain.com
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
