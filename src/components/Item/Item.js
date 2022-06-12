import React from 'react';
import { Link } from 'react-router-dom'
import './Item.css'



const Item = ({id, name, img}) => {
  

    return (
        <div className='lista'>
        <h1>{id}</h1>
        <p className='titulo'>{name}</p>
        <img src={img} alt={'img'} className='imagenes' />
        <Link to={`/detalle/${id}`} className='detalle'>Ver detalle</Link>
        </div>
    )
};


export default Item;