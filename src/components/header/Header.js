import React from 'react'
import TitleArea from './TitleArea'
import NavBar from './Navbar'

export default function Header() {
    return (
        <header className="d-flex justify-content-between prime-bg custom-direction">
            <TitleArea/>
            <NavBar/>
        </header>
    )
}
