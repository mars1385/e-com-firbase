//import
import React from 'react';
import { Link } from 'react-router-dom';
import './MainShowCase.scss';

const SecondaryShowCase = () => {
	//jsx
	return (
		<div className='showcase py-5' style={{ minHeight: '400px', height: '500px' }}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 ml-auto order-md-2 align-self-start'>
						<div className='showcase-content'>
							<h2 className='sub-title'>#New Summer Collection 2019</h2>
							<h1>New Shoes</h1>
							<p>
								<Link to='/shop/shoes' className='btn btn-black btn-success link'>
									Shop Now
								</Link>
							</p>
						</div>
					</div>
					<div className='col-md-6 order-1 align-self-end'>
						<img src={require('../../assets/img/secShowCase.png')} alt='Image' className='img-fluid' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondaryShowCase;
