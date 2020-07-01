import React from 'react';

export default (props) => (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.details}</h2>
    <img src={props.image}></img>
    <a href={props.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
    <a href={props.url} target="_blank" rel="noopener noreferrer">Site Demo</a>
    </div>
)