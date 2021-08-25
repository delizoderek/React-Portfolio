import React, {useState} from 'react'
import Header from './header/Header'
import Footer from './Footer'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'

function PortfolioContainer() {
    const [currentTab, setTab] = useState('About Me');
    const loadTab = () => {
        if(currentTab === 'About Me'){
            return <AboutMe/>
        } else if(currentTab === 'Projects'){
            return <Projects/>
        }else {
            return <ContactMe/>
        }
    }

    const handleSetTab = (page) => setTab(page);
    return (
        <>
            <Header handleSetTab={handleSetTab} currentTab={currentTab}/>
            {loadTab()}
            <Footer/>
        </>
    )
}

export default PortfolioContainer
