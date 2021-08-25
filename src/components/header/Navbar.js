import React from 'react'
import MenuItem from './MenuItem'
const menuItems = [
    {
        title:'About Me',
        link:'#about-me',
        downloadable: false
    },
    {
        title:'Work',
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
function navbar() {
    return (
        <nav id="navMenu" className="navbar navbar-expand-lg show-menu">
            <div className="custom-contain custom-justify">
                <ul className="custom-nav custom-align custom-direction">
                    {menuItems.map((item,i) => <MenuItem key={i} downloadable={item.downloadable} link={item.link} title={item.title}/>)}
                </ul>
            </div>
        </nav>
    )
}

export default navbar
