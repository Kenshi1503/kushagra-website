import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Kushagra. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.instagram.com/kushagra" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/kushagra" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com/kushagra" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;