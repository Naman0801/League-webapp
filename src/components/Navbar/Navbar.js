import React from "react";
import "./Navbar.css";
import logo from "../../img/quizando-logo.png";
import navLogin from "../../img/nav-login.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" />
        <div>
          <p>Live!</p>
          <p>Classics</p>
          <p>Free Games</p>
          <p>Private Events</p>
          <p>Our Partners</p>
        </div>
      </div>
      <div className="navbar__right">
        <select>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
        </select>
        <img src={navLogin} alt="nav-login" />
        <p>Login</p>
        <span>&nbsp; | &nbsp;</span>
        <p>Sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
