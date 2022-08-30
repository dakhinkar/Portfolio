import ProjectsElement from "./ProjectsElement";
import styles from "../Styles/ProjectEle.module.css";
import React, { useRef } from 'react';

const Projects = () => {
    const projectRef = useRef();
    const titleRef = useRef();
    const scolleHandler = (event) => {
        if (projectRef.current.scrollTop >= 30) {

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
    const projectList = [
        {
            name: 'Spotify clone',
            desc: "Now days everyone listen music to refresh our mind , realixation and  much more. Idea behind to make spotify app to provide music to everyone for listen. Hence we need music database authotication which is use from spotify.In this app have the functionaly to Play song, play Next and prevoius song, taken song list from Album and PlayList, Error modal which is display on some error occured during Fetch request",
            tectStack: [
                {
                    "name": "Front-end",
                    "stack": "React Js, Redux, CSS3, bootstrap, React-bootstrap, axios"
                }
            ],
            githubLink: "https://github.com/dakhinkar/Spotify",
            projectLink: "https://my-spotify-01.netlify.app"
        },
        {
            name: 'Expense book',
            desc: "Everyone is kept the notes of how much amount is spent on daily rutine or monthly rutine. This application will help to whose people who want see the expense details in monthly bases and yearly based. In this application having funtionality like filter by year, add new expense details, Monthy based graph shown in tabular format.",
            tectStack: [
                {
                    "name": "Front-end",
                    "stack": "React Js, CSS3"
                }
            ],
            githubLink: "https://github.com/dakhinkar/Expense-Book",
            projectLink: "https://expense-books.netlify.app/"
        },
        {
            name: 'News Feeder',
            desc: "Paper less news details display in this application.News has several domain such as health, COVID-19, Entertainment, Share market, Politics, Sports and much more.In this app we fetch data from news API and display it by carts.If data is not loaded successfully then we will display loading spinner.We have 404 page which dispaly when user try access content by params but contains is unavailable.",
            tectStack: [
                {
                    "name": "Front-end",
                    "stack": "React Js, CSS3, React-router-dom, Bootstrap, React-bootstrap, axios"
                }
            ],
            githubLink: "https://github.com/dakhinkar/News-App/",
            projectLink: "https://news-collections.netlify.app/"
        },
        {
            name: 'Picture Gallery',
            desc: "This app is fetch data from dummy picture API and display it in the cart layout structure. Cart contain title, image, discription, button.Each picture image belongs to diffreent specific imforations.We can able to search perticular image by url paramrs if found then display it otherwise 404 page will display",
            tectStack: [
                {
                    "name": "Front-end",
                    "stack": "React Js, JavaScipt,React-router-dom, CSS3, Axios"
                }
            ],
            githubLink: "https://github.com/dakhinkar/Picture-Gallery",
            projectLink: "https://photo-shop.netlify.app/"
        },
        {
            name: 'Calculator',
            desc: "This calcutor is able to doing basic calculation. Addtion, Substraction, Multiplication, division, square, power function, sqaure root, and clear this are functionality of app",
            tectStack: [
                {
                    "name": "Front-end",
                    "stack": "HTML5, CSS, JavaScript"
                }
            ],
            githubLink: "https://photo-shop.netlify.app/",
            projectLink: "https://dakhinkar.github.io/Calculator-js/"
        },

    ]


    return (
        <div className={styles.projectContainer} ref={projectRef} onScroll={scolleHandler}>
            <h3 className={styles.subHeading} ref={titleRef}>Projects</h3>
            {
                projectList.map((pro, index) => {
                    return <ProjectsElement key={index.toString()} project={pro} />
                })
            }
        </div>
    );
}
export default Projects;
