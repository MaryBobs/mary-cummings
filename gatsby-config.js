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

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poiret One`,
            variants: [`400`,`700`,`900`]
          },
          {
            family: `Raleway`,
            variants: [`400`]
          }
        ],
      },
    },

    'gatsby-transformer-remark'
  ]

}

