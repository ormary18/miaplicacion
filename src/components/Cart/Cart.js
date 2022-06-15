import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
    {
      cart.map(prod => <ItemCart key={prod.id} prod={prod} />)
    }
    <p>
      total : {totalPrice()}
    </p>
    </>

  );
};

export default Cart;
