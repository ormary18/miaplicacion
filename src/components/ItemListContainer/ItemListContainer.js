import React from "react";
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getData} from "../Productos/Productos";





const ItemListContainer = ({ greeting}) => {
const [products, setProducts] = useState([])

useEffect(() => {
    getData().then(response => {
        setProducts(response)
    })
}, [])


return(
    <div className='ItemListContainer'>
        <h1>{ greeting }</h1>
        <ItemList products={products}/>
    </div>
)
}

export default ItemListContainer