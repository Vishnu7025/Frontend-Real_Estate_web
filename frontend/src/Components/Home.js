import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>This is home page</h1>
        <Link to='/Login'>login</Link>
        <br />
        <Link to='/listing'>listing</Link>
    </div>
  )
}

export default Home