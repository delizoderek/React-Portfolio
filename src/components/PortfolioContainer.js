import React, { useState } from "react";
import SiteNavigation from "./UI/SiteNavigation";
import PortfolioNavigation from "./UI/PortfolioNavigation";
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import News from './pages/News';
import ContactMe from './pages/ContactMe';
// import ImageContainer from "./ImageContainer";
// import Footer from './Footer'

function PortfolioContainer() {
  const [currentTab, setTab] = useState('AboutMe');
  const loadTab = () => {
      if(currentTab === 'Contact'){
        return <ContactMe/>
      } else if(currentTab === 'Projects'){
        return <Projects/>
      }else if(currentTab === 'News'){
        return <News/>;
      } else {
        return <AboutMe/>
      }
  }

  const handleSetTab = (page) => setTab(page);
  return (
    <>
      <SiteNavigation />
        <img src="./images/portfolio_banner_trim.jpg" alt="mountain"/>
      <PortfolioNavigation currentTab={currentTab} handleSetTab={handleSetTab}/>
      {loadTab()}
      {/* <Footer/> */}
    </>
  );
}

export default PortfolioContainer;
