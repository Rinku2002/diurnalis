import React from 'react'
import { useState, useEffect } from 'react'
import './article.css';
import Loading from '../../images/loading.gif';

function Article() {
  let [d,setd]=useState({})
  let [status,setStatus]=useState(false)
    useEffect(() => {
      document.querySelector("footer").style.display="none"
      const params = new URLSearchParams(window.location.search)
      let id=params.get('id')
        fetch(`https://tovbackend.vercel.app/api/article/${id}`)
        .then(response => response.json())
        .then(data => {
            setd(data.payload)
            setStatus(true)
            document.querySelector("footer").style.display="block"
        })
    },[])
  return (
    <div className='pt pt-4 p-5 article'>
      {status===false ? 
      <div className='loading'>
        <img className='loadingImg' src={Loading} alt='loading' />
      </div>:


      <div className='mw d-block mx-auto'>
        <img className='w-100 mwi d-block mx-auto rounded rounded-5 pt' src={d.src} alt="Article" />
        <h1 className='text-center p-2'>{d.title}</h1>
        <p className='text-center'>{d.desc}</p>
        <p className='text-end'>-{d.author}</p>
      </div>
      }
    </div>
      
  )
}

export default Article