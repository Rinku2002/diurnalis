import './shorts.css'
import { useState, useEffect } from 'react';

function Shorts() {

    let [d,setD]=useState(
        []
    );
    useEffect(() => {
        setD([
            {src:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",head:"Sub head",desc:"There is just enough space here for several lines of text. Use it well."},
            {src:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",head:"Sub head",desc:"There is just enough space here for several lines of text. Use it well."},
            {src:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",head:"Sub head",desc:"There is just enough space here for several lines of text. Use it well."}
        ])
    },[]);

    return (
        <div className='p-4 mh100 bg-p'>
            <h2 className='display-1 fw-bolder text-white pt' id='shorts'>Shorts.</h2>
            <div className=''>
                <div className='mx-auto row'>
                    {
                        d.map((v,index)=>
                            <div className='col col-lg-4 col-md-6 col-sm-12 col-12' key={index}>
                                <div className='m-5 p-2 d-flex flex-column align-items-center'>
                                    <div className='shortsImg'>
                                        <img className='w-100 rounded rounded-5' src={v.src} alt={index} />
                                    </div>
                                    <h5 className='p-2'>{v.head}</h5>
                                    <p className='p-2 text-center'>{v.desc}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default Shorts