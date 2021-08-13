import React from 'react';
import aboutimage from '../images/1.png';
import Navbar from './Navbar';


function Header() {
    return (
        <div id='main header'>
        <Navbar/>
     
        <div className='name'>
            <div className='name1 header-text'>
                <p>*30 Days free trial</p>
                <h2>Life Should Be Easy.</h2>
                <p>financial transactions remotely using a mobile device such as a smartphone or tablet.</p>
                <br/>
                <button className='cv-btn'>Get Started</button>
                
            </div>
            <div className='name2'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
        </div>
    )
}

export default Header;
