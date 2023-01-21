import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
const AddTransaction = ({ modal, setModal, onAddTransaction }) => {
	const { transactions } = useSelector((state) => state.transaction)	
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [amount, setAmount] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		if (type.length === 0) {
			return alert('Please select type')
		}

		const generateId = (state) => {
			let randomId = Math.floor(Math.random() * 1000)
			return randomId
		}

		const createdAt = new Date().toISOString().substring(0, 10)

		let id = generateId( transactions )				

		onAddTransaction({ id, name, type, amount: Number(amount), createdAt })
		setName('')
		setType('')
		setAmount( '' )
		setModal(!modal)
	}

	return (
		<form
			className='form transaction-form modal modal-add-form'
			onSubmit={onSubmit}>
			<div className='close-btn-container'>
				<FaTimes className='close-btn' onClick={() => setModal(!modal)} />
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
			<button className='btn'>Add transaction</button>
		</form>
	)
}

export default AddTransaction
