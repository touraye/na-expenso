import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getTransactions, deleteTransaction } from '../store/features/transaction/transactionSlice'
import Transaction from '../components/Transaction'

const Transactions = ({transData}) => {     
	const dispatch = useDispatch()		

  useEffect(() => {
		

		dispatch( getTransactions() )
	}, [ dispatch] ) 	

	
  const onDelete = ( id ) => {    
    dispatch( deleteTransaction( id ) )
    dispatch( getTransactions() )
  }
  
  
  return (
		<ul className='list'>
			{transData.length > 0 ? (
				transData.map((tran) => (
					<Transaction key={tran.id} tran={tran} onDelete={onDelete} />
				))
			) : (
				<p>No transaction found</p>
			)}
		</ul>
	)
}

export default Transactions
