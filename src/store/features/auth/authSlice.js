import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('authUser'))

const userSlice = createSlice({
	name: 'auth',
	initialState: user ? user : null,
	reducers: {
		setUser( state, action ) {
			return action.payload
		},
		setLogout( state, action ) {
			return action.payload
		},
	}
})

export const { setUser, setLogout } = userSlice.actions

export const setLogin = (userData) => {
	return (dispatch) => {
		dispatch(setUser(userData))
	}
}

export const setLoggedOut = () => {
	return (dispatch) => {
		dispatch(setUser(null))
	}
}

export default userSlice.reducer
