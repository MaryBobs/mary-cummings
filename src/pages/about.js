import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout.js';
import Title from '../components/title.js';

export default () => (
    <Layout>
    <Title text="About Me"/>
    <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
        Lorem ipsum dolor sit amet
    </p>
    </Layout>
)