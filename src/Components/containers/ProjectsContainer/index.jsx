import React, { useContext, useEffect, useState } from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import { WindowContext } from '../../../App'
function ProjectsContainer({filters, items}) {
  const [isMobile, setIsMobile] = useState(false);
	const dimensions = useContext(WindowContext)
	const filterFunction = ( item ) => {
		return item.skill.some(skill => filters.has(skill))
	}

  //choose the screen size
  const handleResize = () => {
    if (dimensions.width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
		handleResize()
  },[dimensions]);

	let projectList = items
	if(filters?.size > 0){
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
