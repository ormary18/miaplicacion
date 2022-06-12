
const products = [
    { 
        id: '1', 
        name: 'Cuadro Personalizado', 
        img: './imagen/cuadro1.jpg',
        price: 50, 
        category: 'Diseño', 
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
    category: 'Personalizacion', 
    img:'./imagen/Zapatillas.jpg', 
    stock: 5, 
    description:'Zapatillas con dibujos artisticos'}
]



export const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoriaId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoriaId))
        }, 500)
    })

}
