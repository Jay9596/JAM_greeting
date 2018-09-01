import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hello from the second page</h1>
    <p>I must have called a wrong route</p>
    <p>To tell you I'm trying everything that I can</p>
    <p>But when I call you never seem to be <Link to="/">HOME</Link></p>
  </div>
)

export default SecondPage
