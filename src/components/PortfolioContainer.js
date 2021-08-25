import React, {useState} from 'react'
import Header from './header/Header'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

function PortfolioContainer() {
    const [currentTab, setTab] = useState('About Me');
    const loadTab = () => {
        if(currentTab == 'About Me'){
            return <AboutMe/>
        } else if(currentTab == 'Projects'){
            return 
        }else {
            return <ContactMe/>
        }
    }
    return (
        <>
            <Header/>
            {}
        </>
    )
}

export default PortfolioContainer
