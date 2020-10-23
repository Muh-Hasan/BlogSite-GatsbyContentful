import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Blog({ pageContext: { data } }) {
  return (
    <div>
      <div>
        <p>{documentToReactComponents(data.content.json)}</p>
      </div>
    </div>
  )
}
