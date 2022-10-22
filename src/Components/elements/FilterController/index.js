import React, { Component } from 'react'
import Checkbox from '../Checkbox'
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
		// const {setFilters} = this.props
		console.log(evt.target.name)
	}

	renderCheckboxes() {
		const boxList = []
		this.options.forEach((val,key) => boxList.push(<Checkbox key={key} name={val.title} onClick={this.onClick}/>))
		return boxList
	}

	render() {
		return (
			<section className='filter-container'>
				{this.options?.size > 0 && 
				this.renderCheckboxes()}
			</section>
		)
	}
}


export default FilterController