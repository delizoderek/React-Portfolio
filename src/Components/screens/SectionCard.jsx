import React from 'react';

export default function SectionCard(props){
	const { id, index, children } = props;
	return (
		<section id={id}>
			{children || `Page ${index}`}
		</section>
	);
}