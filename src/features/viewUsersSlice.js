import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = 'https://jekalotest.herokuapp.com';

export const ViewUserListing = createAsyncThunk('user/userView', async () => {
	try {
		const response = await axios.get(`${BASE_URL}/api/users`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		toast.error(error.message);
	}
});

const userViewSlice = createSlice({
	name: 'userView',
	initialState: {
		isLoadinguser: false,
		usersList: null,
		error: '',
	},
	extraReducers: {
		[ViewUserListing.pending]: (state) => {
			state.error = '';
			state.isLoadinguser = true;
		},
		[ViewUserListing.fulfilled]: (state, action) => {
			state.isLoadinguser = false;
			if (action.payload.error === true) {
				toast.error(action.payload.message);
			} else {
				state.usersList = action.payload;
			}
		},
		[ViewUserListing.rejected]: (state, action) => {
			state.isLoadinguser = false;
			state.error = action.payload.message;
		},
	},
});

export default userViewSlice.reducer;
