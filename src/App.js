import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Transactions from './pages/pagination/TransactionPagination'
import Users from './pages/pagination/UserPagination'
import Chart from './pages/Chart';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'

function App() {
  return (
		<div className='container'>
			<Router>				
				<main className='main'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/transactions' element={<Transactions />} />
						<Route path='/users' element={<Users />} />
						<Route path='/statistic' element={<Chart />} />
						<Route path='/account' element={<Account />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App;
