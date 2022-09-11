import React from 'react';
import Data from '../../data.json';
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import './composition.css';

const Composition = () => {
  let [data,setData]=useState({})
  function setModalData(e){
    Data.forEach((v)=>{
      if(v.position===e){
          setData(v);
      }
    })
  }


  return (
    <div className='mt p-3'>
        <div class="row flex-row bd-highlight">
      <div class="col col-lg-6 col-md-6 col-sm-12 col-12 p-2 bd-highlight">
      <p className="text-decoration-none text-dark p-3">
          Governing & Authorization Council
        </p>
      <div>
        <div className="">
          <ul>
            <li onClick={()=>setModalData('Vice President(Administrative)')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Vice President(Administrative)</li>
            <li onClick={()=>setModalData('Vice President(Executive)')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Vice President(Executive)</li>
            <li onClick={()=>setModalData('General Secretary')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">General Secretary</li>
            <li onClick={()=>setModalData('Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Editor</li>
            <li onClick={()=>setModalData('HR, Internal Quality and Serjeant at Arms')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">HR, Internal Quality and Serjeant at Arms</li>
            <li onClick={()=>setModalData('Chamberlain')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Chamberlain</li>
            <li onClick={()=>setModalData('Design Executive')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Design Executive</li>
            <li onClick={()=>setModalData('Technical Executive')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Technical Executive</li>
            <li onClick={()=>setModalData('Publicity & Communications Executive')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Publicity & Communications Executive</li>
            <li onClick={()=>setModalData('Deputy Editor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Deputy Editor</li>
            <li onClick={()=>setModalData('Student Coordinator & Operations Advisor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Student Coordinator & Operations Advisor</li>
          </ul>
        </div>
      </div>
      </div>
      <div class="col col-lg-6 col-md-6 col-sm-12 col-12 p-2 bd-highlight">
      <p className="text-decoration-none text-dark p-3">
          Editors & Advisory Council
        </p>
      <div className="" id="">
        <div className="">
          <ul>
            <li onClick={()=>setModalData('Strategic Advisor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Strategic Advisor</li>
            <li onClick={()=>setModalData('Analogue Advisor')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Analogue Advisor</li>
            <li onClick={()=>setModalData('Head of Press Council')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Press Council</li>
            <li onClick={()=>setModalData('Head of Design Council')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Design Council</li>
            <li onClick={()=>setModalData('Head of Documenting  Approvals Council')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Documenting  Approvals Council</li>
            <li onClick={()=>setModalData('Head of Sponsorship, Finance & Logistics')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Sponsorship, Finance & Logistics</li>
            <li onClick={()=>setModalData('Head of Technical Council')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Technical Council</li>
            <li onClick={()=>setModalData('Head of Publicity & Public Relations')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="cursorPointer">Head of Publicity & Public Relations</li>
          </ul>
        </div>
      </div>
      </div>
      <Modal data={data} />
    </div>
    </div>
  )
}

export default Composition