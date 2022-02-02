import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AddUserApi } from '../../apis/api';
import { ViewUserListing } from '../../features/viewUsersSlice';
import {
	addUserPending,
	addUserSuccess,
	addUserFailed,
} from '../../features/addUserSlice';
import Spinner from '../Spinner/Spinner.component';
import './NewUser.styles.css';

const NewUser = () => {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUsername] = useState('');
	const [date, setDate] = useState('');
	const { isLoadingAdd } = useSelector((state) => state.newUser);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = JSON.stringify({
			first_name: firstName,
			last_name: lastName,
			username: userName,
			date_of_birth: date,
		});
		dispatch(addUserPending());
		const response = await AddUserApi(body);
		if (response.status === 203) {
			dispatch(addUserFailed());
			toast.error(response.data.message);
		} else {
			dispatch(addUserSuccess());
			dispatch(ViewUserListing());
			toast.success(response.data.message);
			setFirstName('');
			setLastName('');
			setUsername('');
			setDate('');
		}
	};
	return (
		<div className="NewUser">
			<div className="NewUser__left">
				<div className="NewUser__content">
					<label htmlFor="firstname">First name</label>
					<input
						type="text"
						id="firstname"
						placeholder="First name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="NewUser__content">
					<label htmlFor="lastname">Last name</label>
					<input
						type="text"
						id="lastname"
						placeholder="Last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="NewUser__content">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="Username"
						value={userName}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="NewUser__content">
					<label htmlFor="dob">Date of Birth</label>
					<input
						type="date"
						id="dob"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
			</div>
			<div className="NewUser__right">
				{isLoadingAdd ? (
					<Spinner />
				) : (
					<button onClick={(e) => handleSubmit(e)}>Submit</button>
				)}
			</div>
		</div>
	);
};

export default NewUser;
