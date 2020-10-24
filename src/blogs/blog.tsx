import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./blog.css"
import moment from "moment"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { store, setLoggedIn } from "../redux/store"
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  })
)

export default function Blog({ pageContext: { data } }) {
  const classes = useStyles()
  const loggedIn = useSelector(state => state.login)
  console.log(loggedIn)

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      store.dispatch(setLoggedIn(true))
    } else {
      store.dispatch(setLoggedIn(false))
    }
  })

  const Login = async () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
    store.dispatch(setLoggedIn(true))
  }

  return (
    <>
      <NavBar />
      <article>
        <h1 className="title">{data.title}.</h1>
        <div className="intro-blog">
          <span className="back">
            <Link to="/">
              <ArrowBackIosIcon />
            </Link>
          </span>{" "}
          <span>
            <Avatar src={data.userImage.file.url} className={classes.large} />{" "}
          </span>
          <span className="userName">{data.userName}</span>{" "}
          <span className="date">
            {moment(data.publicationDate).format("D MMM")}
          </span>
          <span className="avatar">
            <Badge badgeContent={4} color="primary">
              <ThumbUpAltOutlinedIcon />
            </Badge>
          </span>
          <span className="avatar">
            <Badge badgeContent={4} color="primary">
              <ChatBubbleOutlineOutlinedIcon />
            </Badge>
          </span>
        </div>
        <figure>
          <img src={data.image.file.url} />
        </figure>
        <p className={loggedIn ? "para" : "notlogged"}>
          {documentToReactComponents(data.content.json)}
        </p>
        {loggedIn ? (
          ""
        ) : (
          <button className="log-btnn" onClick={() => Login()}>
            Login | Signup
          </button>
        )}
        <br />
      </article>
      <br />
      <br />
      <Footer />
    </>
  )
}
