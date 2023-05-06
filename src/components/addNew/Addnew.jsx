import './addnew.scss';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Addnew = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleOnchange = (event) => {
		const nameInput = 'name';
		const emailInput = 'email';
		const { name, value } = event.target;

		if (name === nameInput) {
			setName(value);
		} else if (name === emailInput) {
			setEmail(value);
		}
	};

	const submitForm = (event) => {
		event.preventDefault();
		props.handleAddnewFn({ name, email });
	};

	return (
		<div className='addnew'>
			<label htmlFor='name'>Name:</label>
			<input
				type='text'
				id='name'
				name='name'
				value={name}
				onChange={handleOnchange}
			/>{' '}
			<br />
			<label htmlFor='email'>Email:</label>
			<input
				type='text'
				id='email'
				name='email'
				value={email}
				onChange={handleOnchange}
			/>{' '}
			<br />
			<input
				type='submit'
				value='Submit'
				className='submitBtn'
				onClick={submitForm}
			/>
		</div>
	);
};

export default Addnew;
