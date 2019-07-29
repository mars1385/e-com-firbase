//import
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Collections from '../../components/collections/Collections';
import Categories from '../categories/Categories';

const ShopPage = ({ match }) => {
	//jsx
	return (
		<div className='shop'>
			<div className='container mt-2'>
				<div className='row'>
					{/* our shop route */}

					<Route exact path={`${match.path}`} component={Collections} />
					<Route path={`${match.path}/:categoryId`} component={Categories} />
					{/* end */}
					<div className='col-md-3 order-2'>
						<div className='border mb-4 rounded p-4'>
							<h2 className='mb-4 h6 text-uppercase text-black d-block text-center'>Categories</h2>
							<ul className='list-unstyled b-0  text-center'>
								<li className='mb-1'>
									<Link to={`${match.path}/bags`}>Bags</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/shoes`}>Shoes</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/watches`}>Watches</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/tShirts`}>T-shirts</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/jeans`}>Jeans</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/jackets`}>Jackets</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/womens`}>Womens</Link>
								</li>
								<li className='mb-1'>
									<Link to={`${match.path}/mens`}>Mens</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopPage;
