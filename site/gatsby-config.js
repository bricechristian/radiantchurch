require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Radiant Church`,
    titleTemplate: "%s | Radiant Church",
    description: `Radiant Church is a Gospel centered multi-ethnic church located in North Charleston, SC.`,
    siteUrl: "http://localhost:8000/",
    image: "/og-image.jpg",
  },
  plugins: [{
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        linkResolver: ({
          node,
          key,
          value
        }) => (doc) => {
          if (doc.isBroken) {
            return "/not-found"
          }
          if (doc.type === "homepage") {
            return "/"
          }
          if (doc.type === "page") {
            return "/${doc.uid}"
          }
          return "/not-found"
        },

        prismicToolbar: true,
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
        }
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/Layout.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/variables/colors";`,
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}