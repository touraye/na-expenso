import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../store/features/transaction/transactionSlice'
import { curr } from '../../helpers'
import { BarChart } from './Chart'

const IncomeExpenseBar = () => {
  const { transaction } = useSelector( ( state ) => state )
  const dispatch = useDispatch()

  useEffect(() => {
  

    dispatch(getTransactions)
  }, [ dispatch] )
  
  const incomeAndExpense = curr(transaction)

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

  return <BarChart chartData={chartData} />
}

export default IncomeExpenseBar