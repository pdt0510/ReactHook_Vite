import * as axiosConfigs from '../../customize/axiosConfigs';
import './ApiAccess.css';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Addnew from './../addNew/Addnew';

export const Userinfo = () => {
	const { id } = useParams();
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const navigate = useNavigate();

	const navByHook = () => {
		setShouldRedirect(true);
	};

	useEffect(() => {
		if (shouldRedirect) {
			navigate('/users');
		}
	});

	return (
		<>
			<h1>User of id: {id}</h1>;
			<h1
				onClick={navByHook}
				style={{ cursor: 'pointer' }}
			>
				-- Back --
			</h1>
		</>
	);
};

const url = 'https://jsonplaceholder.typicode.com/users';
const ApiAccess = (props) => {
	let { data, isError } = axiosConfigs.getAllUserApi(url);
	const [addnew, setAddnew] = useState(false);
	const [newData, setNewData] = useState([]);

	// 35ms47ss
	if (newData.length === 0) {
		if (data.length) {
			setNewData(data);
		}
	}

	const renderList = (list) => {
		return list.map((item) => {
			return (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>
						<Link to={`/users/${item.id}`}>See details</Link>
					</td>
					<td
						style={{ cursor: 'pointer' }}
						onClick={() => handleDelFn(item.id)}
					>
						Delete
					</td>
				</tr>
			);
		});
	};

	const toggleAddnew = () => {
		setAddnew(!addnew);
	};

	// 35ms47ss
	const handleDelFn = (id) => {
		setNewData(newData.filter((item) => item.id !== id));
	};

	// 35ms47ss
	const handleAddnewFn = (data) => {
		const newItem = {
			id: newData[newData.length - 1].id + 1,
			...data,
		};

		// const newData2 = newData.push(newItem); //err, v36xx1
		// console.log('newData2 ---', newData2);
		// setNewData(newData2);

		setNewData([...newData, newItem]); //OK, v36xx1
		toggleAddnew();
	};

	const renderForm = () => {
		return (
			<>
				{addnew && (
					<>
						<Addnew handleAddnewFn={handleAddnewFn} />
						<button onClick={toggleAddnew}>Close</button>
					</>
				)}
				{!addnew && <button onClick={toggleAddnew}>+ Add new</button>}
			</>
		);
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
						<th>Delete</th>
					</tr>
					{newData && newData.length > 0 && renderList(newData)}
				</tbody>
			</table>
			{renderForm()}
		</>
	);
};

export default ApiAccess;
