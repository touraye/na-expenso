let currentMonthTransactions

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
  const monthlyTrans = []
  const currentMonth = new Date().getMonth() + 1
  const formatCurrentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth
  const getTransactionsOfTheMonth = transaction.filter(
		(trans) => trans.createdAt.substring(5, 7) === formatCurrentMonth
  )
  currentMonthTransactions = getTransactionsOfTheMonth
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

export const getMonthlyMinIncome = () => {
  const getIncomes = currentMonthTransactions.filter(
    (trans) => trans.type === 'income'
    )
    let minValue = getIncomes.length > 0 ? 100000 : 0
	for (let i = 0; i < getIncomes.length; i++) {
    if ( getIncomes[ i ].amount < minValue ) {
      minValue = getIncomes[ i ].amount    
		}
	}
	return minValue
}

export const getMonthlyMinExpense = () => {	
	const getExpenses = currentMonthTransactions.filter(
		(trans) => trans.type === 'expense'
  )
  let minValue = getExpenses.length > 0 ? 100000 : 0
	for (let i = 0; i < getExpenses.length; i++) {
		if (getExpenses[i].amount < minValue) {
			minValue = getExpenses[i].amount
		}
	}
	return minValue
}

export const getMonthlyMaxIncome = () => {
	let maxValue = 0
	const getIncomes = currentMonthTransactions.filter(
		(trans) => trans.type === 'income'
  )  
	for (let i = 0; i < getIncomes.length; i++) {
		if (getIncomes[i].amount > maxValue) {
			maxValue = getIncomes[i].amount
		}
	}
	return maxValue
}

export const getMonthlyMaxExpense = () => {
	let maxValue = 0
	const getExpenses = currentMonthTransactions.filter(
		(trans) => trans.type === 'expense'
	)
	for (let i = 0; i < getExpenses.length; i++) {
		if (getExpenses[i].amount > maxValue) {
			maxValue = getExpenses[i].amount
		}
	}
	return maxValue
}


export const getMonthlyIncomeAverage = () => {
  let averageValue = 0
  const getIncome = currentMonthTransactions.filter(
		(trans) => trans.type === 'income'
	)
  for ( let i = 1; i < getIncome.length; i++ ){
    averageValue += getIncome[i].amount
  }

  return averageValue / getIncome.length 
}

export const getMonthlyExpenseAverage = () => {
	let averageValue = 0
	const getExpenses = currentMonthTransactions.filter(
		(trans) => trans.type === 'expense'
	)
	for (let i = 1; i < getExpenses.length; i++) {
		averageValue += getExpenses[i].amount
	}

	return averageValue / getExpenses.length
}

export const getMonthlyIncome = () => {
	let monthlyValue = 0
	const getIncome = currentMonthTransactions.filter(
		(trans) => trans.type === 'income'
	)
	for (let i = 0; i < getIncome.length; i++) {
		monthlyValue += getIncome[i].amount
	}

	return monthlyValue
}

export const getMonthlyExpense = () => {
	let monthlyValue = 0
	const getExpense = currentMonthTransactions.filter(
		(trans) => trans.type === 'expense'
	)
	for (let i = 0; i < getExpense.length; i++) {
		monthlyValue += getExpense[i].amount
	}

	return monthlyValue
}

export const getYearlyIncome = (transaction) => {
  const currentYear = new Date().getFullYear() 
  const getTransactionsOfTheYear = transaction.filter(
		(trans) => trans.createdAt.substring(0, 4) !== currentYear
	)
	let yearlyValue = 0
	const getIncome = getTransactionsOfTheYear.filter(
		(trans) => trans.type === 'income'
	)
	for (let i = 0; i < getIncome.length; i++) {
		yearlyValue += getIncome[i].amount
	}

	return yearlyValue
}

export const getYearlyyExpense = (transaction) => {
  const currentYear = new Date().getFullYear()
	const getTransactionsOfTheYear = transaction.filter(
		(trans) => trans.createdAt.substring(0, 4) !== currentYear
	)
	let monthlyValue = 0
	const getExpense = getTransactionsOfTheYear.filter(
		(trans) => trans.type === 'expense'
	)
	for (let i = 0; i < getExpense.length; i++) {
		monthlyValue += getExpense[i].amount
	}

	return monthlyValue
}
  