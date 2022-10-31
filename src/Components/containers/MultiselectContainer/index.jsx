import React, { useState } from 'react'
import Checkbox from '../../elements/Checkbox'

function MultiSelectContainer({label,options}) {
	const [ selected, setSelected ] = useState([])
	const checkboxes = []
	options.forEach((val, key) => checkboxes.push(<Checkbox key={`multi-${key}`} option={val.title} onClick={(evt) => console.log(evt)}/>));
	return (
		<div className='multiselect'>
			<label>{label}</label>
			<div className='scroll'>
				{checkboxes}
			</div>
		</div>
	)
}

export default MultiSelectContainer