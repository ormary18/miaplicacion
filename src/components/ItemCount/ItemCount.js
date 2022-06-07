import React from "react";
import {useState} from "react";
import './ItemCount.css';


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

    

    return(        
        <div className="card-count">
            <div onClick={restar}>-</div>
            <div>
                <p>{count}</p>
            </div>
            <div onClick={sumar}>+</div>
        </div>
    )
}

export default ItemCount;

