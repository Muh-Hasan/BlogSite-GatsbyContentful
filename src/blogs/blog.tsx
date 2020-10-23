import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlogOne({ pageContext: { data } }) {
  console.log(data);
  
  return (
    <div>
      <div>
        helo
        <p>{documentToReactComponents(data.content.json)}</p>
      </div>
    </div>
  )
}
