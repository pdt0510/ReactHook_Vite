import { useState, useEffect } from 'react';
import axios from 'axios';
import './ApiAccess.css';

const getApi = async () => {
	const result = await axios.get('https://jsonplaceholder.typicode.com/users');
	return result.data;
};
const data = await getApi();

//ApiAcess1, v23xx1
const ApiAccess = (props) => {
	const [users, setUsers] = useState(data);

	const renderList = (list) => {
		return list.map((item) => {
			return (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.email}</td>
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
					</tr>
					{users && users.length > 0 ? renderList(users) : <span colspan='12'>No data</span>}
				</tbody>
			</table>
		</>
	);
};

export default ApiAccess;
