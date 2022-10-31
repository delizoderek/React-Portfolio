import React, { useState } from 'react'

function Checkbox({ label, option, onClick }) {
	const [checked, setChecked] = useState(false)

	const handleClick = ( evt ) => {
		setChecked(!checked)
		if(onClick){
			onClick(evt)
		}
	}
	return (
		<div className='flex'>
			<input id={option} name={option} type={'checkbox'} onChange={handleClick} checked={checked}/>
			<label htmlFor={option}>{option}</label>
		</div>
	)
}

export default Checkbox