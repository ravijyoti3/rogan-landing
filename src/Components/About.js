import React from 'react';
import { FaAppStoreIos} from 'react-icons/fa';
import { IoMdAppstore} from 'react-icons/io';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Download mobile banking app for ios and android.It helps you banking quickly and smartly.</p>
                <button><FaAppStoreIos className='icon'/>&nbsp;{props.button}</button>
                <br/>
                <button><IoMdAppstore className='icon'/>&nbsp;{props.button1}</button>
            </div>
            
        </div>
    )
}

export default About;
