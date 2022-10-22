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
		this.skills = new Map()
	}
}

export default function Wrapper() {
	const [filters, setFilters] = useState([])
	return (
		<div id="Experience">
			{/* Filters Controller */}
			<FilterController options={tech}/>
			{/* Experience */}
            My Experience
		</div>
	);
}