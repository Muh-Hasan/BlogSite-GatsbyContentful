import React, { useState } from "react"
import "../styles/component.css"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h3>
          <Link to="/">Code it.</Link>
        </h3>
      </div>
      <div className="nav-log">
        <span className="sp-one">Name</span>
        <span>
          <button className="log-btn">Login | Signup</button>
        </span>
      </div>
    </div>
  )
}
