//import
import React from 'react';
import Menu from '../../components/menu-collections/Menu';
import './HomePage.scss';
import MainShowCase from '../../components/show-case/MainShowCase';
import SecondaryShowCase from '../../components/show-case/SecondaryShowCase';

const HomePage = () => {
	return (
		<div>
			<MainShowCase />
			<div className='home'>
				<Menu />
			</div>
			<SecondaryShowCase />
		</div>
	);
};

export default HomePage;
