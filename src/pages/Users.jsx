import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
	getUsers,
	deleteUser,
	createUser,
	removeUser,
} from '../store/features/user/userSlice'
import AddUser from '../components/AddUser'
import User from '../components/User'
import { FaPlus } from 'react-icons/fa'

const Users = ({userData}) => {	
	const { auth } = useSelector( ( state ) => state )
	// console.log('auth', auth)
	const dispatch = useDispatch()
	
	const [ showForm, setShowForm ] = useState( false ) 	
	const [showEditForm, setShowEditForm] = useState(false)	
	const showEdit = ()=> setShowEditForm(!showEditForm)
	// const foundUser = userData?.find((u) => u?.username === auth.username)	
  
  useEffect(() => {	
		dispatch(getUsers())
	}, [dispatch,])
  
	const onShowForm = () => setShowForm( !showForm )
	
	const onAdd = ( data ) => {	
		dispatch(createUser(data))     						
	}	
	
	const onDelete = (id) => {
		dispatch( removeUser( id ) )				    		    
	}	    
  
  return (
		<div className='user-container'>			
			{showForm && (
				<div>
					<AddUser onAdd={onAdd} onShowForm={onShowForm} />
				</div>
			)}
			<ul className='list'>
				{userData.length > 0 ? (
					userData?.map((user) => (
						<User
							key={user.id}
							user={user}
							onDelete={onDelete}
							// foundUser={foundUser}createUser
							showEdit={showEdit}
						/>
					))
				) : (
					<p>No user found</p>
				)}
			</ul>
			{
				showForm ? ""
					:
				<button
				onClick={() => setShowForm(!showForm)}
				className='btn plus-btn btn-rounded'>
				<FaPlus />
			</button>}
		</div>
	)
}

export default Users
