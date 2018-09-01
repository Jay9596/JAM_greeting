import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>Why are you lurking here ? ノಠ_ಠノ</p>
    <Link to="/">Go to homepage</Link>
  </div>
)

export default NotFoundPage
