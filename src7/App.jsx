import './App.css';
import Nav from './components/nav/Nav';
import ApiAccess from './components/apiAccess/ApiAccess';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Countdown from './components/countdown/Countdown';
import Homepage from './components/homepage/Homepage';

const arr = [
	{
		id: 1,
		name: 'PDT',
	},
	{
		id: 2,
		name: 'PNT',
	},
];

function App() {
	// 5ms55ss
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route
						path='/'
						exact //18ms12ss
					>
						<Homepage />
					</Route>
					<Route path='/users'>
						<ApiAccess />
					</Route>
					<Route path='/countdown'>
						<Countdown />
					</Route>
					<Route path='/about'>
						<h1>About text</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
