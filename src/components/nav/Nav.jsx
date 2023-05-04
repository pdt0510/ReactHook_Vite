import './Nav.scss';
import { Link, useLocation } from 'react-router-dom';
import * as routeSupp from './../../utilities/routeSupp';

const Nav = () => {
	const renderLinks = (list) => {
		const location = useLocation();
		return list.map((item, idx) => {
			const active = location.pathname === item.path ? 'active' : '';

			return (
				<Link
					key={idx}
					to={item.path}
					className={active}
				>
					{item.name}
				</Link>
			);
		});
	};

	return (
		<div className='topnav'>{routeSupp.routes.length > 0 && renderLinks(routeSupp.routes)}</div>
	);
};

export default Nav;
