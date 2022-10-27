import React, {useState} from 'react';
import { tech } from './Constants'; 
import FilterController from '../../elements/FilterController';
import { ProjectCard } from '../../elements/Cards/ProjectCard';
import projImg1 from "../../../assets/img/project-img1.png";
import projImg2 from "../../../assets/img/project-img2.png";
import projImg3 from "../../../assets/img/project-img3.png";
import colorSharp2 from "../../../assets/img/color-sharp2.png";
import 'animate.css';

class Experience extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			filters : new Set(),
			experience : [],
			research : [],
			projects : []
		}
		this.skills = new Map(tech)
	}

	render(){
		const {filters} = this.state
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
			skill : ['git'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
			skill : ['C++'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
			skill : ['Javascript'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
			skill : ['C#'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
			skill : ['React'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
			skill : ['Express'],
    },
  ];

	const onClick = (evt) => {
		const filter = evt?.target?.name
		const oldSet = new Set(filters)
		if(oldSet.has(filter)){
			oldSet.delete(filter)
			this.setState({ filters : new Set(oldSet)})
		} else {
			oldSet.add(filter)
			this.setState({ filters : new Set(oldSet)})
		}
	}

	const filterFunction = ( item ) => {
		return item.skill.some(skill => filters.has(skill))
	}

  return (
    <section className="project" id="project">
      <div className='container'>
        <div className='row'>
          <div className='column'>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <div className="flex">
								<FilterController onClick={onClick} options={this.skills}/>
								</div>
                      <div className='row'>
                        { filters.size > 0 ? 
													projects.filter(filterFunction)
													.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
												:
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
              </div>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
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