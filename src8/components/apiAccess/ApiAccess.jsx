import * as axiosConfigs from '../../customize/axiosConfigs';
import './ApiAccess.css';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import * as routeSupp from '../../utilities/routeSupp';
import { useState, useEffect } from 'react';

//ApiAccess2
export const Userinfo = () => {
	const { id } = useParams();
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const navigate = useNavigate(); //ok, 4ms03ss, v32xx1

	const navByComp = () => {
		console.log('navByComp');
		setShouldRedirect(true);

		//no effected, 4ms03ss
		// return (
		// 	<Navigate
		// 		replace
		// 		to='/users'
		// 	/>
		// );
	};

	// 4ms03ss
	const navByHook = () => {
		console.log('navByHook');
		setShouldRedirect(true);
	};

	useEffect(() => {
		if (shouldRedirect) {
			// const navigate = useNavigate(); //err, v32xx1
			navigate('/users');
		}
	});

	return (
		<>
			<h1>User of id: {id}</h1>;
			<h1
				onClick={navByComp}
				style={{ cursor: 'pointer' }}
			>
				-- Back 1 --
				{shouldRedirect && (
					<Navigate
						replace
						to='/users' //4ms03ss
					/>
				)}
			</h1>
			<h1
				onClick={navByHook}
				style={{ cursor: 'pointer' }}
			>
				-- Back 2 --
			</h1>
		</>
	);
};

const url = 'https://jsonplaceholder.typicode.com/users';
const ApiAccess = (props) => {
	const { data: users, isError } = axiosConfigs.getAllUserApi(url);

	const renderList = (list) => {
		return list.map((item) => {
			return (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>
						<Link
							key={item.id}
							to={`/users/${item.id}`}
						>
							See details
						</Link>
					</td>
				</tr>
			);
		});
	};

	return (
		<>
			<h1>Users info</h1>
			<table id='customers'>
				<tbody>
					<tr>
						<th>No.</th>
						<th>Name</th>
						<th>Email</th>
						<th>Details</th>
					</tr>
					{users && users.length > 0 && renderList(users)}
				</tbody>
			</table>
		</>
	);
};

export default ApiAccess;
