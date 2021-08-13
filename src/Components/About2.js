import React from 'react';

function About2(props) {
    return (
        <div id='about'>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Heyyy!!! Styleout there... Need any help for styling</p>
            <button>{props.button}</button>
        </div>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        
    </div>
    )
}

export default About2;
