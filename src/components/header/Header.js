import React from 'react'
import TitleArea from './TitleArea'
import NavBar from './Navbar'

export default function Header(props) {
    return (
        <header className="h-height d-flex justify-content-between prime-bg custom-direction">
            <TitleArea/>
            <NavBar handleSetTab={props.handleSetTab} currentTab={props.currentTab}/>
        </header>
    )
}
