import React from "react";
import "./Navbar.css";
import Logo from "./Img/Logo.png";
import CarWidget from "../CarWidget/CarWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <img src={Logo} className="logo" alt=""></img>
      </h1>
      <div className="menu-ecommerce">
        <button>
          <NavLink to={"./"}>Home</NavLink>
        </button>
        <button>
          <NavLink to={"./categoria/Diseño"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Diseño</NavLink>
        </button>
        <button>
          <NavLink to={"./categoria/Arte"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Arte</NavLink>
        </button>
        <button>
          <NavLink to={"./categoria/Personalizacion"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Personalizacion</NavLink>
        </button>
        <button>Contacto</button>
        <button>Blog</button>
      </div>
      <NavLink to={"/cart"}>
        <CarWidget />
      </NavLink>
    </nav>
  );
};

export default NavBar;
