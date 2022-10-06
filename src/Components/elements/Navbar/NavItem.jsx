import React from 'react';

export default function NavItem({pageName}){
	return (
		<a className='navitem' href={`#${pageName.replaceAll(' ','')}`}>{pageName}</a>
	);
}