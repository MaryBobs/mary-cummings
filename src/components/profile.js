import React from 'react';
import styles from './profile.module.scss';
import profilePicture from '../../static/images/me.jpg';

export default () => (
    <div className={styles.container}>
        <img className={styles.picture} src={profilePicture} alt="Mary"></img>
        <h2>Hi, I'm Mary!</h2>
        <p><span className={styles.dropCap}>I</span> recently completed a Professional Software Development course at CodeClan here in Edinburgh and am now looking for my first job in the world of tech.
        However the small matter of a global pandemic has slightly derailed the job hunt</p>
        <p>Alongside the job applications I'm trying to keep on learning and teaching myself online. I've built this website as somewhere to hold my new blog and other bits and pieces I'm working on.</p>
        <p>At the moment it is pretty small but I just wanted to get something published and then keep adding to it, rather than spending ages adding every little detail I want to!</p>
        <p>If you want to get in touch please do! You can use the contact form or links to GitHub/LinkedIn/Twitter are at the top of the page.</p>
    </div>
)