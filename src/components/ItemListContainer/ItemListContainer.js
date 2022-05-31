import React from "react";
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react'
import { getProducts } from "../Productos/Productos";




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
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