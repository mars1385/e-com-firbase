//import

const initialState = {
	Collections: [
		{
			title: 'bags',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/bags'
		},
		{
			title: 'shoes',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/shoes'
		},
		{
			title: 'watches',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/watches'
		},
		{
			title: 't-shirts',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 4,
			linkUrl: 'shop/tShirts'
		},
		{
			title: 'jeans',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 5,
			linkUrl: 'shop/jeans'
		},
		{
			title: 'jacket',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 6,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 7,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 8,
			linkUrl: 'shop/mens'
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
