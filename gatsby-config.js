/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: 'Mary Cummings'
  },
  
  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`
      }
    },

    'gatsby-transformer-remark'
  ]

}
