//import
import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import Collections from '../../components/collections/Collections';

const ShopPage = () => {
	//state
	const [collection, setCollection] = useState(SHOP_DATA);
	//jsx
	return (
		<div>
			<Collections />
		</div>
	);
};

export default ShopPage;
