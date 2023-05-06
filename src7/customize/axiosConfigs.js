import axios from 'axios';
import { useState, useEffect } from 'react';

const getAllUsers = async (url) => {
	const result = await axios.get(url);
	return result.data;
};

export const getAllUserApi = (url) => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(true);

	useEffect(() => {
		let isActive = true;
		try {
			async function fetchData() {
				const data = await getAllUsers(url);

				if (data && data.length > 0 && isActive) {
					setData(data);
					setIsError(false);
				}
			}
			fetchData();
		} catch (error) {
			setIsError(true);
		}
		return () => (isActive = false);
	}, []);

	return { data, isError };
};
