import React, { useRef } from 'react';
import Skills from './Skills';

import sqlSrc from '../Certification/SQL.png';
import javaSrc from '../Certification/JAVA.pdf';
import irjetSrc from '../Certification/IRJET.jpeg';

import styles from '../Styles/AboutMe.module.css';


const AboutMe = () => {
    const aboutRef = useRef();
    const titleRef = useRef();
    const scolleHandler = (event) => {
        if (aboutRef.current.scrollTop >= 30) {

            titleRef.current.style.position = "sticky";
            titleRef.current.style.top = 0;
            titleRef.current.style.backgroundColor = "#757F9A";
            titleRef.current.style.paddingBottom = "1rem";


        } else {

            titleRef.current.style.position = "";
            titleRef.current.style.top = "";
            titleRef.current.style.backgroundColor = "";
        }

    }
    const frontEndSkills = ['HTML5', "CSS3", "SASS", "JavaScript", "Java", "React Js", "React-redux"];
    const backEndSkills = ['Node Js', 'Express JS'];
    const database = ['SQL', 'MySQL', "MongoBD"]
    const libreryAndFrameWork = ['Bootstrap', 'React Bootstrap', "React router dom", 'Paginate']
    return (
        <div className={styles.aboutMeContainer} ref={aboutRef} onScroll={scolleHandler}>
            <h3 className={`${styles.heading}`} ref={titleRef} >About me</h3>
            <p className={styles.aboutMe}>
                I am Pranit Dakhinkar, passout in 2019 from Bharati vidhyapeeth college of Engg, Navi Mumbai in <strong>Electronics and Telecommunication
                </strong> stream. I have key skill in design and build <strong>Front-end Web Application</strong>. Currently I am learning Backend Development by Node js, express js and MongoDB (MERN Stack). I always searching new opportunity to enhace my skills as well.
            </p>
            <h4 className={styles.subHeading}>Acadmic details : </h4>
            <div className={styles.acadmicDetails}>

                <table>
                    <thead>
                        <tr>
                            <th>SR</th>
                            <th>University Name</th>
                            <th>Degree</th>
                            <th>Stream</th>
                            <th>Passout Year</th>
                            <th>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mumbai university </td>
                            <td>B.E</td>
                            <td>ENTC</td>
                            <td>2019</td>
                            <td>77.2</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>B.A.T.U</td>
                            <td>Diploma</td>
                            <td>ENTC</td>
                            <td>2016</td>
                            <td>70</td></tr>
                        <tr></tr>
                        <tr>
                            <td>3</td>
                            <td>SSC</td>
                            <td>10<sup>th</sup></td>
                            <td>SSC</td>
                            <td>2013</td>
                            <td>89.64</td></tr>
                    </tbody>

                </table>
            </div>
            <h4 className={styles.subHeading}>Skills :</h4>
            <div className={styles.skillsList}>
                <Skills skill={frontEndSkills} />
                <Skills skill={backEndSkills} />
                <Skills skill={database} />
                <Skills skill={libreryAndFrameWork} />
            </div>
            <h4 title='Open to view' className={styles.subHeading}>Certification / Publication :</h4>
            <div className={styles.cert}>
                <section>
                    <a href={javaSrc} target='_blank' rel="noopener noreferrer" >Java</a>
                    <a href={sqlSrc} target='_blank' rel="noopener noreferrer">SQL</a>
                </section>
                <section>
                    <a href={irjetSrc} target='_blank' rel="noopener noreferrer">IRJET</a>
                </section>
            </div>

        </div>
    );
}
export default AboutMe;