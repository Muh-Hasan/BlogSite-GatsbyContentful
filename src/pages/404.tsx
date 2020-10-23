import React from 'react'
import { Link } from 'gatsby'

export default function ErrorPage(){
    return(
        <div>
            <h5>worng page</h5>
            <Link to='/'>go to home</Link>
        </div>
    )
}