import React from 'react'
import { graphql } from 'gatsby'

export default function BlogOne({ data }){
    return (
        <div>
            {data.allContentfulBlogPosts.edges[0].node.userName}
        </div>
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
