import React, { useState } from 'react'
import './aboutus.css'
import Modal from '../../components/modal/modal'
import Data from '../../data.json';

function Aboutus() {

  // let [title,setModalData]=useState("");
  let [data,setData]=useState({})

  function setModalData(e){
    Data.forEach((v)=>{
      if(v.position===e){
          setData(v);
      }
    })
  }

  return (
    <div className='container mh100 d-flex flex-column'>
      <h2 className='display-5 fw-bolder mb-4'>About Us</h2>
        <p className="text-decoration-none text-dark">
          Governing & Authorization Council
        </p>
      <div>
        <div className="">
          <ul>
            <li onClick={()=>setModalData('President')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">President </li>
            <li onClick={()=>setModalData('Vice President')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Vice President</li>
            <li onClick={()=>setModalData('General Secretary')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">General Secretary</li>
            <li onClick={()=>setModalData('Operational Head')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Operational Head</li>
            <li onClick={()=>setModalData('Chamberlain (Treasurer)')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Chamberlain (Treasurer)</li>
            <li onClick={()=>setModalData('Design Executive')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Design Executive</li>
            <li onClick={()=>setModalData('Technical Development Director.')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Technical Development Director.</li>
          </ul>
        </div>
      </div>


        <p className="text-decoration-none text-dark">
          Editors & Advisory Council
        </p>
      <div className="" id="">
        <div className="">
          <ul>
            <li onClick={()=>setModalData('Managing Editor/Developmental Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Managing Editor/Developmental Editor</li>
            <li onClick={()=>setModalData('Sub Editor/Copy Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Sub Editor/Copy Editor</li>
            <li onClick={()=>setModalData('Proofreader')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Proofreader</li>
            <li onClick={()=>setModalData('Structural Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Structural Editor</li>
            <li onClick={()=>setModalData('Line Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Line Editor</li>
          </ul>
        </div>
      </div>

      
        <p className="text-decoration-none text-dark">
          The Press Council
        </p>
      <div className="" id="">
        <div className="">
          <ul>
            <li onClick={()=>setModalData('Journalists')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Journalists</li>
            <li onClick={()=>setModalData('Reporters')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Reporters</li>
            <li onClick={()=>setModalData('Article Writers')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Article Writers</li>
            <li onClick={()=>setModalData('Content Fetchers')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Content Fetchers</li>
          </ul>
        </div>
      </div>
      <Modal data={data}/>
    </div>
  )
}

export default Aboutus