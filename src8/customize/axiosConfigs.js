import axios from 'axios';
import { useState, useEffect } from 'react';

const delaySeconds = 2;

const getAllUsers = async (url, ctrlOpt) => {
	const result = await axios.get(url, ctrlOpt); //5ms53ss
	return result.data;
};

export const getAllUserApi = (url) => {
	const [data, setData] = useState([]);
	const [isError, setError] = useState(true);

	useEffect(() => {
		let isActive = true;
		const controller = new AbortController();

		try {
			async function fetchData() {
				const ctrlOpt = { signal: controller.signal };

				// 11ms22ss, way 1
				const data = await getAllUsers(url, ctrlOpt)
					.then((data) => {
						return data;
					})
					.catch((error) => {
						console.log('Request:', error.message);
						setError(true);
					});

				//way 2
				// try {
				// 	var data = await getAllUsers(url, ctrlOpt);
				// } catch (error) {
				// 	setError(false);
				// 	console.log('error ---', error);
				// }

				if (data && data.length > 0 && isActive) {
					console.log('data ---', data);
					setData(data);
					setError(false);
				}
			}

			console.log('waiting');
			setTimeout(() => {
				console.log('update');
				fetchData();
			}, delaySeconds * 1000);

			return () => controller.abort();
		} catch (error) {
			console.log('error ---', error);
			setError(true);
		}
		return () => (isActive = false);
	}, []);

	return { data, isError };
};

export const getAllUserApi1 = (url) => {
	const [data, setData] = useState([]);
	const [isError, setError] = useState(true);

	useEffect(() => {
		let isActive = true;
		const controller = new AbortController(); //5ms53ss

		try {
			async function fetchData() {
				const ctrlOpt = { signal: controller.signal };
				const data = await getAllUsers(url, ctrlOpt); //5ms53ss
				console.log('data ---', data);

				if (data && data.length > 0 && isActive) {
					setData(data);
					setError(false);
				}
			}

			console.log('waiting'); //v30xx1
			setTimeout(() => {
				console.log('update'); //v30xx1
				fetchData();
			}, delaySeconds * 1000);

			return () => {
				controller.abort(); //5ms53ss
			};
		} catch (error) {
			setError(true);
		}
		return () => (isActive = false);
	}, []);

	return { data, isError };
};
