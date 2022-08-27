import React from 'react'
import './socialmedia.css';

function Socialmedia() {
  return (
    <div class="social-button fixed">
        <span>
            {/* <i class="bx bx-share"></i> */}
        Contact us</span>
        <a href="#"><i class='bx bxl-instagram-alt'></i></a>
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        {/* <a href="#"><i class='bx bxl-discord-alt'></i></a> */}
    </div>
  )
}

export default Socialmedia