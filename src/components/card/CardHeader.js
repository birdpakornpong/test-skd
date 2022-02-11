import React from 'react'
import './CardHeader.css';
export default function CardHeader() {
  return (
    <div className='row'>
        <div className='col-3'>Img</div>
        <div className='col-7'>Text</div>
        <div className='col-2'>icon</div>
    </div>
  )
}