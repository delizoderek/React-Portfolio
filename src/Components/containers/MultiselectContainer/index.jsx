import React, { useState, useEffect } from 'react'
import Checkbox from '../../elements/Checkbox'
import './MultiselectContainer.scss'


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
	options.forEach((val, key) => checkboxes.push(<Checkbox key={`multi-${key}`} selected={selected[key]} option={key} onClick={handleMultiselectClick} label={val} data-label={val}/>));
	return (
		<div className='multiselect'>
				{checkboxes}
		</div>
	)
}

export default MultiSelectContainer