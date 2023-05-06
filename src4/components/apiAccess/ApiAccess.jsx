import { useState, useEffect } from 'react';
import * as axiosConfigs from '../../customize/axiosConfigs';
import './ApiAccess.css';

const url = 'https://jsonplaceholder.typicode.com/users';

//ApiAcess2
const ApiAccess = (props) => {
	const { data: users, isError } = axiosConfigs.getAllUserApi(url); //4ms06ss
	console.log(users);

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
					{users && users.length > 0 && renderList(users)}
				</tbody>
			</table>
		</>
	);
};

export default ApiAccess;
