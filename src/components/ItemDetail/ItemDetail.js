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

const onAdd = (quantity) =>{

  setGoToCart(true);
  addProduct(id, description, name, price, stock, img, quantity);
}

  return (
    <div className="lista-productos">
      <h1>Detalle</h1>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h4>{description} </h4>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <p>{price}$</p>
      <p>Quedan {stock}</p>
      
     
      <div>
        {
      goToCart 
        ? <Link to ='/cart'>Finalizar compra</Link> 
        : <ItemCount stock={stock} onAdd={onAdd} initial={1} />
        }
      </div>

    </div>
  );
};

export default ItemDetail;
