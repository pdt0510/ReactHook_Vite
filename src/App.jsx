import './App.css';
import Nav from './components/nav/Nav';
import ApiAccess from './components/apiAccess/ApiAccess';
import Countdown from './components/countdown/Countdown';

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
	return (
		<div className='App'>
			<Nav />
			<Countdown />
		</div>
	);
}

export default App;
