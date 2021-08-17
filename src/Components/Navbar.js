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
        </nav>

    )
}

export default Navbar;
