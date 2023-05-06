import axios from 'axios';
import { useState, useEffect } from 'react';

const delaySeconds = 2;

const getAllUsersApi = async (url, ctrlOpt) => {
	const result = await axios.get(url, ctrlOpt);
	return result.data;
};


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

				const data = await getAllUsersApi(url, ctrlOpt)
					.then((data) => {
						return data;
					})
					.catch((error) => {
						console.log('getAllUserFn request:', error.message);
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
			console.log('getAllUserFn error ---', error);
			setError(true);
		}
		return () => (isActive = false);
	}, []);

	return { data, isError };
};

export const getYoutubeVideosApi = async (query) => {
	const GG_API_KEY = 'AIzaSyDhiZazFFe4zeGUG_nz0Y5sGN3JRwfMu6w';
	const url = `https://www.googleapis.com/youtube/v3/search`;

	const res = await axios({
		method: 'GET',
		url,
		params: {
			part: 'snippet',
			maxResults: 25,
			key: GG_API_KEY,
			q: query,
			type: 'video',
		},
	});

	return res.data.items.length > 0 ? res.data.items : [];
};
