import './Search.scss';
import { useState, useEffect } from 'react';

const Search = (props) => {
	const { todoList } = props;
	const [address, setAddress] = useState('');
	const [todos, setTodos] = useState(todoList);

	const handleClick = () => {
		if (address) {
			const lastEle = todos[todos.length - 1];
			const id = lastEle ? lastEle.id + 1 : 1;
			const newEle = { id: id, name: address };

			todos.push(newEle);
			setTodos([...todos]);
			setAddress('');
		}
	};

	const onChangeHandle = (e) => {
		setAddress(e.target.value);
	};

	const renderTodoList = (list) => {
		return list.map((item) => {
			return (
				<li
					key={item.id}
					className='todo-item'
					onClick={() => handlDeleteById(item.id)}
				>
					{item.id} - {item.name}
				</li>
			);
		});
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	const handlDeleteById = (id) => {
		const newList = todos.filter((item) => item.id !== id);
		setTodos(newList);
	};

	useEffect(() => {
		console.log('useEffect 1');
	}, []);

	useEffect(() => {
		console.log('useEffect 2');
	}, [address]);

	return (
		<>
			<input
				type='text'
				value={address}
				onChange={onChangeHandle}
				onKeyDown={handleKeyDown}
			/>
			<button
				type='button'
				className='Search'
				onClick={handleClick}
			>
				Click me!
			</button>
			<div className='todos'>{todos && renderTodoList(todos)}</div>
		</>
	);
};

export default Search;
