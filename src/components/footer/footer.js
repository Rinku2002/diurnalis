import React from 'react'
import './footer.css';
import footerimage from '../../images/FOOTER.jpg';

function Footer() {
  return (
    // <div className='text-light' id='footer'>
    //   <div className="footer p-5">
    //     <div className="row justify-content-evenly">
    //       <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
    //         <img className="imagefooter" src={footerimage}/>
    //       </div>
    //       <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
    //         <h3>Quick Links</h3>
    //           <ul className='list-group'>
    //             <a href="/"><li className='text-light p-2'>Home</li></a>
    //             <a href="/articles"><li className='text-light p-2'>Articles</li></a>
    //             <a href="/aboutus"><li className='text-light p-2'>About</li></a>
    //           </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    <footer className="footer-distributed">
      <div className="footer-left d-block mx-auto">
        <img className="imagefooter" src={footerimage} alt="footer"/>
      </div>
      <div className=''>
        <p className="footer-links text-center m-0">
            <a href="/" className='link-1'>Home</a>
            <a href="/aboutus">About us</a>
          </p>
          <p className='text-light text-center'>&#169; 2022 Diurnalis - The Journalism Club, All rights reserved.</p>
        </div>
		</footer>
  )
}

export default Footer