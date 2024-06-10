import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown_icon.png";

// Component Navbar
// Displays a responsive navbar with navigation links, login/logout functionality,
// and a cart icon displaying the total number of items in the cart
const Navbar = () => {
  /* To manage the state of the active menu item in the navigation bar */
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  // Toggles the visibility of the navigation menu when the dropdown icon is clicked
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      {/* Logo and brand name */}
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <img
        className="nav_dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />

      {/* Navigation menu */}
      <ul ref={menuRef} className="nav-menu">
        {/* Shop category links (Shop, Men, Women, Kids) */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("admin");
          }}
        >
          {/* <Link style={{ textDecoration: "none" }} to="http://localhost:5173/">Admin</Link> */}

          <a style={{ textDecoration: "none" }} href="/admin">
            Admin
          </a>
        </li>
      </ul>

      {/* Login and Cart section */}
      <div className="nav-login-cart">
        {/* Conditional rendering for the login button if there is an authentication token in localStorage */}
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;