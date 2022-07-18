import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <header className='header'>
            Here comes the logo.
            <Link to='/myEvents'>My events</Link>
            <Link to='/events'>All events</Link>
            <Link to='/login'>Sign in</Link>
        </header>
    )
};

export default Header;