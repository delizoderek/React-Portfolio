import React from 'react';
import NavItem from './NavItem';
import './Navbar.module.scss';

export default function Navbar (props) {

	return (
		<nav>
			<div className="navbar">
				{props.pages?.length > 0 &&
				props.pages.map(page => (<NavItem key={`nav-${page}`} pageName={page}/>))}
			</div>
		</nav>
	);
}


