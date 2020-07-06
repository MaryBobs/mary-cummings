import React from 'react';
import projectData from '../../data/projects.json';
import Project from '../components/project';
import styles from '../components/project-list.module.scss';

const projectList = () => (
    <div className={styles.container}>
        {projectData.content.map( (data) => {
            return <Project key={data.slug} title={data.title} image={data.image} details={data.details}
            url={data.url} github={data.github} urltext={data.urltext}/>
        })}
        <h2>More projects will be added soon!</h2>
    </div>
)

export default projectList



