import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FaPlus} from 'react-icons/fa'
import AddTransaction from '../components/AddTransaction'
import { History } from '../components/History'
import { getTransactions } from '../store/features/transaction/transactionSlice'
import { curr, currencyFormat } from '../helpers'
const Dashboard = () => {
	const [ modal, setModal ] = useState( false )	
	const { transactions } = useSelector((state) => state.transaction) 	
	const dispatch = useDispatch()
	const historyData = transactions[ 0 ]	
	
	useEffect( () => {	
		dispatch(getTransactions())
	}, [ dispatch ] )

	const totalIncome = curr(transactions)[0]
	const totalBalance = curr(transactions)[1]
	const totalExpense = curr( transactions )[ 2 ]		
	
  
	return (
		<div className='dashboard'>
			<h4 className='balance-text'>your balance</h4>
			<p className='balance'>
				GMD {totalBalance ? currencyFormat(totalBalance) : '0.00'}
			</p>
			<div className='inc-exp-container'>
				<div>
					<h4>Income</h4>
					<p className='money plus'>
						GMD {totalIncome ? currencyFormat(totalIncome) : '0.00'}
					</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p className='money minus'>
						GMD {totalExpense ? currencyFormat(totalExpense) : '0.00'}
					</p>
				</div>
			</div>
			<History transaction={historyData} />
			<div className='dashboard-stats'>
				<h4>Min Monthly Transaction</h4>
				<p>GMD 300.00</p>
			</div>
			<div className='dashboard-stats'>
				<h4>Max Monthly Transaction</h4>
				<p>GMD 1,200.00</p>
			</div>
			<div className='dashboard-stats'>
				<h4>Average Monthly Transaction</h4>
				<p>GMD 550.00</p>
			</div>
			<div className='dashboard-stats'>
				<h4>Monthly Transaction</h4>
				<p>GMD 1,200.00</p>
			</div>
			<div className='dashboard-stats'>
				<h4>Yearly Monthly Transaction</h4>
				<p>GMD 1,200.00</p>
			</div>
			{modal && (
				<AddTransaction modal={modal} setModal={setModal} data={transactions} />
			)}
			{modal ? (
				''
			) : (
				<button
					onClick={() => setModal(!modal)}
					className='btn plus-btn btn-rounded'>
					<FaPlus />
				</button>
			)}
		</div>
	)
}

export default Dashboard
