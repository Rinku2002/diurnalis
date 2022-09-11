import React from 'react'
import './navbar.css'
import Logo from '../../images/Diurnalis.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
        <div className="container-fluid">
            <a className="nav-link active" aria-current="page" href="/">
                <img className='w100 rounded rounded-circle' src={Logo} alt='Logo' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNavAltMarkup">
                <ul className='navbar-nav justify-content-end'>
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/articles">Articles</a>
                    <a className="nav-link" href="/aboutus">About Us</a>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar