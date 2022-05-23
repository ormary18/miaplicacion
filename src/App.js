import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [show, setShow] =useState(true)
      
  return (
    <div className="App">
        <NavBar /> 
        <ItemListContainer greeting = "Arte por el Mundo"/>
        <ItemCount/>

        
    </div>
  );
}

export default App;
