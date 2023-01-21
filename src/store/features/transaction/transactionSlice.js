import { createSlice } from '@reduxjs/toolkit'
import {transactions} from '../../../data'

const initialState = transactions


const transactionSlice = createSlice({
	name: 'transaction',
	initialState,
	reducers: {
		setTransaction(state, action) {
			state = action.payload
		},
		getTransactions(state, action) {
			return state
		},
		createTransaction(state, action) {
			state.push(action.payload)
		},
		updateTransaction( state, action ) {
			const id = action.payload.id
			const updateTransaction = action.payload
			return state.map((transaction) => (transaction.id !== id ? transaction : updateTransaction))
		},
		deleteTransaction( state, action ) {
			const id = action.payload
			const updatedTransaction = state.filter((transaction) => transaction.id !== id)
			return (state = updatedTransaction)
		},
	},
})

export const {
	setTransaction,
	getTransactions,
	createTransaction,
	updateTransaction,
	deleteTransaction,
} = transactionSlice.actions

export const addTransaction = ( data ) => {
	return dispatch => {
		dispatch( createTransaction(data))
	}
}

export const removeTransaction = ( id ) => {
	return dispatch => {
		dispatch(deleteTransaction(id))
	}
}

export const editTransaction = ( data ) => {
	return dispatch => {
		dispatch(updateTransaction(data))
	}
}

export default transactionSlice.reducer
