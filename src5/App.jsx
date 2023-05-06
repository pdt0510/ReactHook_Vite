import './App.css';
import DataDisplayer from './components/raceConditions/RaceCondition';
import React, { useState } from 'react';

function App() {
	const [currentId, setCurrentId] = useState(null);

	const handleClick = () => {
		const idToFetch = Math.round(Math.random() * 80);
		setCurrentId(idToFetch);
	};

	return (
		<div className='App'>
			<div>
				{currentId ? <p>Latest requested ID: {currentId}</p> : null}

				<button
					type='button'
					onClick={handleClick}
					className='fetch-btn'
				>
					Fetch data!
				</button>
			</div>
			<hr />
			{currentId ? <DataDisplayer id={currentId} /> : null}
		</div>
	);
}

export default App;
