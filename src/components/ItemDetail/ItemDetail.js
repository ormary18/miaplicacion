import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id, description, name}) => {
  return (
    <div>
      <h1>Detalle</h1>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h4>{description} </h4>

      <div>
        <ItemCount stock={10} />
        <button>Agregar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
