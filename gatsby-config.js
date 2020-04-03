/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://chrishoste.com`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /img/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/privacy", `/legal`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chrishoste.com',
        sitemap: 'https://chrishoste.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ["/privacy", "/legal"], }]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
