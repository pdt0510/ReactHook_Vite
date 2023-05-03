import { useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search/Search';
import Counter from './components/counter/Counter';

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

//App2
function App() {
	useEffect(() => {});

	return (
		<div className='App'>
			<Nav />
			<header className='App-header'>
				<h1>React using vite</h1>
				<Search todoList={arr} />
			</header>
		</div>
	);
}

export default App;
