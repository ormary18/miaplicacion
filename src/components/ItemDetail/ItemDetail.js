import React from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {Link} from "react-router-dom";
import {useCartContext} from "../../context/CartContext"


const ItemDetail = ({id, description, name, price, stock, img}
) => {

const [goToCart, setGoToCart] = useState(false); 
const {addProduct} = useCartContext();

const OnAdd = (quantity) =>{

  setGoToCart(true);
  addProduct(id, description, name, price, stock, img, quantity);
}

  return (
    <div className="lista-productos">
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{description} </h3>
      <p>{price}$</p>
      <p>Quedan {stock}</p>
      <div className="images"> 
        <img src={img} alt={name} />
      </div>
     
      
     
      <div>
        {
      goToCart 
        ? <Link to ='/cart'>Finalizar compra</Link> 
        : <ItemCount stock={stock} OnAdd={OnAdd} initial={1} />
        }
      </div>

    </div>
  );
};

export default ItemDetail;
