import React from 'react';
import styles from './contact-form.module.scss';

export default () => (
    <div className={styles.container}>
        <p>You can contact me through my LinkedIn/Twitter/Instagram links at the top of the page</p>
        <p>Or send me a message through the form below:</p>
    <div>
    <form className={styles.contactForm} method="post" action="https://formspree.io/mary@xr220.com">
        <div className={styles.from}>
        <label>Name:</label>
            <input type="text" name="name" id="name" placeholder="your name" required/>
        </div>
        <div className={styles.reply}>
        <label>Email:</label>
            <input type="email" name="_replyto" id="email" placeholder="your email address" required/>
        </div>
        <div className={styles.message}>
        {/* <label>Message:</label> */}
            <textarea name="message" id="message" rows="5" placeholder="Please type your message here" required/>
        </div>
        <button className={styles.submitButton} type="submit">Send Message >>></button>

        {/* <input className={styles.clearButton} type="reset" value="<<< Clear All" /> */}
        {/* </div> */}
    </form>
    </div>
    </div>
)