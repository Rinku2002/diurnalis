import React from 'react'
import './homemenu.css'

function Homemenu() {
  return (
    <div className=''>
      <input type="checkbox" id="active"/>
      <label htmlFor="active" className="menu-btn bg-light"><span></span></label>
      <div className="wrapper">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">Composition</a></li>
          <li><a href="/articles">Articles</a></li>
          {/* <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li> */}
          </ul>
      </div>
    </div>
  )
}

export default Homemenu