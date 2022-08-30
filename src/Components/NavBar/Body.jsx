import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import ContactUs from './ContactUs';
import Projects from './Projects';

import styles from '../Styles/Main.module.css';


const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}

export default Body;