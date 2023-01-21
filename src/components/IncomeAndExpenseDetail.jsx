import React from 'react'
import { currencyFormat } from '../helpers'

const IncomeAndExpenseDetail = ( {
  heading,
	income,
	expense,	
}) => {
  return (
    <div>
      <h4>{ heading }</h4>
			<div className='inc-exp-sub'>
				<div>
					<p className='money plus'>
						GMD {income ? currencyFormat(income) : '0.00'}
					</p>
        </div>
        <div className='divider'></div>
				<div>
					<p className='money minus'>
						GMD {expense ? currencyFormat(expense) : '0.00'}
					</p>
				</div>
			</div>
		</div>
	)
}

export default IncomeAndExpenseDetail
