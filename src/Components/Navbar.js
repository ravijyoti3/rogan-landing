import React, {useState} from 'react';
import logo from '../images/logo.png';

function Navbar() {

    const [nav,setnav]= useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <ul className='menu'>
                <li><a href='#' className='active'>Business</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>About</a></li>
            </ul>
            <div>
            <ul className='menu'>
            
            <li><a href='#' className='login-btn'>Log in</a></li>
            <li><a href='#' className='sign-btn'>Sign up</a></li>
            </ul>
            </div>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
          
        </nav>

    )
}

export default Navbar;
