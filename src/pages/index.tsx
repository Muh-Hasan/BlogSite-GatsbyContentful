import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data);
return <div>{data.allContentfulBlogPosts.edges[0].node.title}</div>
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
