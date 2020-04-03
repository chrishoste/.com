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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
