import axios from 'axios';
const BASE_URL = 'https://jekalotest.herokuapp.com';

// Delete User Api Logic
export const DeleteApi = async (username) => {
	const responseapi = await axios.delete(`${BASE_URL}/api/${username}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return responseapi;
};

// Add User Api Logic
export const AddUserApi = async (body) => {
	const responseapi = await axios.post(`${BASE_URL}/api/user`, body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return responseapi;
};
