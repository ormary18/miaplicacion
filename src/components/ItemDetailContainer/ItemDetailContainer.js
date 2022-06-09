import React from 'react'
import './ItemDetailContainer.css'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsId } from '../Productos/Productos'



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  
  const {productId} = useParams()

  useEffect(() => {
    getProductsId(productId).then(response => {
        setProduct(response)
    })
}, [])
   
  return (
       <div> 
            <h1 className='producto'>Detalle del Producto</h1>
            <ItemDetail {...product} />
        
        </div>
  )
}

export default ItemDetailContainer;