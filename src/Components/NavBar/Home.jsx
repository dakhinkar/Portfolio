
import styles from '../Styles/Home.module.css';
import cv from '../Img/PranitDakhinkarCV.pdf';

const Home = () => {
    // const openHandler = () => {
    //     window.open(cv, '_blank');
    // }
    return (
        <div className={styles.homeContainer}>
            <h2>Hello , I am Pranit Dakhinkar</h2>
            <h3>React Developer</h3>
            <p>
                I am passout in 2019 from BVCOENM in Eectronics and Telecommunication stream and i am passionate about building software and applications that have a material impact on real-world problems.
            </p>
            <div className={styles.action}>
                <a className={styles.dwn} href={cv} download >Download CV</a>
            </div>

        </div>
    );
}
export default Home;

