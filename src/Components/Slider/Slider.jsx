import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome, AiFillLinkedin } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineContacts, MdOutlineFacebook, MdMenu } from 'react-icons/md';
import { GrProjects, GrInstagram, GrTwitter } from 'react-icons/gr';
import { ImCross, ImMenu } from 'react-icons/im'
import img from './profile.jpg';

import styles from '../Styles/Slider.module.css';


const Slider = () => {
    const [menu, setMenu] = useState(true);
    return (
        <div className={`${styles.sliderContainer} ${menu ? styles.isMenu : ""} `}>
            <div className={`${styles.togglerVisible} ${styles.toggler} `}>
                {menu ? <ImCross onClick={() => setMenu(false)} /> :
                    <ImMenu onClick={() => setMenu(true)} />}
            </div>
            <div className={styles.profile}>
                <img src={img} alt='profile' width="60%" />
                <h3>Pranit Dakhinkar</h3>
                <div className={styles.socialMedia}>
                    <GrTwitter className={styles.mediaIcon} />
                    <MdOutlineFacebook className={styles.mediaIcon} />
                    <GrInstagram className={styles.mediaIcon} />
                    <AiFillLinkedin className={styles.mediaIcon} />
                </div>
            </div>
            <div className={styles.navContainer}>
                <Link to='/'>
                    <AiOutlineHome />
                    <span>Home</span>
                </Link>

            </div>
            <div className={styles.navContainer}>
                <Link to='/projects'>
                    <GrProjects />
                    <span>Project</span>
                </Link>
            </div>
            <div className={styles.navContainer}>
                <Link to="/about">
                    <CgProfile />
                    <span>About</span>
                </Link>
            </div>
            <div className={styles.navContainer}>
                <Link to="/contact">
                    <MdOutlineContacts />
                    <span>Contact us</span>
                </Link>
            </div>
        </div>
    );
}
export default Slider;