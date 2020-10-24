import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./blog.css"
import moment from "moment"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"

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

  return (
    <article>
      <h1 className='title'>{data.title}</h1>
      <div className='intro-blog'>
        <span>
          <Avatar src={data.userImage.file.url} className={classes.large} />{" "}
        </span>
        <span className='userName'>{data.userName}</span>{" "}
        <span className='date'>{moment(data.publicationDate).format("D MMM")}</span>
        <span className='avatar'>
          <Badge badgeContent={4} color="primary">
            <ThumbUpAltOutlinedIcon />
          </Badge>
        </span>
        <span className='avatar'>
          <Badge badgeContent={4} color="primary">
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
        </span>
      </div>
      <figure>
        <img src={data.image.file.url} />
      </figure>
      <p className='para'>{documentToReactComponents(data.content.json)}</p>
      <br />
    </article>
  )
}
