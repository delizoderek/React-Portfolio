import React from 'react';
import SectionCard from '../screens/SectionCard';
export default function ScrollingContainer({children}){
	return(
		<div className='scrolling-container'>
			{Array.isArray(children) ? (
				children.map(child => <SectionCard id={child.type?.name} key={child.type?.name}>{child}</SectionCard> )
			) : (
				<SectionCard id={children.type?.name}>{children}</SectionCard>
			)}
		</div>
	);
}