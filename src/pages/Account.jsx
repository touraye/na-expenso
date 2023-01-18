import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaUser, FaEdit, FaSignOutAlt, FaUserSecret, FaKey } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedOut } from '../store/features/auth/authSlice'
import { getUsers } from '../store/features/user/userSlice'

import EditUserPassword from '../components/EditUserPassword'

const Account = () => {
  const { auth } = useSelector( ( state ) => state )
  const { users } = useSelector(
		(state) => state
	)

	const [ showBtn, setShowBtn ] = useState( false )
	const [showEditPasswordModal, setShowEditPasswordModal]=useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const user = users?.find( u => u.username === auth?.username )

  useEffect(() => {		
		if (user?.role === 'admin') {
			setShowBtn(true)
		}
		dispatch(getUsers())
	}, [dispatch, user?.role])

	
	const onLogout = () => {
		window.localStorage.clear()
		dispatch(setLoggedOut())
		navigate('/login')
	} 	

	const handleShowEditPasswordModal = ()=> setShowEditPasswordModal(!showEditPasswordModal)    
  
  return (
		<div className='profile-card'>
			<div className='profile-cover'>
				<FaUser className='icon profile-icon' />
			</div>
			<div className='profile-detail'>
				{showEditPasswordModal && (
					<EditUserPassword
						user={user}
						handleShowEditPasswordModal={handleShowEditPasswordModal}
					/>
				)}
				<div className='profile-list'>
					<div className='username-icon'>
						<FaUser className='icon profile-icon-small no-act' />
					</div>
					<div className='username-detail'>
						<p>
							<small>Username</small>
						</p>
						<p>
							<strong>{user?.username || 'Ebrima'}</strong>
						</p>
					</div>
					<div className='edit-username-icon'>
						{showBtn && <FaEdit className='icon profile-icon-small' />}
					</div>
				</div>

				<div className='profile-list'>
					<div className='username-role-icon'>
						<FaUserSecret className='icon profile-icon-small no-act' />
					</div>
					<div className='use-role-detail'>
						<p>
							<small>Role</small>
						</p>
						<strong>{user?.role || 'Admin'}</strong>
					</div>
					<div className='edit-username-icon'>
						{showBtn && <FaEdit className='icon profile-icon-small' />}
					</div>
				</div>
				<div className='profile-list'>
					<div>
						<FaKey className='icon profile-icon-small no-act' />
					</div>
					<div>
						<strong>Edit your password</strong>
					</div>
					<div className='edit-username-icon'>					
							<FaEdit
								onClick={handleShowEditPasswordModal}
								className='icon profile-icon-small'
							/>						
					</div>
				</div>
				<div className='profile-list logout-deatail'>
					<button onClick={onLogout} className='btn logout-btn logout-btn-big'>
						<FaSignOutAlt className='icon logout-icon-small' /> logout
					</button>{' '}
				</div>
			</div>
		</div>
	)
}

export default Account