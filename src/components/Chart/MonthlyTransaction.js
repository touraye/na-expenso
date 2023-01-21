import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTransactions } from '../../store/features/transaction/transactionSlice'

import { monthlyExpense } from '../../helpers'
import { BarChart } from './Chart'

const MonthlyTransaction = () => {
  const { transaction } = useSelector( ( state ) => state )
  const dispatch = useDispatch( )
  
  useEffect( () => {    
    dispatch(getTransactions())
  }, [dispatch] )
  
  
  
  const transactionOfTheMonth = monthlyExpense( transaction )
  

    const chartData = {
			labels: ['income', 'expense'],
			datasets: [
				{
					label: 'Monthly Income And Expense',
					data: transactionOfTheMonth?.map((trans) => trans),
					backgroundColor: [
						'rgba(0, 128, 0, 0.658)',				
						'rgba(138, 8, 8, 0.651)',
					],
					borderColor: '#ccc',
					borderWidth: 2,
				},
			],
		}
  
  return <BarChart chartData={chartData} />
}

export default MonthlyTransaction
