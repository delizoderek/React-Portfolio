import React, { useEffect, useState } from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
function ProjectsContainer({filters, items}) {
  const [isMobile, setIsMobile] = useState(false);
	const filterFunction = ( item ) => {
		return item.skill.some(skill => filters.has(skill))
	}

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
		handleResize()
    window.addEventListener("resize", handleResize);
  },[]);

	let projectList = items
	if(filters?.length > 0){
		projectList = items.filter(filterFunction)
	}

  return (
    <>
      {isMobile ? (
        <MobileContainer items={projectList} />
				) : (
        <DesktopContainer items={projectList} />
      )}
    </>
  );
}

export default ProjectsContainer;
