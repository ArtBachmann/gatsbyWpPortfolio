module.exports = {
  siteMetadata: {
    title: `Art Bachmann's portfolio`,
    description: `This is my online portfolio with cv included.`,
    author: `Art Bachmann`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, `600`, `700`],
              },
              {
                family: `Open Sans`,
                variants: [`300`, `400`, `500`, `600`, `700`],
              },
              {
                family: `Barlow`,
                variants: [`300`, `400`, `500`, `600`, `700`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Art Bachmann`,
        short_name: `AB CV`,
        start_url: `/`,
        background_color: '#303030',
        theme_color: '#87cdd3',
        display: `standalone`,
        //icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://test.artbachmann.fi/gatsby-cloud/graphql`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
