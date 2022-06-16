import React from "react";
import { useCartContext } from "../../context/CartContext";


const ItemCart = ({prod}) => {
   const {removeProduct} = useCartContext();
return (

    <div>
        <p>Nombre: {prod.name}</p>
        <p>Cantidad: {prod.quantity}</p>
        <p>precio: ${prod.price}</p>
        <p>subtotal: ${prod.quantity * prod.price} </p>
        <button onClick={() => removeProduct(prod.id)}>Eliminar</button>


    </div>





)






}

export default ItemCart;