import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ViewUserListing } from '../../features/viewUsersSlice';
import Spinner from '../../components/Spinner/Spinner.component';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { DeleteApi } from '../../apis/api';
import './ViewUser.styles.css';

const ViewUser = () => {
	const dispatch = useDispatch();

	const { isLoadinguser, usersList } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(ViewUserListing());
	}, []);

	const buttonClick = async (username) => {
		const response = await DeleteApi(username);
		if (response.status === 203) {
			toast.error(response.data.message);
		} else {
			toast.success(response.data.message);
			dispatch(ViewUserListing());
		}
	};

	const SingleView =
		isLoadinguser && !usersList?.data ? (
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
				}}
			>
				<Spinner />
			</div>
		) : (
			usersList?.data?.map((item, index) => (
				<tr key={index}>
					<td
						data-label="initials"
						style={{
							backgroundColor: '#11468F',
							color: '#fff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '30px',
							width: '30px',
							borderRadius: '15px',
							margin: '5px 3px',
						}}
					>
						{item?.name_prefix}
					</td>
					<td>{item?.username}</td>
					<td data-label="First Name">{`${item?.first_name} ${item?.last_name}`}</td>

					<td data-label="date of Birth">
						{moment(item?.date_of_birth).format('L')}
					</td>
					<td data-label="Action">
						<button
							className="viewUser__update"
							onClick={() => buttonClick(item?.username)}
						>
							<AiOutlineDelete className="viewUser__icon" />
						</button>
					</td>
				</tr>
			))
		);

	return (
		<div className="viewUser">
			<table>
				<thead>
					<tr style={{ width: '100%' }}>
						<th>Users</th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>{SingleView}</tbody>
			</table>
		</div>
	);
};

export default ViewUser;
