import axios from 'axios';
import { useState, useEffect } from 'react';

const delaySeconds = 2;

const getAllUsers = async (url, ctrlOpt) => {
	const result = await axios.get(url, ctrlOpt);

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

				const data = await getAllUsers(url, ctrlOpt)
					.then((data) => {
						return data;
					})
					.catch((error) => {
						console.log('getAllUserApi request:', error.message);
						setError(true);
					});

				if (data && data.length > 0 && isActive) {
					setData(data);
					setError(false);
				}
			}

			setTimeout(() => {
				fetchData();
			}, delaySeconds * 1000);

			return () => controller.abort();
		} catch (error) {
			console.log('getAllUserApi error ---', error);
			setError(true);
		}
		return () => (isActive = false);
	}, []);

	return { data, isError };
};
