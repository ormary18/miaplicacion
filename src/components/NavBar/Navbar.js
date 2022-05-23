import React from 'react';
import './Navbar.css';
import Logo from './Img/Logo.png';
import CarWidget from '../CarWidget/CarWidget';


const NavBar = () => {
  return (
    <nav>
      <h1> 
      <img src={Logo} className='logo'></img>
      </h1>
      <div className='menu-ecommerce'>
        <button>Home</button>
        <button>Productos</button>
        <button>Contacto</button>
        <button>Blog</button>

      </div>
      <CarWidget />
    </nav>
  );
};

export default NavBar;
