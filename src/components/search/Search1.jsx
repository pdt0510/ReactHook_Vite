import './Search.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

// Search1
const Search = (props) => {
	const [query, setQuery] = useState('');
	const [videos, setVideos] = useState([]);

	const handleOnchange = (event) => {
		setQuery(event.target.value);
	};

	const handleGetValue = async (event) => {
		if (event.keyCode == 13) {
			const GG_API_KEY = 'AIzaSyDhiZazFFe4zeGUG_nz0Y5sGN3JRwfMu6w'; //from app in ...271@..
			const url = `https://www.googleapis.com/youtube/v3/search`;

			// const res = await axios.get(`${url}?q=${query}&key=${GG_API_KEY}`); // 45ms27ss

			// 46ms33ss
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

			if (res && res.data.items.length > 0) {
				const { items } = res.data;
				const videoList = items.map((item) => {
					const { videoId } = item.id; //57ms43ss
					const { channelTitle, description, publishedAt, title } = item.snippet;
					return {
						videoId,
						channelTitle,
						description,
						publishedAt,
						title,
					};
				});

				if (videoList && videoList.length) {
					setVideos(videoList);
				}
			}
		}
	};

	const renderVideos = (list) => {
		return list.map((video) => {
			return (
				<div className='yt-videos'>
					<div className='video-item'>
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
				</div>
			);
		});
	};

	const format = 'DD-MM-YYYY HH:mm A'; //has no A = 24hs
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

			{/* 23ms23ss */}
			{/* <div className='yt-videos'>
				<div className='video-item'>
					<div className='yt-left'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/0PRx82do0zw'
							title='YouTube video player'
							// frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
							className='yt-iframe'
						></iframe>
					</div>
					<div className='yt-right'>
						<div className='right-title'>
							#21 useCallback Hook - Nhớ Function Để Truyền Xuống Children Trong React Hook
						</div>
						<div className='right-publishedAt'>{moment(new Date()).format(format)}</div>
						<div className='right-author'>
							<i className='avatar'></i> Hỏi Dân IT
						</div>
						<div className='right-description'>
							Trong video này, chúng ta sẽ cùng nhau học cách sử dụng useCallback Hook của React.JS. Đây là
							video trong khóa học \"React...
						</div>
					</div>
				</div>
			</div> */}

			{videos && videos.length > 0 && renderVideos(videos)}
		</div>
	);
};

export default Search;
