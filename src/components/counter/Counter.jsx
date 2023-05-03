import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Counter() {
	const [count, setCount] = useState(0);

	//no dependence
	useEffect(() => {
		setTimeout(() => {
			setCount(() => {
				return count + 1;
			});
		}, 1000);
	});

	//dependence of arr
	useEffect(() => {
		setTimeout(() => {
			setCount(() => {
				return count + 1;
			});
		}, 1000);
	}, []);

	//dependence of arr with count x2 in 1st time
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => {
				console.log('count 1 ---', count);
				count = count + 1; //-> re-render immediately
				console.log('count 2 ---', count);
				return count;
			});
		}, 1000);
	}, []);

	return <h1>I've rendered {count} times!</h1>;
}

export default Counter;
