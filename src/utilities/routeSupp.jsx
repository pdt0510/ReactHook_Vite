import ApiAccess from '../components/apiAccess/ApiAccess';
import Homepage, { Notfound } from '../components/homepage/Homepage';
import Countdown from '../components/countdown/Countdown';
import { Userinfo } from '../components/apiAccess/ApiAccess';
import Addnew from './../components/addNew/Addnew';

export const routes = [
	{
		name: 'Home',
		path: '/',
		comp: <Homepage />,
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
		path: '/users/:id',
		comp: <Userinfo />,
	},
	{
		name: null,
		path: '*',
		comp: <Notfound />, //v37xx1
	},
];
