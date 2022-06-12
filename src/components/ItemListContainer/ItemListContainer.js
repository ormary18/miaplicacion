import React from "react";
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getData, getProductsByCategory} from "../Productos/Productos";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting}) => {
const [products, setProducts] = useState([])

const {categoriaId} = useParams()


useEffect(() => {
    if(!categoriaId){
        getData().then(response => {
            setProducts(response)
        })
    } else {
        getProductsByCategory(categoriaId).then(response =>{
            setProducts(response)
        })
    }
   
}, [categoriaId])


return(
    <div className='ItemListContainer'>
        <h1>{ greeting }</h1>
        <ItemList products={products}/>
    </div>
)
}

export default ItemListContainer