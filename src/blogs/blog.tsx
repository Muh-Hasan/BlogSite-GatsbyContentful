import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./blog.css"
import moment from "moment"

export default function Blog({ pageContext: { data } }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <figure>
        <img src={data.image.file.url} />
      </figure>
      <div>
        <span>
          <img src={data.userImage.file.url} />
        </span>
        <span>{data.userName}</span>
        <span>{moment(data.publicationDate).format("D MMM")}</span>
        
      </div>
      <p>{documentToReactComponents(data.content.json)}</p>
    </article>
  )
}
