import { useState, useEffect } from 'react';

const delayInSecond = 0.2;
const Countdown = (props) => {
	const [num, setNum] = useState(10);

	useEffect(() => {
		if (num === 0) return; //46ms03ss, ...didUpdate()

		let timer = setInterval(() => {
			console.log('prev num ---', num);
			setNum(num - 1);
		}, delayInSecond * 1000);

		return () => {
			clearTimeout(timer);
		}; //43ms08ss, ...willUnmount()
	}, [num]); //40ms30ss, ...didUpdate() + ...didMount()

	return <h1>Hook countdown: {num}</h1>;
};

export default Countdown;
