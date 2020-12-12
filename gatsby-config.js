module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-X2K91H64JS",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Island`,
        short_name: `Island`,
        start_url: `/`,
        background_color: `#18172D`,
        theme_color: `#18172D`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/icon-path*']
         }
      }
   }
  ],
};
