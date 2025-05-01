import React from 'react';


const NavLinks = ({ isClicked, closeMenu }) => {
    return (
        <nav className="navlinks">
            <ul>
                <li onClick={() => isClicked && closeMenu() }>
                    <a href="about">About</a></li>
                <li onClick={() => isClicked && closeMenu()}>
                    <a href="projects">Projects</a></li>
                <li onClick={() => isClicked && closeMenu()}>
                    <a href="blog">Blog</a></li>
                <li onClick={() => isClicked && closeMenu()}>
                    <a href="contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavLinks;