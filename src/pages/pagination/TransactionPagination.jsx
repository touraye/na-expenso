import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Transactions from '../../pages/Transactions'
import Pagination from './Pagination'
import { getTransactions } from '../../store/features/transaction/transactionSlice'

const TransactionPagination = () => {
	const { transactions, } = useSelector((state) => state.transaction
	)
	console.log('transactions', transactions)
	const dispatch = useDispatch()

	const [transaction, setTransaction] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [transPerPage] = useState(5)

	useEffect(() => {

		if (transaction.length <= 0) {
			dispatch(getTransactions())
		}
		setTransaction(transactions)
	}, [dispatch, transactions, transaction.length])

	// Get current transaction
	const indexOfLastTrans = currentPage * transPerPage
	const indexOfFirstTrans = indexOfLastTrans - transPerPage
	const currentTrans = transaction.slice(indexOfFirstTrans, indexOfLastTrans)

	// Change page
	const paginateFront = () => setCurrentPage(currentPage + 1)
	const paginateBack = () => setCurrentPage(currentPage - 1)

	return (
		<div>
			<Transactions transData={currentTrans} />
			<Pagination
				dataPerPage={transPerPage}
				totalPosts={transaction.length}
				paginateBack={paginateBack}
				paginateFront={paginateFront}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default TransactionPagination
