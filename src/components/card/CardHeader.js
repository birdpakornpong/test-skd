import React, { useState } from 'react'
import './CardHeader.css';
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
export default function CardHeader() {
    const  [statusFavorite, setStatusFavorite] = useState(false)
    const favoritehanler = () => {
        setStatusFavorite(!statusFavorite)
    }
  return (
    <div className='row'>
        <div className='col-3'>
            <img className="logo" src="https://tcas-assets.skooldio.com/icons/edugroup/med.png"></img>
        </div>
        <div className='col-7'>
            <span className="text-header">คณะวิศวกรรมศาสตร์</span>
            <p className='text-header2'>สาขาวิศวกรรมทั่วไป</p>
            <span className="text-header3">จุฬาลงกรณ์มหาวิทยาลัย</span>
        </div>
        <div className='col-2 text-end' onClick={favoritehanler}>
            { statusFavorite ? 
                <FavoriteSharpIcon className='color-favorite'/> 
                : <FavoriteBorderSharpIcon className='color-favorite'/>
            }      
        </div>
    </div>
  )
}
