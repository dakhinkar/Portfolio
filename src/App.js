import Body from "./Components/NavBar/Body";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/NavBar/Home";
import AboutMe from "./Components/NavBar/AboutMe";
import ContactUs from "./Components/NavBar/ContactUs";
import Projects from "./Components/NavBar/Projects";
function App(){
  return(
    <div className={styles.container}>
      <Router>
        <Slider />
        {/* <Routes> */}
          <Body/>
          {/* <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <AboutMe /> } />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/projects' element={ <Projects/> } /> */}
        {/* </Routes> */}
        

      </Router>      
      
    </div>
  );
}


export default App;
