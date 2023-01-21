import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Users from '../../pages/Users'
import Pagination from './Pagination'
import { getUsers } from '../../store/features/user/userSlice'

const UserPagination = () => {
	const { user } = useSelector(
		(state) => state
	)	
	console.log('@p', user);
	const dispatch = useDispatch()
	
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage] = useState(5)

	useEffect(() => {
		// if (user.length <= 0) {
		// }
		dispatch(getUsers())		
	}, [dispatch, user,])

	// Get current user
	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser)

	// Change page
	const paginateFront = () => setCurrentPage(currentPage + 1)
	const paginateBack = () => setCurrentPage(currentPage - 1)	

	return (
		<div>
			<Users userData={currentUsers} />
			<Pagination
				dataPerPage={usersPerPage}
				totalPosts={user.length}
				paginateBack={paginateBack}
				paginateFront={paginateFront}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default UserPagination