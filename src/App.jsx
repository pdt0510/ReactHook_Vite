import './App.css';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import * as routeSupp from './utilities/routeSupp';
import { useState } from 'react';
import Child from './components/child/Child';

//App2
function App() {
	const [num, setNum] = useState(0);

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

	// 3ms59ss
	const checkRerender = () => {
		setNum(num + 1);
	};

	console.log('Parent 1 ---', num);

	return (
		<div className='App'>
			<Nav />
			<Routes>{routeSupp.routes.length > 0 && showMenu(routeSupp.routes)}</Routes>

			{/* 3ms59ss */}
			<br />
			<Child renderNum={num} />
			<h1>Parent num: {num}</h1>
			<button onClick={checkRerender}>Parent btn</button>
		</div>
	);
}

export default App;
