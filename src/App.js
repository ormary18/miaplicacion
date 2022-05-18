import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      
        <NavBar /> 
        <ItemListContainer greeting = "Arte por el Mundo"/>
       
      
    </div>
  );
}

export default App;
