import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import AppGallery from "./components/AppGallery";

function App() {
  return (
    <div className="App">
      <NavBar className="self-center" />
      <Intro />
      <HowItWorks />
      <AppGallery />
      <Footer />
    </div>
  );
}

export default App;
