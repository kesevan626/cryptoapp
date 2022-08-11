import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Layout  from  './hoc/Layout'
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
	return ( 
		<Router>
			<Layout>
				<Routes>
					<Route path='/' exact element={<Homepage />} />
					<Route path='/sign-up'  element={<SignUp />} />
					<Route path='/login'  element={<Login />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;