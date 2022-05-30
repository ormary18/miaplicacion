import React from 'react';
import Item from '../Item/Item';

function ItemList ({productos}){

    return(
        <div style={{ backgroundColor: true ? 'red' : 'green'}}>
        {productos.map( prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
};

export default ItemList;