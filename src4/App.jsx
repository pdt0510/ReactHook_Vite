import './App.css';
import Nav from './components/nav/Nav';
import ApiAccess from './components/apiAccess/ApiAccess';

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
			<ApiAccess />
		</div>
	);
}

export default App;
