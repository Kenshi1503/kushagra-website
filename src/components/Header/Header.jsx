import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="hero-section">
                <h1 className="hero-title">Kushagra</h1>
                <p className="hero-subtitle">Independent Pop Artist from India</p>
                <a href="#music" className="cta-button">Listen Now</a>
            </div>
        </header>
    );
};

export default Header;