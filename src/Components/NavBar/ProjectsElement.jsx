import React, { useState } from 'react';

import styles from '../Styles/ProjectEle.module.css';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


const ProjectsElement = ({ project }) => {
    const [hide, setHide] = useState(true);
    return (
        <div className={`${styles.projectElement} ${!hide ? styles.selected : ""}`}>
            <div className={styles.title}>
                <span>{hide ? <AiOutlinePlus onClick={() => setHide(false)} /> : <AiOutlineMinus onClick={() => setHide(true)} />}</span>
                {project.name}</div>
            {!hide && <div className={styles.details}>
                <p>{project.desc}</p>
                <span className={styles.techStack}>Teck Stack: </span>
                <span className={styles.techDetails}>
                    {
                        project.tectStack.map((st, index) => {
                            return <div key={index.toString()} className={styles.stack}>
                                <span className={styles.techStack}>{st.name}: </span>
                                <span> {st.stack}</span>
                            </div>
                        })
                    }
                </span>
                <div className={styles.action}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>
                </div>
            </div>
            }
        </div>
    );
}

export default ProjectsElement;