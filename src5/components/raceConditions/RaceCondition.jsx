import React, { useCallback, useEffect, useState } from 'react';

// v25xx1
export default function DataDisplayer(props) {
	console.log('id -------------------------------', props.id);
	const [data, setData] = useState(null);
	const [fetchedId, setFetchedId] = useState(null);

	// start helpers for visualising race conditions
	const [numReqs, setNumReqs] = useState(0);
	const increase = useCallback(() => setNumReqs((i) => i + 1), []);
	const decrease = useCallback(() => setNumReqs((i) => i - 1), []);

	// end helpers for visualising race conditions
	useEffect(() => {
		let active = true;

		const fetchData = async () => {
			increase();
			setTimeout(async () => {
				console.log('active 1 ---', active);
				const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
				const newData = await response.json();

				console.log('active 2 ---', active);
				decrease();
				console.log('active 3 ---', active);

				if (active) {
					console.log('triggering id ------------------------------', props.id);
					console.log('active 4 ---', active);

					setFetchedId(props.id);
					console.log('active 5 ---', active);

					setData(newData);
					console.log('active 6 ---', active);
				}
			}, 5000);
		};

		console.log('active 7 ---', active);
		fetchData();
		console.log('active 8 ---', active);

		return () => {
			console.log('active 9 ---', active);
			active = false;
			console.log('active 10 ---', active);
		};
	}, [props.id, increase, decrease]);

	return (
		<div>
			<p>Number of requests in flight: {numReqs} (may take up to 12 seconds)</p>
			<hr />
			{data ? (
				<>
					<p style={{ color: fetchedId === props.id ? 'green' : 'red' }}>
						Displaying Data for: {fetchedId}
					</p>
					<p>Result: {data.name}</p>
				</>
			) : null}
		</div>
	);
}
