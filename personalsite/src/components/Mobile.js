import React from 'react';
import '../styles/NavBar.css'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import NavLinks from './NavLinks';




function Mobile() {
    const [click, setClick] = useState(false);
    const Hamburger = < CiMenuBurger className="Hamburger" size="30px" color="black" onClick={() => setClick(!click)} />
    const Close = < IoCloseOutline className="Close" size="30px" color="black" onClick={() => setClick(!click)} />
    const closeMenu = () => setClick(false);
 
    return (
        <nav className="Mobile">
            <img src="/images/logo.png" alt="My logo" className="logo"></img>
            {click ? Close : Hamburger}    
            {click && <NavLinks isClicked={true} closeMenu={closeMenu} /> }
        </nav>
    );
}

export default Mobile;                                              