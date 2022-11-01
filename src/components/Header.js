import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<nav>
				<ul>
					<NavLink to ="/home" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Accueil</li></NavLink>
					<NavLink to ="/coup-de-coeur" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Coup de coeur</li></NavLink>
				<NavLink to ="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Se connecter</li></NavLink>
				</ul>
			</nav>
			<h1>S T I E R</h1>
		</div>
	);
};

export default Header;