import './Nav.scss';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
	return (
		// 5ms55ss
		<div className='topnav'>
			<Link
				to='/'
				className='active'
			>
				Home
			</Link>
			<Link to='/users'>Users</Link>
			<Link to='/countdown'>Countdown</Link>
			<Link to='/about'>About</Link>
		</div>
	);
};

export default Nav;
