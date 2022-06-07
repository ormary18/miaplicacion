import React from 'react';
import { Link } from 'react-router-dom'




const Item = ({id, name, img, }) => {
    return (
        <div>
        <h1>{id}</h1>
        <p>{name}</p>
        <p>{img}</p>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
};


export default Item;