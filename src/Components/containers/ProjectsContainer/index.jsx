import React from "react";
import { ProjectCard } from "../../elements";
function ProjectsContainer({filters, items}) {

	const filterFunction = ( item ) => {
		return item.skill.some(skill => filters.has(skill))
	}
	
  return (
    <div className="projects-container">
      {filters.size > 0
        ? items
            .filter(filterFunction)
            .map((project, index) => {
              return <ProjectCard key={`ProjectCard-${index}`} {...project} />;
            })
        : items.map((project, index) => {
            return <ProjectCard key={`ProjectCard-${index}`} {...project} />;
          })}
    </div>
  );
}

export default ProjectsContainer;
