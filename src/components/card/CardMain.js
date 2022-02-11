import React from 'react'
import './CardMain.css'
export default function CardMain() {
  return (
    <div>
        <div className='row mb-3'>
            <div className='col-3 align-self-center'>
                <span>รอบที่เปิด</span>
            </div>
            <div className='col-9'>
                <div>
                    <button type="button" className="btn btn-success circle">1</button>
                    <button type="button" className="btn btn-success circle mx-2">2</button>
                    <button type="button" className="btn btn-success circle">3</button>
                    <button type="button" className="btn btn-success circle mx-2">4</button>
                    <button type="button" className="btn btn-success circle">5</button>
                </div>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-8  align-self-center'>
                <span>รอบที่ 4 : Admission</span>
            </div>
            <div className='col-4'>
                <button type="button" className="btn btn-outline-danger edit-point">แก้ไขคะแนน</button>
            </div>
        </div>
        <div className='row justify-content-between'>
            <div className='col-4 text-center'>a</div>
            <div className='col-4 text-center'>b</div>
        </div>
        <div className='row'>
            <div className='col-4 text-center'>a</div>
            <div className='col-4 border-box text-center'>b</div>
            <div className='col-4 text-center'>c</div>
        </div>
    </div>
  )
}