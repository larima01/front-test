import { createSlice } from '@reduxjs/toolkit';

const newUserSlice = createSlice({
	name: 'addNew',
	initialState: {
		isLoadingAdd: false,
		error: '',
	},
	reducers: {
		addUserPending: (state) => {
			state.error = '';
			state.isLoadingAdd = true;
		},
		addUserSuccess: (state) => {
			state.isLoadingAdd = false;
		},
		addUserFailed: (state, { payload }) => {
			state.isLoadingAdd = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = newUserSlice;
export const { addUserPending, addUserSuccess, addUserFailed } = actions;
export default reducer;
