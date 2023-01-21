import { useEffect, useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import AddTransaction from '../components/AddTransaction'
import { History } from '../components/History'
import {
	curr,
	currencyFormat,
	monthlyExpense,
	getMonthlyMinIncome,
	getMonthlyMinExpense,
	getMonthlyMaxIncome,
	getMonthlyMaxExpense,
	getMonthlyIncomeAverage,
	getMonthlyExpenseAverage,
	getMonthlyIncome,
	getMonthlyExpense,
	getYearlyIncome,
	getYearlyyExpense,
} from '../helpers'
import IncomeAndExpenseDetail from '../components/IncomeAndExpenseDetail'
import { addTransaction, getTransactions } from '../store/features/transaction/transactionSlice'
import { useDispatch, useSelector } from 'react-redux'
const Dashboard = () => {
	const { transaction } = useSelector( ( state ) => state )
	console.log(transaction[0]);
	const dispatch = useDispatch()	
	const [ modal, setModal ] = useState( false )	
		
	const historyData = transaction[transaction.length - 1]	
	
	useEffect(() => {		
		
		dispatch( getTransactions())
	}, [ dispatch ] )
	
	const onAdd = ( data ) => {
		dispatch(addTransaction(data))						
	}

	monthlyExpense(transaction)
	const totalIncome = curr(transaction)[0]
	const totalBalance = curr(transaction)[1]
	const totalExpense = curr( transaction )[ 2 ]		

	const monthlyMinIncome =  getMonthlyMinIncome()
	const monthlyMinExpense = getMonthlyMinExpense()

	const monthlyMaxIncome = getMonthlyMaxIncome()
	const monthlyMaxExpense = getMonthlyMaxExpense()

	const monthlyIncomeAverage = getMonthlyIncomeAverage()
	const monthlyExpenseAverage = getMonthlyExpenseAverage()

	const monthlyIncome = getMonthlyIncome()
	const monthlyExpenses = getMonthlyExpense()

	const yearlyIncome = getYearlyIncome(transaction)
	const yearlyExpenses = getYearlyyExpense(transaction)
	
	  
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
				<IncomeAndExpenseDetail
					heading='Min Monthly Transaction'
					income={monthlyMinIncome}
					expense={monthlyMinExpense}
				/>
			</div>
			<div className='dashboard-stats'>
				<IncomeAndExpenseDetail
					heading='Max Monthly Transaction'
					income={monthlyMaxIncome}
					expense={monthlyMaxExpense}
				/>
			</div>
			<div className='dashboard-stats'>
				<IncomeAndExpenseDetail
					heading='Average Monthly Transaction'
					income={monthlyIncomeAverage}
					expense={monthlyExpenseAverage}
				/>
			</div>
			<div className='dashboard-stats'>				
				<IncomeAndExpenseDetail
					heading='Monthly Transaction'
					income={monthlyIncome}
					expense={monthlyExpenses}
				/>
			</div>
			<div className='dashboard-stats'>				
				<IncomeAndExpenseDetail
					heading='Yearly Transaction'
					income={yearlyIncome}
					expense={yearlyExpenses}
				/>
			</div>
			{modal && (
				<AddTransaction modal={modal} setModal={setModal} onAddTransaction={onAdd} />
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
