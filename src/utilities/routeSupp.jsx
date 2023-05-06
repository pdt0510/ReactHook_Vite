import ApiAccess from '../components/apiAccess/ApiAccess';
import Homepage, { Notfound } from '../components/homepage/Homepage';
import Child from '../components/child/Child';
import { Userinfo } from '../components/apiAccess/ApiAccess';
import Search from './../components/search/Search';

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
		comp: <Child />,
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
		comp: <Notfound />,
	},
	{
		name: 'Search videos from youtube',
		path: '/search-yt',
		comp: <Search />,
	},
];
