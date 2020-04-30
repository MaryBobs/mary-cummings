import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Title from '../components/title.js';
import ArticleList from '../components/article-list';

export default () => (
    <Layout>
    <Title text="Welcome"/>
   
    <p>
        Lorem ipsum dolor sit amet
    </p>

    <ArticleList />

  
    </Layout>
)

