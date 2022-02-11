import React, { useState } from 'react'
import './CardMain.css'
export default function CardMain(props) {
    const { data } = props

    const statusRound = (value) => {
        return !(value > 0)
    }
    const getYear = (data) => {
        let year = data.score && data.score.year || 0
        return String(year).substring(2)
    }

    const getPointMin = (data) => {
        let point = data.score && data.score.min || 0
        return point
    }

    const getPointMax = (data) => {
        let point = data.score && data.score.max || 0
        return point
    }

    const getPointAvg = (data) => {
        let point = data.score && data.score.avg || 0
        return point
    }

  return (
    <div>
        <div className='row mb-3'>
            <div className='col-3 align-self-center'>
                <span className="text-round-open">รอบที่เปิด</span>
            </div>
            <div className='col-9'>
                <div>
                    <button type="button" disabled={statusRound(data.roundSeats[0])} className="btn btn-success circle">1</button>
                    <button type="button" disabled={statusRound(data.roundSeats[1])} className="btn btn-success circle mx-2">2</button>
                    <button type="button" disabled={statusRound(data.roundSeats[2])} className="btn btn-success circle">3</button>
                    <button type="button" disabled={statusRound(data.roundSeats[3])} className="btn btn-success circle mx-2">4</button>
                    <button type="button" disabled={statusRound(data.roundSeats[4])} className="btn btn-success circle">5</button>
                </div>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-8  align-self-center'>
                <span className='text-round'>รอบที่ 4 : {data.score ? data.score.scoreType : "Admission"}</span>
            </div>
            <div className='col-4'>
                <button type="button" className="btn btn-outline-danger edit-point">แก้ไขคะแนน <img src="/img-btn.png" className='logo-btn'/> </button>
            </div>
        </div>
        <div className='row justify-content-between'>
            <div className='col-4 text-center align-self-center'>
                <img src="/logo.png" className='logo-img'/>
            </div>
            <div className='col-5 text-center'>
                <span className='point-text'>คะแนนของคุณคือ</span>
                <p className='point'>23,453</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-4 text-center'> 
                <span className='point-oth'>{getPointMin(data)}</span>
                <p className='point-text-oth'>คะแนนต่ำสุด {getYear(data)}</p>
            </div>
            <div className='col-4 border-box text-center'>
                <span className='point-oth'>{getPointMax(data)}</span>
                <p className='point-text-oth'>คะแนนเฉลี่ย {getYear(data)}</p>            
            </div>
            <div className='col-4 text-center'> 
                <span className='point-oth'>{getPointAvg(data)}</span>
                <p className='point-text-oth'>คะแนนสูงสุด {getYear(data)}</p>        
            </div>
        </div>
    </div>
  )
}
