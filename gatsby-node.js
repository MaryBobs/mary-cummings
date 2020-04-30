const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === "MarkdownRemark") {
        const { createNodeField } = actions
        const slug = createFilePath({ node, getNode, basePath: 'markdown' })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

//creates post pages programmatically
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

//queries for a list of all markdown slugs in site
    return new Promise(resolve => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`)
//creates a page for each item in the result        
        .then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/post.js'),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
            resolve()
        })
    })
}