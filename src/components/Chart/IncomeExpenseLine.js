import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../store/features/transaction/transactionSlice'
import {curr} from '../../helpers'
import LineChart from './LineChart'

const IncomeExpenseLine = () => {
	const { transactions} = useSelector(
		(state) => state.transaction
	)
	console.log('transactions', transactions)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTransactions)
  }, [ dispatch ] )
  
  const incomeAndExpense = curr(transactions)

	const chartData = {
		labels: ['income', 'balance', 'expense'],
		datasets: [
			{
				label: 'Income And Expense',
				data: incomeAndExpense?.map((trans) => trans),
				backgroundColor: [
					'rgba(0, 128, 0, 0.658)',
					'rgba(112, 134, 146, 0.651)',
					'rgba(138, 8, 8, 0.651)',
				],
				borderColor: '#ccc',
				borderWidth: 2,
			},
		],
	}	

	return <LineChart chartData={chartData} />
}

export default IncomeExpenseLine
