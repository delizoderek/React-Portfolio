import React, { useState } from 'react'

function Skill({ skill, onClick }) {
	const [checked, setChecked] = useState(false)

	const handleClick = ( evt ) => {
		setChecked(!checked)
		if(onClick){
			onClick(evt)
		}
	}
	return (
		<div className='flex'>
			<input id={skill} name={skill} type={'checkbox'} onChange={handleClick} checked={checked}/>
			<label htmlFor={skill}>{skill}</label>
		</div>
	)
}

export default Skill