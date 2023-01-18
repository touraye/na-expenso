import { createSlice } from '@reduxjs/toolkit'
import {transactions} from '../../../data'

const initialState = {
	transactions: transactions,
}


const transactionSlice = createSlice({
	name: 'transaction',
	initialState,
	reducers: {
		setTransaction(state, action) {},
		getTransactions(state, action) {
			return state
		},
		createTransaction( state, action ) {
			return state.push(action.payload)
		},
		updateTransaction(state, action) {},
		deleteTransaction(){},
	},
})

export const {
	setTransaction,
	getTransactions,
	createTransaction,
	updateTransaction,
	deleteTransaction,
} = transactionSlice.actions

export default transactionSlice.reducer
