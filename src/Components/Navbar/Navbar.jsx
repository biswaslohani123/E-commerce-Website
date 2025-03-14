import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>UNANIMOUS</p>
      </div>
      <ul className="nav-menu">
        <Link to='/' style={{ textDecoration: 'none' , color: 'gray'}}>
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop{menu === "shop" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to='mens' style={{ textDecoration: 'none' , color: 'gray'}}>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            Mens{menu === "mens" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to='/womens' style={{ textDecoration: 'none' , color: 'gray'}}>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            Womens{menu === "womens" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to='/kids' style={{ textDecoration: 'none', color: 'gray'}}>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </li>
        </Link>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
        <button>Login</button>
        
        </Link>
        <Link to='/cart'>
        <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
