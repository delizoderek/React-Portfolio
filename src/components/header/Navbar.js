import React from 'react'
import MenuItem from './MenuItem'
const menuItems = [
    {
        title:'Home',
        link:'#about-me',
        downloadable: false
    },
    {
        title:'Projects',
        link:'#work',
        downloadable: false
    },
    {
        title:'Contact Me',
        link:'#contact-me',
        downloadable: false
    },
    {
        title:'Resume',
        link:'./assets/media/SiteContent/DerekDeLizo_Embedded_Resume.pdf',
        downloadable: true
    },
];
function Navbar(props) {
    return (
        <nav id="navMenu" className="navbar navbar-expand-lg">
            <div className="custom-contain custom-justify">
                <ul className="custom-nav custom-align custom-direction">
                    {menuItems.map((item,i) => <MenuItem key={i} downloadable={item.downloadable} link={item.link} title={item.title} handleSetTab={props.handleSetTab} currentTab={props.currentTab}/>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar