import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Transactions from '../../pages/Transactions'
import Pagination from './Pagination'
import { getTransactions } from '../../store/features/transaction/transactionSlice'

const TransactionPagination = () => {
	const { transaction, } = useSelector((state) => state
	)	
	const dispatch = useDispatch()
	
	const [currentPage, setCurrentPage] = useState(1)
	const [transPerPage] = useState(4)

	useEffect(() => {

		if (transaction.length <= 0) {
			dispatch(getTransactions())
		}		
	}, [dispatch, transaction.length])

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
