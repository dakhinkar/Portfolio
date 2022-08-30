import React, { useState } from 'react';

import styles from '../Styles/ContactUS.module.css';


const ContactUs = () => {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Contact US</p>
            <div className="emailDetails">
                <span className={styles.key}>Email address : </span>
                <span className={styles.value}>pranitdakhinkar145@gmail.com</span>
            </div>
            <div className="contactDetails">
                <span className={styles.key}>
                    Phone no :
                </span>
                <span className={styles.value}>
                    <strong>+91 8080979360 </strong>
                    / +91 7745005711
                </span>
            </div>
            <div className="location">
                <span className={styles.key}>Location :</span>
                <span className={styles.value}>
                    Mumbai, Maharashtra
                </span>
            </div>

        </div>
    );
}
export default ContactUs;
