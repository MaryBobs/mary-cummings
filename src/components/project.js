import React from 'react';
import styles from './project.module.scss';

export default (props) => (
    <div className={styles.container}>
    <h1>{props.title}</h1>
    <p>{props.details}</p>
    <img className={styles.images} src={props.image}></img>
    <a className={styles.button} href={props.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
    <a className={styles.button} href={props.url} target="_blank" rel="noopener noreferrer">Site Demo</a>
    </div>
)