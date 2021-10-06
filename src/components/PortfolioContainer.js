import React, { useState } from "react";
import SiteNavigation from "./UI/SiteNavigation";
import PortfolioNavigation from "./UI/PortfolioNavigation";
import ImageContainer from "./ImageContainer";
// import Footer from './Footer'
// import AboutMe from './pages/AboutMe'
// import ContactMe from './pages/ContactMe'
// import Projects from './pages/Projects'

function PortfolioContainer() {
  // const [currentTab, setTab] = useState('Home');
  // const loadTab = () => {
  //     if(currentTab === 'Home'){
  //         return <AboutMe/>
  //     } else if(currentTab === 'Projects'){
  //         return <Projects/>
  //     }else {
  //         return <ContactMe/>
  //     }
  // }

  // const handleSetTab = (page) => setTab(page);
  return (
    <>
      <SiteNavigation />
        <img src="./images/water_bg_banner.png" alt="water" />
      <PortfolioNavigation />
      {/* {loadTab()}
            <Footer/> */}
    </>
  );
}

export default PortfolioContainer;
