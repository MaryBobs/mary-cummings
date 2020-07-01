import React from 'react';
import projectData from '../../data/projects.json';
import Project from '../components/project';

const projectList = () => (
    <div>
        {projectData.content.map( (data) => {
            return <Project key={data.slug} title={data.title} image={data.image} details={data.details}
            url={data.url} github={data.github}/>
        })}
    </div>
)

export default projectList



