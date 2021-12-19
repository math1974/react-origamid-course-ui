import './css/Button.css';
import './css/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="user/:id" element={<UserInfo/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
