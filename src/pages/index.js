import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Title from '../components/title.js';

export default ({data}) => (
    <Layout>
    <Title text="Welcome"/>
    <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
        Lorem ipsum dolor sit amet
    </p>

    <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <article>
                <div>
                    <strong>{node.frontmatter.title}</strong>
                </div>
                <div>
                    {node.excerpt}
                </div>
            </article>
        ))}
    </div>
    </Layout>
)

export const query = graphql `query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              image
              date(formatString: "DD MMMM YYYY")
            }
            excerpt
          }
        }
      }
}`