import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaUser, FaHome, FaChartBar, FaUsers, FaBusinessTime} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	const { auth } = useSelector( ( state ) => state )
	
	const [ showMenu, setShowMenu ] = useState( true )

	useEffect( () => {
		if ( auth ) {
			// setShowMenu(true)
		}
	}, [auth])
	
	return (
		<>
			{showMenu && (
				<footer className='footer'>
					<ul>
						<li>
							<NavLink to='/'>
								<FaHome />
								<p>Dashboard</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/users'>
								<FaUsers />
								<p>Users</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/transactions'>
								<FaBusinessTime />
								<p>Transactions</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/statistic'>
								<FaChartBar />
								<p>Stats</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/account'>
								<FaUser />
								<p>Account</p>
							</NavLink>
						</li>
					</ul>
				</footer>
			)}
		</>
	)
}

export default Footer
