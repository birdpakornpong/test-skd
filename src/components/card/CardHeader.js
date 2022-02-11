import React, { useState } from 'react'
import './CardHeader.css';
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
export default function CardHeader(props) {
    const {data} = props
    const  [statusFavorite, setStatusFavorite] = useState(true)
    const favoritehanler = () => {
        setStatusFavorite(!statusFavorite)
    }
  return (
    <div className='row'>
        <div className='col-3'>
            <img className="logo" src={data.logo}></img>
        </div>
        <div className='col-8'>
            <span className="text-header">{data.faculty.name}</span>
            <p className='text-header2'>{data.name}</p>
            <span className="text-header3">{data.faculty.university.name}</span>
        </div>
        <div className='col-1 icon-padding' onClick={favoritehanler}>
            { statusFavorite ? 
                <FavoriteSharpIcon className='color-favorite'/> 
                : <FavoriteBorderSharpIcon className='color-favorite'/>
            }      
        </div>
    </div>
  )
}
