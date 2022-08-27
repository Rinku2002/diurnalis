import React from 'react'
import './home.css'
import Svg from './svgicon'

function Home() {
  return (
    <>
    <div className="body">
        <Svg/>
        <div className='title-block'>
            <div className='title display-1 fw-bolder text-dark'>
                Diurnalis
            </div>
        </div>
    </div>
    <h1>Hello</h1>
    </>
  )
}

export default Home