import React, { Component } from 'react'
import Checkbox from '../Checkbox'
import MultiSelectContainer from '../../containers/MultiselectContainer'
import './FilterController.scss'

export class FilterController extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedSkills : {}, // Javascript Objects have a O(1) for checking if a key exists
		}
		this.options = new Map(props.options)
	}

	onClick = (evt) => {
		this.props.onClick(evt)
	}

	renderFilterSelection() {
		const boxList = []
		this.options.forEach((val,key) => boxList.push(<MultiSelectContainer key={key} label={key} options={val} onClick={this.onClick}/>))
		return boxList
	}

	render() {  
		return (
			<section className='filter-container'>
				{this.options?.size > 0 && 
				this.renderFilterSelection()}
			</section>
		)
	}
}


export default FilterController