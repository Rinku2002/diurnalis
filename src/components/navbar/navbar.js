import React from 'react'
import './navbar.css'
import Logo from '../../images/d black.jpg';

function Navbar() {
  return (
    <div>
            <nav className="first navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="nav-link active" aria-current="page" href="/">
                <img className='w100 rounded rounded-circle' src={Logo} alt='Logo' />
            </a>
            <h3 className='navHead'>Diurnalis - The Journalism Club</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNavAltMarkup">
                <ul className='navbar-nav justify-content-end'>
                    <a className="nav-link active fw-bolder" aria-current="page" href="/">Home</a>
                    <a className="nav-link active" href="/aboutus">About Us</a>
                    <a className='nav-link active' href="/composition">Composition</a>
                    <a className="nav-link active" href="/fas">Faculty Advisory Committee</a>
                    <a className="nav-link active" href="/joinus">Join Us!</a>
                </ul>
            </div>
        </div>
    </nav>
    
    </div>

  )
}

export default Navbar