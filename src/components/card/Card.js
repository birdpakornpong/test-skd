import React, { useEffect, useState } from 'react'
import CardHeader from './CardHeader'
import CardMain from './CardMain'
import axios from 'axios'
import './Card.css'

export default function Card() {
  const  [data, setData]= useState(null)

  useEffect(async () => {
     const { data } = await axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
     setData(data)
  }, [])
  return (
    <>
    {data && data.map((item,index) => {
        return (
          <div className="card width-card" key={index}>
            <div className="card-body">
              <CardHeader data={item}/>
              <hr></hr>
              <CardMain data={item}/>
            </div>
          </div>
        )       
      })}
    </>  
  )
}