import React, { Component } from 'react'
import Checkbox from '../Checkbox'
import MultiSelectContainer from '../../containers/MultiselectContainer'
import './FilterController.scss'

export class FilterController extends Component {
	constructor(props){
		super(props)
		this.options = new Map(props.options)
	}

	onClick = (evt) => {
		this.props.onClick(evt)
	}

	render() {  
		return (
			<section className='filter-container'>
				{this.options?.size > 0 && 
				<MultiSelectContainer key={'Tech'} options={this.options} handleClick={this.onClick}/>}
			</section>
		)
	}
}


export default FilterController