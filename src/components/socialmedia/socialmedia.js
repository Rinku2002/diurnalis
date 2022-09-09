import React from 'react'
import './socialmedia.css';

function Socialmedia() {
  return (
    <div className="social-button fixed">
        <span>
            {/* <i className="bx bx-share"></i> */}
        Contact us</span>
        <a href="https://www.instagram.com/diurnalis.tjc/"><i className='bx bxl-instagram-alt'></i></a>
        <a href="https://www.linkedin.com/company/diurnalis-tjc/about/"><i className='bx bxl-linkedin'></i></a>
        <a href="https://twitter.com/DVnrvjiet"><i className='bx bxl-twitter'></i></a>
        {/* <a href="#"><i className='bx bxl-discord-alt'></i></a> */}
    </div>
  )
}

export default Socialmedia