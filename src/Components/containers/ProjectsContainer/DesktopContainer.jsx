import React from "react";
import { ProjectCard } from "../../elements";
function ProjectsContainer({ items }) {
	
  return (
    <div className="projects-container">
      {items.map((project, index) => {
              return <ProjectCard key={`ProjectCard-${index}`} {...project} />;
            })}
    </div>
  );
}

export default ProjectsContainer;
