import axios from 'axios';
import { useState, useEffect } from 'react';

const getAllUsers = async (url) => {
	console.log('getAllUsers');
	const result = await axios.get(url);
	return result.data;
};

export const getAllUserApi = (url) => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(true);

	useEffect(() => {
		let isActive = true; //17ms02ss
		try {
			console.log('isActive 1 ---', isActive);

			async function fetchData() {
				console.log('isActive 2 ---', isActive);

				const data = await getAllUsers(url);
				// const data = isActive ? await getAllUsers(url) : [];

				console.log('isActive 3 ---', isActive);

				if (data && data.length > 0 && isActive) {
					console.log('isActive 4 ---', isActive);

					setData(data);
					console.log('isActive 5 ---', isActive);

					setIsError(false);
					console.log('isActive 6 ---', isActive);
				}
			}
			console.log('isActive 7 ---', isActive);
			fetchData();

			console.log('isActive 8 ---', isActive);
		} catch (error) {
			setIsError(true);
		}
		console.log('isActive 9 ---', isActive);
		return () => (isActive = false); //17ms02ss
	}, []);

	return { data, isError };
};

// 4ms06ss
export const getAllUserApi1 = (url) => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(true);

	useEffect(() => {
		try {
			async function fetchData() {
				const data = await getAllUsers(url);

				if (data && data.length > 0) {
					setData(data);
					setIsError(false);
				}
			}
			fetchData();
		} catch (error) {
			setIsError(true);
		}
	}, []);

	return { data, isError };
};
