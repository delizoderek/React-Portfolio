import React, {useState} from 'react';
import { tech } from './Constants'; 
import FilterController from '../../elements/FilterController';

class Experience {
	constructor(props){
		this.state = {
			filters : [],
			experience : [],
			research : [],
			projects : []
		}
		this.skills = new Map(tech)
	}

	render(){
		return (
			<>
				{/* Filters Controller */}
				<FilterController options={skills}/>
				{/* Experience */}
							My Experience
			</>
		)
	}

}

export default function Wrapper(props) {
	return (
		<div id="Experience">
			<Experience {...props}/>
		</div>
	);
}