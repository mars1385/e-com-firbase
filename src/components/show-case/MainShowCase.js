//import
import React from 'react';
import { Link } from 'react-router-dom';
import './MainShowCase.scss';

const MainShowCase = () => {
	return (
		<div className='showcase'>
			<div className='container'>
				<div className='row'>
					<div className='showcase-content ml-auto order-md-2 align-self-start col-md-6'>
						<h4>#NEW SUMMER COLLECTION 2019</h4>
						<h1>ARRIVALS SALES</h1>
						<Link to='/shop' className='btn btn-block btn-success link'>
							Shop Now
						</Link>
					</div>
					<div className='showcase-image order-1 align-self-end col-md-6'>
						<img className='img-fluid' src={require('../../assets/img/mainShowCase.png')} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainShowCase;
