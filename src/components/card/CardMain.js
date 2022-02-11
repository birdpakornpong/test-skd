import React, { useState } from 'react'
import './CardMain.css'
export default function CardMain() {

    const statusRound = {
        roundOne: true,
        roundTwo: true,
        roundThree: false,
        roundFour: true,
        roundFive: false
    }

  return (
    <div>
        <div className='row mb-3'>
            <div className='col-3 align-self-center'>
                <span className="text-round-open">รอบที่เปิด</span>
            </div>
            <div className='col-9'>
                <div>
                    <button type="button" disabled={!statusRound.roundOne} className="btn btn-success circle">1</button>
                    <button type="button" disabled={!statusRound.roundTwo} className="btn btn-success circle mx-2">2</button>
                    <button type="button" disabled={!statusRound.roundThree} className="btn btn-success circle">3</button>
                    <button type="button" disabled={!statusRound.roundFour} className="btn btn-success circle mx-2">4</button>
                    <button type="button" disabled={!statusRound.roundFive} className="btn btn-success circle">5</button>
                </div>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-8  align-self-center'>
                <span className='text-round'>รอบที่ 4 : Admission</span>
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
                <span className='point-oth'>23,453</span>
                <p className='point-text-oth'>คะแนนของคุณคือ</p>
            </div>
            <div className='col-4 border-box text-center'>
                <span className='point-oth'>23,453</span>
                <p className='point-text-oth'>คะแนนของคุณคือ</p>            
            </div>
            <div className='col-4 text-center'> 
                <span className='point-oth'>23,453</span>
                <p className='point-text-oth'>คะแนนของคุณคือ</p>        
            </div>
        </div>
    </div>
  )
}
