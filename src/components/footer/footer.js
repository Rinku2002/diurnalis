import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='bg-dark text-light' id='footer'>
      <div className="footer p-5">
        <div className="row justify-content-evenly">

          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h1>Diurnalis</h1>
            <p>Journalism club of VNRVJIET</p>
          </div>

          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h3>Quick Links</h3>
              <ul className='list-group'>
                <a href="/"><li className='bg-dark text-light p-2'>Home</li></a>
                <a href="/articles"><li className='bg-dark text-light p-2'>Articles</li></a>
                <a href="/aboutus"><li className='bg-dark text-light p-2'>About</li></a>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer