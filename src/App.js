import React from 'react';
import './App.css'
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
      
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Productos"/>}/>
            <Route path='/categoria' element={<ItemListContainer />}/>
            <Route path='/carta' element={<cart />}/>
            <Route path='/detalle/:productId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>PAGE NOT FOUND 403</h1>} />
          </Routes>
        </BrowserRouter>
       

        
    </div>
  );
}

export default App;
