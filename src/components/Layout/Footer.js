import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you want to style it with CSS
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const NewFooter = () => {
    return (
        <footer className="new-footer">
            <div className="footer__left">
                &copy; {new Date().getFullYear()} Airbnb Clone. All rights reserved.
            </div>
            <div className="footer__center">
                <div className="footer__section">
                    <h4>Support</h4>
                    <Link to="/help">Help Center</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="footer__section">
                    <h4>Community</h4>
                    <Link to="/blog">Blog</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/forum">Forum</Link>
                </div>
                <div className="footer__section">
                    <h4>Hosting</h4>
                    <Link to="/host">Become a Host</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/support-hosts">Support for Hosts</Link>
                </div>
                <div className="footer__section">
                    <h4>About</h4>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/press">Press</Link>
                </div>
            </div>
            <div className="footer__right">
                <div className="language-dropdown">
                    <LanguageIcon />
                    <select>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
                <div className="social-media-icons">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    );
};

export default NewFooter;
