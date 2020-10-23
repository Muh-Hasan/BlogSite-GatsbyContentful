import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <div>hello wrld</div>
      {data.allContentfulBlogPosts.edges.map(item => (
        <Link to={`/blogs/${item.node.userName}/${item.node.title}`}>
          {item.node.title}
        </Link>
      ))}
    </>
  )
}

export const qurey = graphql`
  query {
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
`
