import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar({active}) {
    const [click, setClick] = useState(false);

const handleClick=() =>setClick(!click);
const closeMobileMenu=(  )=> setClick(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                   <h2>PHOTOSNAP</h2>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}></i>

                </div>
                <ul
                    className={click
                    ? 'nav-menu active'
                    : 'nav-menu'}>
                    <li className="nav-item" >
                        <Link to='/stories' className='nav-links' onClick={closeMobileMenu} style={{color: active === "stories"? '#5fb4a2' :'#203A4C'}}>Stories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/features' className='nav-links' onClick={closeMobileMenu} style={{color: active === "features"? '#5fb4a2' :'#203A4C'}}>Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/pricing' className='nav-links' onClick={closeMobileMenu} style={{color: active === "pricing"? '#5fb4a2' :'#203A4C'}}>Pricing</Link>
                    </li>
                </ul>
                <button>Get an Invite</button>
            </div>
        </nav>
    )
}

export default Navbar
