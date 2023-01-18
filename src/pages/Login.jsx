import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../store/features/auth/authSlice'
import {getUsers} from '../store/features/user/userSlice'

const Login = () => {
	const {users} = useSelector((state)=> state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[username,setUsername]=useState('')
  const [ password, setPassword ] = useState( '' )  
  
  const onSubmit = async( e ) => {
    e.preventDefault()       
			if ( username === users.username && password === users.password ) {
				const loggedUser = JSON.parse( window.localStorage.getItem( 'authUser' ) )
				dispatch(setLogin(loggedUser))
      	navigate('/')
			} else {
				alert('wrong username or password!')
			}         
  }

  return (
		<form onSubmit={onSubmit} className='form'>
			<div className='form-control'>
				<label htmlFor='username'>Username:</label>
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Enter username'
					required
				/>
			</div>
			<div className='form-control'>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
					required
				/>
			</div>
			<div className='form-control'>
				<input type='submit' value='LOGIN' className='btn login-btn' />
			</div>
		</form>
	)
}

export default Login
