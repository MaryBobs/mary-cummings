import React from 'react';
import projectData from '../../data/projects.json';
import Project from '../components/project';

const projectList = () => (
    <div>
        <h1>{projectData.heading}</h1>
        {projectData.content.map( (data) => {
            return <Project key={data.slug} title={data.title}/>
        })}
    </div>
)

    // export default (props) => (
    //     <div>
    //         {props.projects.map(
    //         ({project}) => (
    //             <Project
    //             name={project.name}
    //             image={project.image}
    //             details={project.details}
    //             url={project.url}
    //             github={project.github}/>
    //         ))}
    //     </div>
    // )

export default projectList



