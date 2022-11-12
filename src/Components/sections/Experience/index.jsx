import React, {useState} from 'react';
import { tech, professionalExperience } from './Constants';
import {FilterController} from '../../elements';
import ProjectsContainer from '../../containers/ProjectsContainer';
import { ReactComponent as WaveDivider } from "../../../assets/img/wave-haikei.svg";
import 'animate.css';
import './experience.scss'

class Experience extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			filters : new Set(),
			experience : [],
			research : [],
			projects : []
		}
	}

	render(){
		const {filters} = this.state

		const onClick = (target) => {
		const filter = target
		const oldSet = new Set(filters)
		if(oldSet.has(filter)){
			oldSet.delete(filter)
			this.setState({ filters : new Set(oldSet)})
		} else {
			oldSet.add(filter)
			this.setState({ filters : new Set(oldSet)})
		}
	}

  return (
    <section className="project portfolio-section" id="project">
			<div className="wave-divider">
				<WaveDivider/>
			</div>
      <div className='container'>
          <div className='projects-column'>
                <h2>Experience</h2>
								<FilterController onClick={onClick} options={tech}/>
                <ProjectsContainer filters={filters} items={professionalExperience}/>
          </div>
        </div>
    </section>
  )
	}

}

export default Experience;