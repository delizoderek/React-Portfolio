import React, { useState, useEffect } from 'react'
import Checkbox from '../../elements/Checkbox'

function MultiSelectContainer({label,options, handleClick}) {
	const [ selected, setSelected ] = useState({})
	const handleMultiselectClick = (evt) => {
		const target = evt.target.name
		setSelected({
			...selected,
			[target] : !selected[target]
		})

		if(handleClick){
			handleClick(target)
		}
	}

	useEffect(() => {
		const keys = options.keys()
		const initSelected = {}
		for(let key of keys){
			initSelected[key] = false
		}
		setSelected(initSelected)
	}, [])

	const checkboxes = []
	options.forEach((val, key) => checkboxes.push(<Checkbox key={`multi-${key}`} selected={selected[key]} label={val.title} option={key} onClick={handleMultiselectClick}/>));
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