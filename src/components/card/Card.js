import React from 'react'
import CardHeader from './CardHeader'
import CardMain from './CardMain'
import './Card.css'

export default function card() {
  return (
    <div className="card width-card">
        <div className="card-body">
           <CardHeader/>
           <hr></hr>
           <CardMain />
        </div>
    </div>
  )
}