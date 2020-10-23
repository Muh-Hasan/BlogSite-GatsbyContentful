const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlogPosts {
        edges {
          node {
            publicationDate
            userName
            updatedAt
            userImage {
              file {
                url
              }
            }
            title
            image {
              file {
                url
              }
            }
            content {
              content
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulBlogPosts.edges.forEach(item => {
    createPage({
      path: `/blogs/${item.node.title}`,
      component: path.resolve("./src/blogs/blog.tsx"),
      context: {
        data: item.node,
      },
    })
  })
}
