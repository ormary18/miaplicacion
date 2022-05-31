import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getProducts } from "../Productos/Productos";


const ItemDetail = ({stock, imagen, descripcion, precio, subtitulo, nombre}) => {
 
    return(
        <div>
    
           <div>
               
               <p> {subtitulo}</p>
                <h2>{nombre}</h2>     
                <p >{descripcion} </p>
                <div ><h4>ENVIO GRATIS</h4>
                <h5 >Solo en Panama, Ciudad de Panama</h5>
                
                </div> 
                
                <p>{precio}</p>
               
            </div>
            <div>
                <ItemCount stock={10} initial={0}/>
            </div>
            
        </div>

    )

}

export default ItemDetail;