import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import moment from "moment"
import styles from "../styles/index.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  })
)

export default function Home({ data }) {
  const classes = useStyles()

  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.backPic}>
          <h3 className={styles.picHead}>Explore the new world of coding </h3>
        </div>
        <div className={styles.disFlex}>
          {data.allContentfulBlogPosts.edges.map((item, i) => (
            <div key={i} className={styles.box}>
              <div className={styles.topicImg}>
                <img src={item.node.image.file.url} />
              </div>
              <div className={styles.title}>
                <h4>{item.node.title}</h4>
              </div>
              <div className={styles.userdet}>
                <span className={styles.avatar}>
                  <Avatar
                    src={item.node.userImage.file.url}
                    className={classes.large}
                  />
                </span>{" "}
                <span className={styles.userName}>{item.node.userName}</span>{" "}
                <span className={styles.date}>{moment(item.node.publicationDate).format("D MMM")}</span>{" "}
              </div>
              <div>
                <p className={styles.para}>{documentToReactComponents(item.node.content.json)}</p>
              </div>
              <div>
              <button><Link to={`/blogs/${item.node.title}`}>Read more</Link></button>
              </div>
            </div>
          ))}
        </div>
      </div>
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
