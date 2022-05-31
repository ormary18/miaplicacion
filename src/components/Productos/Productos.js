import React from "react";


const products = [
    { 
        id: '1', 
        name: 'Cuadro Personalizado', 
        price: 50, 
        category: 'Arte', 
        img:'./imagen/cuadro1.jpg', 
        stock: 15, 
        description:'Un regalo a la medida, un cuadro personalizado con todas las caracteristicas del cliente'
    },
    { 
    id: '2', 
    name: 'Taza personalizada', 
    price: 30, 
    category: 'Arte', 
    img:'./imagen/Taza.jpg', 
    stock: 10, 
    description:'Taza personalizada blanco y negro con caja y envoltura para regalo'},

    { id: '3', 
    name: 'Personalización de Zapatillas', 
    price: 45, 
    category: 'Arte', 
    img:'./imagen/Zapatillas.jpg', 
    stock: 5, 
    description:'Zapatillas con dibujos artisticos'}
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}