import { createSlice } from '@reduxjs/toolkit'
import {users} from '../../../data'

const initialState = users


const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser(state, action) {
			state = action.payload
		},
		getUsers(state, action) {
			return state
		},
		appendUser(state, action) {
			state.push(action.payload)
		},
		updateUser( state, action ) {
			const id = action.payload.id
			const updateUser = action.payload
			return state.map((user) => user.id !== id ? user : updateUser)
		},
		deleteUser( state, action ) {
			const id = action.payload
			const updatedUser = state.filter( user => user.id !== id )
			return state = updatedUser
		},
	},
})

export const { setUser, getUsers,appendUser, updateUser, deleteUser } = userSlice.actions

export const createUser = ( data ) => {	
	return dispatch => {
		dispatch(appendUser(data))
	}
}

export const removeUser = ( id ) => {	
	return dispatch => {
		dispatch(deleteUser(id))
	}
}

export const editUser = ( data )=>{
	return dispatch => {
		dispatch(updateUser(data))
	}
}

export default userSlice.reducer
