import { useState, useEffect } from 'react';

const Child = (props) => {
	const { renderNum } = props;
	const [num, setNum] = useState(0);

	const checkRerender = () => {
		setNum(num + 1);
	};

	console.log('Child 1 ---', num);
	return (
		<>
			<h1>Child num: {num}</h1>
			<button onClick={checkRerender}>Child btn</button>
		</>
	);
};

export default Child;
