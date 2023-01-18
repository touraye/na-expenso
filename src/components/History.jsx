import { currencyFormat } from '../helpers'
import {FaBusinessTime} from 'react-icons/fa'
export const History = ( { transaction } ) => {
  // const trans = transaction?.map( trans => trans )    
  // const lastTran = trans[ 0 ]
  
  return (
		<div className='history'>
			<h3>latest transaction</h3>
			<div className='history-list'>
				<div className='flex-1'>
					<p className='sub-text'>{transaction?.name}</p>
					<p
						className={`${
							transaction?.type === 'income' ? 'income' : 'expense'
						}`}>
						GMD {currencyFormat(transaction?.amount)}
					</p>
				</div>
				<div>
					<p className='sub-text'>
						{/* {transaction?.type} */}
						<FaBusinessTime />
					</p>
					<p className='sub-text'>
						{new Date(transaction?.createdAt).toLocaleDateString('en-US')}
					</p>
				</div>
			</div>
		</div>
	)
}
