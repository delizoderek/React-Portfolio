import React from 'react'

function Checkbox({ label, option, onClick, selected = false }) {

	return (
		<div className='flex'>
			<input id={option} name={option} type={'checkbox'} onChange={onClick} checked={selected}/>
			<label htmlFor={option}>{label}</label>
		</div>
	)
}

export default Checkbox