//import
import React from 'react';
import './CartCheckout.scss';

const CartCheckout = () => {
	return (
		<div className='checkout '>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-md-12'>
						<div className='site-blocks-table'>
							<table className='table table-bordered'>
								<thead>
									<tr>
										<th className='product-thumbnail'>Image</th>
										<th className='product-name'>Product</th>
										<th className='product-price'>Price</th>
										<th className='product-quantity'>Quantity</th>
										<th className='product-total'>Total</th>
										<th className='product-remove'>Remove</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCheckout;
