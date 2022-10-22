import React from 'react'
import './Checkbox.scss'

function checkbox({name,onClick,checked}) {
	return (
		<div className='flex'>
			<label htmlFor={name}>{name}</label>
			<input id={name} name={name} type={'checkbox'} onClick={onClick} checked={checked}/>
		</div>
	)
}

export default checkbox