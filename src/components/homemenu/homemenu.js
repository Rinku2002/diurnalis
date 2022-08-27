import React from 'react'
import './homemenu.css'

function Homemenu() {
  return (
    <>    
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Articles</a></li>
        {/* <li><a href="#">Gallery</a></li>
        <li><a href="#">Feedback</a></li> */}
        </ul>
    </div>
    </>
  )
}

export default Homemenu