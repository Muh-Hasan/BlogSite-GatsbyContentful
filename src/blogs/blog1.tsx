import React from "react"

export default function BlogOne({ pageContext: { data } }) {
  return <div>{data.title}</div>
}
