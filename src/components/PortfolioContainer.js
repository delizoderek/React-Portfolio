import React, {useState} from 'react'
import Header from './header/Header'
import Footer from './Footer'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'

function PortfolioContainer() {
    const [currentTab, setTab] = useState('Home');
    const loadTab = () => {
        if(currentTab === 'Home'){
            return <AboutMe/>
        } else if(currentTab === 'Projects'){
            return <Projects/>
        }else {
            return <ContactMe/>
        }
    }

    const handleSetTab = (page) => setTab(page);
    return (
        <div className="d-flex flex-column justify-content-between">
            <Header handleSetTab={handleSetTab} currentTab={currentTab}/>
            {loadTab()}
            <Footer/>
        </div>
    )
}

export default PortfolioContainer
