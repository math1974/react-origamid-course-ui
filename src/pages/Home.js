import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const id = 12;

    return (
		<>
			<h1>Home</h1>

			<p>Está é a minha home page</p>

			<ul>
				<li>
					<Link to={`/user/${id}`}>Student full</Link>
				</li>
			</ul>
		</>
	)
};

export default Home;
