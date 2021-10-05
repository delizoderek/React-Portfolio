import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import projectList from '../../utils/ProjectList'

function Projects() {
    return (
        <div className="c-height col-12 d-flex flex-wrap p-4 align-items-center justify-content-center">
            {projectList.map((item,i) => {
                return <ProjectCard key={i} project={item}/>
            })}
        </div>
    )
}

export default Projects
