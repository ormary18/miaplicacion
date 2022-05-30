import React from "react";
import {useState} from "react";


const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        alert("agregado al carro")
    }

    return(        
        <div className='cardBoton' >
            <div className="signo" onClick={restar}>-</div>
            <div className='agregarCarrito'>
                <p className='contador'>{count}</p>
                <p className='texto' onClick={onAdd}>Agregar</p>
            </div>
            <div className="signo2" onClick={sumar}>+</div>
        </div>
    )
}

export default ItemCount;

