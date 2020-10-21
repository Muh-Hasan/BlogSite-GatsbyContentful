const path = require("path")
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
  result.data.allContentfulBlogPosts.edges.forEach(item => {
    createPage({
      path: `/blogs/${item.node.userName}/${item.node.title}`,
      component: path.resolve("./src/blogs/blog1.tsx"),
      context: {
        data: item.node,
      },
    })
  })
}
