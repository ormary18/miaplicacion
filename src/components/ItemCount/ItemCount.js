import React from "react";
import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(parseInt(initial));

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
      setCount(parseInt(initial));

  }, [initial]);

  return (
    <div className="card-count">
      <button disabled={count <= 1} onClick={restar}>
        -
      </button>
      <p>{count}</p>
      <button disabled={count >= stock} onClick={sumar}>
        +
      </button>
      <button disabled={stock <= 0} onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
