import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import './style.css';

function UserHeader() {
	const navigate = useNavigate();
	const userInfo = React.useContext(UserContext);

	function HandleClick() {
		navigate('/');
	};

	return (
		<div>
			<h3>Nome: {userInfo.name}</h3>

			<p>Páginas:</p>

			<ul>
				<li><NavLink to="/" end>Home page</NavLink></li>
				<li><NavLink to="/user">User page</NavLink></li>
				<li>
					<button onClick={HandleClick}>go to home</button>
				</li>
			</ul>
		</div>
	)
}

export default UserHeader
