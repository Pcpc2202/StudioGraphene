import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className='test'>
      <nav className='container'>
        <div className='navbar'>
          <span>LOGO</span>
          <a href='#about'>About</a>
          <a href='#comunity'>Community</a>
          <a>Location</a>
          <a href='#menu'>Our Menu</a>
          <a>Recipes</a>
          <div className='right-navbar'>
            <a>Login</a>
            <a>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
