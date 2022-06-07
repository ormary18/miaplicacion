import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsId } from '../Productos/Productos'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  const {Id} = useParams()


  useEffect(() => {
    getProductsId(Id).then(response =>{
      setProduct(response)

    })
  }, [])
   
  return (
       <div> 
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        
        </div>
  )
}

export default ItemDetailContainer;