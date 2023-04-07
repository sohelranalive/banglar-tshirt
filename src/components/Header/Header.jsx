import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='menu-style'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header; <h1>This is my header section</h1>