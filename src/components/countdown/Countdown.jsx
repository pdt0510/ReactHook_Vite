import { useState, useEffect } from 'react';

const delayInSecond = 0.5;
const Countdown = (props) => {
	const [num, setNum] = useState(10);

	useEffect(() => {
		if (num === 0) return;

		let timer = setInterval(() => {
			setNum(num - 1);
		}, delayInSecond * 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [num]);

	return <h1>Hook countdown: {num}</h1>;
};

export default Countdown;
