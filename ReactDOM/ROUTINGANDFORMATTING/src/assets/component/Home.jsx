import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Welcome to ABES Engg </h2>

        <div>
          <nav >
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Home