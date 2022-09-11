import React from 'react'
import './elementsoftovnr.css';

function Elementsoftovnr() {
  return (
    <div className='h100 pt'>
        <h2>Elements of TOV.</h2>
        <div className='menuG d-flex flex-row w-100 justify-content-evenly pt-5'>
          <a className='etovO' href='#quickies'>Quickies</a>
          <a className='etovO' href='#shorts'>Shorts</a>
          <a className='etovO' href='#featured'>Featured!</a>
        </div>
    </div>
  )
}

export default Elementsoftovnr