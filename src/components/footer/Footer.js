//import
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
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
										<a href='#'>Sell online</a>
									</li>
									<li>
										<a href='#'>Features</a>
									</li>
									<li>
										<a href='#'>Shopping cart</a>
									</li>
									<li>
										<a href='#'>Store builder</a>
									</li>
								</ul>
							</div>
							<div className='col-md-6 col-lg-4'>
								<ul className='list-unstyled'>
									<li>
										<a href='#'>Sell online</a>
									</li>
									<li>
										<a href='#'>Features</a>
									</li>
									<li>
										<a href='#'>Shopping cart</a>
									</li>
									<li>
										<a href='#'>Store builder</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-3'>
						<div className='block-5 mb-5'>
							<h3 className='footer-heading mb-4'>Contact Info</h3>
							<ul className='list-unstyled'>
								<li className='address'>203 Fake St. Mountain View, San Francisco, California, USA</li>
								<li className='phone'>
									<a href='tel://23923929210'>+2 392 3929 210</a>
								</li>
								<li className='email'>emailaddress@domain.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
