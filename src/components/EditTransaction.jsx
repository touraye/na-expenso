import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import {getTransactions, updateTransaction} from '../store/features/transaction/transactionSlice'

const EditTransaction = ( { transaction, handleShowEditForm } ) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
		const [name, setName] = useState(transaction.name)
		const [type, setType] = useState(transaction.type)
		const [amount, setAmount] = useState(transaction.amount)

		const onSubmit = (e) => {
      e.preventDefault()
      
      if ( name.length === 0 || amount <= 0 ) {
        return alert('Please prodive a name and amount most be morethan zero')
      }

      if (type.length === 0) {
        return alert('Please select type')
			}
			
			const createdAt = new Date().toISOString().substring(0, 10)     

      dispatch(
				updateTransaction({
					id: transaction.id,
					name,
					type,
					amount: Number(amount),
					createdAt,
				})
			)							
      handleShowEditForm()
		}
	
  return (
		<form className='form transaction-form modal' onSubmit={onSubmit}>
			<div className='close-btn-container'>
				<FaTimes className='close-btn' onClick={() => handleShowEditForm()} />
			</div>
			<div className='form-control'>
				<label htmlFor='text'>Name</label>
				<input
					type='text'
					placeholder='Enter name...'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div className='form-control'>
				<label htmlFor='text'>Transaction Type</label>
				<select
					name='type'
					value={type}
					onChange={(e) => setType(e.target.value)}
					required>
					<option>select type</option>
					<option value='income'>income</option>
					<option value='expense'>expense</option>
				</select>
			</div>
			<div className='form-control'>
				<label htmlFor='amount'>Amount </label>
				<input
					type='number'
					placeholder='Enter amount...'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					required
				/>
			</div>
			<button className='btn'>Update Transaction</button>
		</form>
	)
}

export default EditTransaction
