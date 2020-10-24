import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import NavBar from "../components/navbar"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import moment from "moment"
import styles from "../styles/index.module.css"

export default function Home({ data }) {
  return (
    <div>
      <div className={styles.mian}>
        <div>
          {data.allContentfulBlogPosts.edges.map((item, i: number) => (
            <div className={styles.card} key={i}>
              <div className={styles.fakeimg}>
                <img src={item.node.image.file.url} />
              </div>
              <h2>{item.node.title}</h2>
              <div>
                <span>
                  <img
                    src={item.node.userImage.file.url}
                    className={styles.userImg}
                  />
                </span>{" "}
                <span>{item.node.userName}</span>{" "}
                <span>
                  {moment(item.node.publicationDate).format("MMMM DD, YYYY")}
                </span>
              </div>
              <p className={styles.pBlog}>
                {documentToReactComponents(item.node.content.json)}
              </p>
              <button>
                <Link to={`/blogs/${item.node.title}`}>read more</Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <h2>Footer</h2>
      </div>
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
