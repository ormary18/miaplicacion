import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProducts } from '../Productos/Productos'





const ItemDetailContainer = () => {
   
  return (
       <div> 
            <h1>Detalle del producto</h1>
            <ItemDetail {...getProducts}/>
        
        </div>
  )
}

export default ItemDetailContainer;