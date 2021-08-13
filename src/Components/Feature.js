import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'

function Feature() {
    return (
        <div id='features'>
            <div>
                <h1 className='features-work'>How it works</h1>
                <p className='features-work'> Mobile banking differs from mobile payments, which involves the use of a mobile devices </p>
            </div>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Information' description='Enter your information ensure your details safe and more secure'/>
                <FeatureBox image={featureimage1} title='Data Secure' description='Sending money faster & easier with end to end encryption'/>
                <FeatureBox image={featureimage2} title='Add Cards' description='Add multiple cards and track your daily expense with quality interface'/>
            </div>
        </div>
    )
}

export default Feature;
