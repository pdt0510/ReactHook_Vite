import './App.css';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import * as routeSupp from './utilities/routeSupp';

// App1
function App() {
	const showMenu = (routes) => {
		let result = null;
		const homeUrl = '/';

		if (routes.length > 0) {
			result = routes.map((route, idx) => {
				const exact = homeUrl === route.path ? true : false;

				return (
					<Route
						key={idx}
						path={route.path}
						exact={exact}
						element={route.comp}
					/>
				);
			});
		}

		return result;
	};

	return (
		<div className='App'>
			<Nav />
			<Routes>{routeSupp.routes.length > 0 && showMenu(routeSupp.routes)}</Routes>
		</div>
	);
}

export default App;
