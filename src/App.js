import React  from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/1.png'
import aboutimage1 from './images/2.png'
import About2 from './Components/About2';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Download' button='App Store' button1='Play Store'/>
      <About2 image={aboutimage1} title='Connecting All Your Banking Needs' button='Get Started'/>
      <Subscribe/>
     </div>
    <div>      
    <Footer/>
    </div>
  </div>
 );
}

export default App;
