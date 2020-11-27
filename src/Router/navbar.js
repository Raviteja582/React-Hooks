import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div style={{ alignItems: 'center' }}>
            <ul style={{ listStyle: 'unset' }}>
                <li>
                    <Link to="/home" type='button'> Home </Link>
                </li>
                <li>
                    <Link to="/about" type='button'> About </Link>
                </li>
                <li>
                    <Link to="/menu" type='button'> Menu </Link>
                </li>
                <li>
                    <Link to="/contact" type='button'> Contact </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;