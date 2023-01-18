import { transactions } from "./data"

export const curr = ( transaction ) => { 
  const incomeAndExpense = []
  const income = transaction
		?.filter((trans) => trans.type === 'income')
		.map((trans) => trans.amount)
  const expense = transaction
		?.filter((trans) => trans.type === 'expense')
		.map((trans) => trans.amount)
  const currIncome = income.length > 0 && income.reduce((acc, cur) => acc + cur)
  const currExpense =
		expense.length > 0 && expense.reduce((acc, cur) => acc + cur)
  const balance = currIncome - currExpense
  incomeAndExpense.push(currIncome)
  incomeAndExpense.push( balance )
  incomeAndExpense.push(currExpense)  
  return incomeAndExpense
}

export const monthlyExpense = ( transaction ) => {
  console.log('@hp', transaction);
  const monthlyTrans = []
  const currentMonth = new Date().getMonth() + 1
  const formatCurrentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth
  const getTransactionsOfTheMonth = transaction.filter(
		(trans) => trans.createdAt.substring(5, 7) === formatCurrentMonth
  )

  let monthlyIncomeTransaction = getTransactionsOfTheMonth
		.filter((trans) => trans.type === 'income')
    .map( ( trans ) => trans.amount )
  
  let monthlyExpenseTransaction = getTransactionsOfTheMonth.filter(
    (trans) => trans.type === 'expense'
  ).map((trans) => trans.amount)
  
  const income =
    monthlyIncomeTransaction.length && monthlyIncomeTransaction.reduce( ( acc, cur ) => acc + cur )
  const expense =
			monthlyExpenseTransaction.length &&
			monthlyExpenseTransaction.reduce((acc, cur) => acc + cur)
  monthlyTrans.push( income )
  monthlyTrans.push(expense)
  
  return monthlyTrans
}

export	const currencyFormat = (currency) => {
		let unFormated = currency?.toLocaleString('en-GB', {
			style: 'currency',
			currency: 'ZAR',
			minimumFractionDigits: 2,
		})
		return unFormated?.split('ZAR')
}	
  
export const addTransaction = ( data ) => {
  console.log('data', data, 'transactions', transactions)
  return {...transactions, data}
}