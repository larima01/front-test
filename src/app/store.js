import { configureStore } from '@reduxjs/toolkit';

// Reducers Import
import addNewReducer from '../features/addUserSlice';
import userViewReducer from '../features/viewUsersSlice';

const store = configureStore({
	reducer: {
		newUser: addNewReducer,
		users: userViewReducer,
	},
});

export default store;
