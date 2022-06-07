import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {link} from "react-router-dom";

const ItemDetail = ({id, description, name}) => {

const [goToCart, setGoToCart] =useState(); 

const onAdd = (cantidad) =>{
  setGoToCart(cantidad);
}

  return (
    <div>
      <h1>Detalle</h1>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h4>{description} </h4>

      <div>
        {goToCart ? <link to ='/'Cart>Finalizar compra</link> : <ItemCount stock={10} onAdd={onAdd} initial={1} />}
        <button>Agregar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
