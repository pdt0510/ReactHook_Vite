import ApiAccess from '../components/apiAccess/ApiAccess';
import Homepage from '../components/homepage/Homepage';
import Countdown from '../components/countdown/Countdown';
import { Userinfo } from '../components/apiAccess/ApiAccess';

export const routes = [
	{
		name: 'Home',
		path: '/',
		comp: <Homepage />, //v29xx1
	},
	{
		name: 'Users',
		path: '/users',
		comp: <ApiAccess />,
	},
	{
		name: 'Countdown',
		path: '/countdown',
		comp: <Countdown />,
	},
	{
		name: 'About',
		path: '/about',
		comp: <h1>About text</h1>,
	},
	{
		name: null,
		path: '/users/:id', //v31xx2
		comp: <Userinfo />,
	},
];
