import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import NavBar from '../components/navbar'

export default function Home({ data }) {
  return (
    <>
    <NavBar />
      {data.allContentfulBlogPosts.edges.map(
        (item: { node: { title: string } }) => (
          <div key={item.node.title}>
            <Link to={`/blogs/${item.node.title}`}>{item.node.title}</Link>
          </div>
        )
      )}
    </>
  )
}

export const qurey = graphql`
  query {
    allContentfulBlogPosts {
      edges {
        node {
          title
        }
      }
    }
  }
`
