import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './news.css'

function News() {

    let [d,setd]=useState([])
    let navigate=useNavigate();
    useEffect(() => {
        fetch('https://tovbackend.vercel.app/api/articles')
        .then(response => response.json())
        .then(data => {
            setd(data.payload)
        })
    },[])
    return (
        <div className='p-4 mh100 bg-secondary'>
            <h2 className='display-1 fw-bolder text-white pt' id='featured'>News.</h2>
            <div className='mx-auto row'>
                    {
                        d.map((v,index)=>
                            <div onClick={()=>navigate(`article?id=${v._id}`)} className='col col-lg-4 col-md-6 col-sm-12 col-12 cursorPointer' key={index}>
                                <div className='mx-5 p-2 d-flex flex-column align-items-center'>
                                    <div className='d-flex align-items-center wh'>
                                        <img className='w-100 rounded rounded-5' src={v.src} alt={`news-${index+1}`} />
                                    </div>
                                    <h5 className='p-2'>{v.title}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
        </div>
  )
}

export default News