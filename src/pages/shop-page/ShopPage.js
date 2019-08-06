//import
import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Collections from '../../components/collections/Collections';
import Categories from '../categories/Categories';
import Spinner from '../../components/spinner/Spinner';
//redux
import { createStructuredSelector } from 'reselect';
import {
	dataLoadingSelector,
	errorMessageSelector,
	isDataLoadedSelector
} from '../../redux/selectors/shopSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingData } from '../../redux/actions/shopActions';

//our component with spinner
const CollectionsWithSpinner = Spinner(Collections);
const CategoriesWithSpinner = Spinner(Categories);

const ShopPage = ({ match }) => {
	//redux
	const { loading, errorMessage, isDataLoaded } = useSelector(
		createStructuredSelector({
			loading: dataLoadingSelector,
			errorMessage: errorMessageSelector,
			isDataLoaded: isDataLoadedSelector
		})
	);
	const dispatch = useDispatch();
	//component did mount
	useEffect(() => {
		dispatch(setLoadingData());
	}, []);
	//jsx
	return (
		<div className='shop'>
			<div className='container mt-2'>
				<div className='row'>
					{/* our shop route */}

					<Route
						exact
						path={`${match.path}`}
						render={props => <CollectionsWithSpinner loading={loading} {...props} />}
					/>
					<Route
						path={`${match.path}/:categoryId`}
						render={props => <CategoriesWithSpinner loading={!isDataLoaded} {...props} />}
					/>
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
									<Link to={`${match.path}/t-shirts`}>T-shirts</Link>
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
