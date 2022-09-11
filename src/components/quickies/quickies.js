import React from 'react'
import './quickies.css'

function Quickies() {
  return (
    <div className='p-4 h100 bg-blue'>
        <h2 className='display-1 fw-bolder text-white pt' id='quickies'>Quickies.</h2>
        <div className='mw1000 mt-4 d-block mx-auto mt-5'>
            <hr className='hr1'/>
            <br/>
            <p className='info text-center fw-bolder h5'>Information to help you plan your budget, find the best discounts, money safety tips, and financial support for students.</p>
        </div>
    </div>
  )
}

export default Quickies