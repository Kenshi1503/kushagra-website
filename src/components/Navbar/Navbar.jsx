import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Assuming you will create a CSS file for Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Kushagra</h1>
                <ul className="navbar-menu">
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="music" smooth={true} duration={500}>Music</Link>
                    </li>
                    <li>
                        <Link to="events" smooth={true} duration={500}>Events</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;