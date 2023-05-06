import ApiAccess from '../components/apiAccess/ApiAccess';
import Homepage, { Notfound } from '../components/homepage/Homepage';
<<<<<<< HEAD
import Child from '../components/child/Child';
import { Userinfo } from '../components/apiAccess/ApiAccess';
import Search from './../components/search/Search';
=======
import Countdown from '../components/countdown/Countdown';
import { Userinfo } from '../components/apiAccess/ApiAccess';
import Addnew from './../components/addNew/Addnew';
>>>>>>> 77f265cfc4b25279d3eb1a3b21c55895fe186407

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
<<<<<<< HEAD
		comp: <Child />,
=======
		comp: <Countdown />,
>>>>>>> 77f265cfc4b25279d3eb1a3b21c55895fe186407
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
<<<<<<< HEAD
		comp: <Notfound />,
	},
	{
		name: 'Search videos from youtube',
		path: '/search-yt',
		comp: <Search />,
=======
		comp: <Notfound />, //v37xx1
>>>>>>> 77f265cfc4b25279d3eb1a3b21c55895fe186407
	},
];
