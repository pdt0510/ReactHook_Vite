import * as axiosConfigs from '../../customize/axiosConfigs';
import './ApiAccess.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as routeSupp from '../../utilities/routeSupp';

//ApiAccess1
export const Userinfo = () => {
	const { id } = useParams(); //v31xx2
	return <h1>User of id: {id}</h1>;
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
							to={`/users/${item.id}`} //v31xx2
						>
							see detais
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
