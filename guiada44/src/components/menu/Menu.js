import React from 'react';
import { Tabs, Tab } from 'react-materialize';

import Female from './Female';
import Male from './Male';
import Kid from './Kid';
import House from './House';
import Sport from './Sport';
import Premium from './Premium';
import Mark from './Mark';
import Style from './Style';
import Outlet from './Outlet';

const Menu = () => {

	return (
		<Tabs className = 'tabs-swipe-demo-fixed-width z-depth-1 center black-text menu'>
			<Tab options = { options } active title = 'Feminino'>
				<Female />
			</Tab>
			<Tab options = { options } title = 'Masculino' >
				<Male />
			</Tab>
			<Tab options = { options } title = 'Infantil' >
				<Kid />
			</Tab>
			<Tab options = { options } title = 'Casa' >
				<House />
			</Tab>
			<Tab options = { options } title = 'Esporte' >
				<Sport />
			</Tab>
			<Tab options = { options } title = 'Premium' >
				<Premium />
			</Tab>
			<Tab options = { options } title = 'Marcas' >
				<Mark />
			</Tab>
			<Tab options = { options } title = 'Estilo' >
				<Style />
			</Tab>
			<Tab options = { options } title = 'Outlet' >
				<Outlet />
			</Tab>
		</Tabs>
	);
};

const options = {
	options: {
		duration: 300,
		onShow: null,
		responsiveThreshold: Infinity,
		swipeable: true
	}
};

export default Menu;