import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import NavBar from "../components/navbar"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../stlyes/index.css"
import moment from "moment"

export default function Home({ data }) {
  return (
    <div>
      <div className="row">
        <div className="leftcolumn">
          {data.allContentfulBlogPosts.edges.map((item, i: number) => (
            <div className="card" key={i}>
              <div className="fakeimg">
                <img src={item.node.image.file.url} />
              </div>
              <h2>{item.node.title}</h2>
              <div>
                <span>
                  <img src={item.node.userImage.file.url} className="userImg" />
                </span>{" "}
                <span>{item.node.userName}</span>{" "}
                <span>
                  {moment(item.node.publicationDate).format("MMMM DD, YYYY")}
                </span>
              </div>
              <p className="p-blog">
                {documentToReactComponents(item.node.content.json)}
              </p>
              <button>
                <Link to={`/blogs/${item.node.title}`}>read more</Link>
              </button>
            </div>
          ))}
        </div>

        {/* <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg" style="height:100px;">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg">Image</div><br>
      <div className="fakeimg">Image</div><br>
      <div className="fakeimg">Image</div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div> */}
      </div>

      <div className="footer">
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

// <>
// <NavBar />
//   {data.allContentfulBlogPosts.edges.map(
//     (item: { node: { title: string } }) => (
//       <div key={item.node.title}>
//         <Link to={`/blogs/${item.node.title}`}>{item.node.title}</Link>
//       </div>
//     )
//   )}
// </>
