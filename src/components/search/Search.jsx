import './Search.scss';
import { useState, useEffect, forwardRef } from 'react';
import moment from 'moment';
import * as axiosConfigs from '../../customize/axiosConfigs';

// Search2,
const Search = (props) => {
	const [query, setQuery] = useState('');
	const [videos, setVideos] = useState([]);

	const handleOnchange = (event) => {
		setQuery(event.target.value);
	};

	const handleGetValue = async (event) => {
		if (event.keyCode == 13) {
			const data = await axiosConfigs.getYoutubeVideosApi(query); //v40xx1
			const videoList = data.map((item) => {
				const { videoId } = item.id;
				const { channelTitle, description, publishedAt, title } = item.snippet;
				return {
					videoId,
					channelTitle,
					description,
					publishedAt,
					title,
				};
			});
			setVideos(videoList);
		}
	};

	const renderVideos = (list) => {
		const format = 'DD-MM-YYYY HH:mm A';
		return list.map((video) => {
			return (
				<div
					key={video.videoId}
					className='video-item'
				>
					<div className='yt-left'>
						<iframe
							width='560'
							height='315'
							src={`https://www.youtube.com/embed/${video.videoId}`} //57ms43ss
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
							className='yt-iframe'
						></iframe>
					</div>
					<div className='yt-right'>
						<div className='right-title'>{video.title}</div>
						<div className='right-publishedAt'>{moment(video.publishedAt).format(format)}</div>
						<div className='right-author'>
							<i className='avatar'></i> {video.channelTitle}
						</div>
						<div className='right-description'>{video.description}</div>
					</div>
				</div>
			);
		});
	};

	console.log('Search ---');

	return (
		<div className='search-content'>
			<input
				type='search'
				id='searchFor'
				placeholder='Search. . . '
				value={query}
				name='inSearch'
				onChange={handleOnchange}
				onKeyDown={handleGetValue}
			/>

			<div className='yt-videos'>{videos && videos.length > 0 && renderVideos(videos)}</div>
		</div>
	);
};

export default Search;
