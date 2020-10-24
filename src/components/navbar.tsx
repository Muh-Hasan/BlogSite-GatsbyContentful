import React, { useState } from "react"
import "../styles/component.css"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import "firebase/auth"
import { store, setLoggedIn } from "../redux/store"
import { useSelector } from "react-redux"

export default function NavBar() {
  const [name, setName] = useState("")
  const login = useSelector((state: { login: boolean }) => state.login)
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setName(user.displayName)
    }
  })

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        store.dispatch(setLoggedIn(false))
      })
      .catch(function (error) {
        console.log(error)
      })
    setName("")
  }
  const Login = async () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
    store.dispatch(setLoggedIn(false))
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h3>
          <Link to="/">Code it.</Link>
        </h3>
      </div>
      <div className="nav-log">
        {name !== "" ? <span className="sp-one">Hi, {name}</span> : ""}
        <span>
          {login !== true ? (
            <button className="log-btn" onClick={() => Login()}>
              Login | Signup
            </button>
          ) : (
            <button className="log-btn" onClick={() => Logout()}>
              Logout
            </button>
          )}
        </span>
      </div>
    </div>
  )
}
