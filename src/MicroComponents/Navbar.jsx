import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Navbar.css';
import Logo from '../logo.png';

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleNavExpanded = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">
                <img className='logo' src={Logo} alt="" />
            </Link>
            <button className="hamburger" onClick={handleNavExpanded}>
                {/* icon from heroicons.com */}
                <GiHamburgerMenu />
            </button>
            <div
                className={  
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard-resume">Dashboard Resume</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;