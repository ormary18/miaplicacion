import React from 'react';
import './App.css'
import NavBar from './components/NavBar/Navbar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CartProvider from './context/CartContext';



function App() {
      
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="El Arte de hacer las cosas con Amor"/>}/>
            <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<h1>PAGE NOT FOUND 403</h1>} />
          </Routes>
          </CartProvider>
         


        </BrowserRouter>
       

        
    </div>
  );
}

export default App;
