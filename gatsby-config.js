const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCxbb0NHsJFGbws8New65sPvy-s7WXsuNk",
          authDomain: "gatsbyblogsite.firebaseapp.com",
          databaseURL: "https://gatsbyblogsite.firebaseio.com",
          projectId: "gatsbyblogsite",
          storageBucket: "gatsbyblogsite.appspot.com",
          messagingSenderId: "295053741184",
          appId: "1:295053741184:web:266b190b1bebc805066a65",
          measurementId: "G-H112DEFLVE",
        },
      },
    },
  ],
}
