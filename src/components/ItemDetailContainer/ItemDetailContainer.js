import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProducts } from '../Productos/Productos'





const ItemDetailContainer = () => {
   
  return (
       <div> 
            
            <ItemDetail {...getProducts}/>
        
        </div>
  )
}

export default ItemDetailContainer;