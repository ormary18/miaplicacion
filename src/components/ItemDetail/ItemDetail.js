import React from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {link} from "react-router-dom";


const ItemDetail = ({id, description, name, price, stock}) => {

const [goToCart, setGoToCart] =useState(); 

const onAdd = (cantidad) =>{
  setGoToCart(cantidad);
}

  return (
    <div className="lista-productos">
      <h1>Detalle</h1>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h4>{description} </h4>
      <p>{price}$</p>
      <p>Quedan {stock}</p>
      <div>
        <img src="../imagen/DetalleCuadro.jpg" id="regalo"></img>
      </div>


      <div>
        {goToCart ? <link to ='/'Cart>Finalizar compra</link> : <ItemCount stock={10} onAdd={onAdd} initial={1} />}
      </div>
    </div>
  );
};

export default ItemDetail;
