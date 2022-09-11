import React from 'react'
// import Diurnalis from '../../images/Diurnalis.jpg';
import './home.css'
import Quickies from '../../components/quickies/quickies';
import Elementsoftovnr from '../../components/elementsoftovnr/elementsoftovnr';
import Shorts from '../../components/shorts/shorts';
import News from '../../components/news/news';

function Home() {
  return (
    <div className=''>
    <div className="body">
        <div className=''>
            <div className=' fw-bolder text-light d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mainHead display-1 text-light mt'>TIMES OF VNRVJIET</h1>
                <p className='h6 text-light about'> - A Diurnalis's Publication</p>
                <div className='menuG d-flex flex-row w-100 justify-content-evenly pt-5'>
                  <a className='menuO' href='#quickies'>Quickies</a>
                  <a className='menuO' href='#shorts'>Shorts</a>
                  <a className='menuO' href='#featured'>Featured!</a>
                </div>
            </div>
        </div>
    </div>

    <Quickies/>
    <Shorts/>
    <News/>
    <Elementsoftovnr/>

  </div>
  )
}

export default Home