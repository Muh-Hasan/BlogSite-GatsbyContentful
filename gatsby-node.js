exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlogPosts {
        edges {
          node {
            userName
            title
          }
        }
      }
    }
  `)
  result.data.allContentfulBlogPosts.edges.foreach(item => {
    console.log(item);
      // createPage({
      //   path: `/blogs/${item.title}`,
      //   component:,
      // })
  })
}
