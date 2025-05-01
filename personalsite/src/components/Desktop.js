import React from 'react';
import NavLinks from './NavLinks'
import '../styles/NavBar.css'

function Desktop() {
    return (
        <nav className="Desktop">
            <img src="MyLogoBeta.png" alt="My logo" className="logo"></img>
            <NavLinks />
        </nav>
    );
}

export default Desktop;