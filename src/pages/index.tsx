import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import moment from "moment"
import styles from "../styles/index.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

export default function Home({ data }) {
  return (
    <div>
      <NavBar />
      {/* main page */}
      <div className={styles.main}>
        <div className={styles.backPic}>
            <h3 className={styles.picHead}>Explore the new world of coding </h3>
        </div>
        <div>
          {data.allContentfulBlogPosts.edges.map((item ,i) => (
            <Link to={`/blogs/${item.node.title}`}>{item.node.title}</Link>
          ))}
        </div>
      </div>
      {/* ================== */}
      {/* <Footer /> */}
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
            json
          }
        }
      }
    }
  }
`
