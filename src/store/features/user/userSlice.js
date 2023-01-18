import { createSlice } from '@reduxjs/toolkit'
import {users} from '../../../data'

const initialState = {
	users: users,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state = action.payload
		},
		getUsers(state, action) {
			return state
		},
		updateUser(state, action) {},
		deleteUser(){},
	},
})

export const { setUser, getUsers, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer
