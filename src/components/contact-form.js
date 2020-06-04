import React from 'react';
import styles from './contact-form.module.scss';

export default () => (
    <div>
        <p>You can contact me through my LinkedIn/Twitter/Instagram. Links at the top of the page below my name</p>
        <p>Or send me a message through the form below.</p>
    <div className={styles.container}>
    <form className={styles.contactForm} method="post" action="https://formspree.io/mary@xr220.com">
        <p className={styles.to}>To: Mary Cummings</p>
        <div className={styles.from}>
        <label>Name:</label>
            <input type="text" name="name" id="name" placeholder="Please enter your name" required/>
        </div>
        <div className={styles.reply}>
        <label>Email:</label>
            <input type="email" name="_replyto" id="email" placeholder="Please enter your email address" required/>
        </div>
        {/* <label>
            Subject:
            <input type="text" name="subject" id="subject"/>
        </label> */}
        <div className={styles.message}>
        <label>Message:</label>
            <textarea name="message" id="message" rows="5" placeholder="Please type your message here" required/>
        </div>
        {/* <div className={styles.button}> */}
        <button className={styles.submitButton} type="submit">Send Message >>></button>

        {/* <input className={styles.clearButton} type="reset" value="<<< Clear All" /> */}
        {/* </div> */}
    </form>
    </div>
    </div>
)