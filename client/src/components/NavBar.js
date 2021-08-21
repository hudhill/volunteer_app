import React from 'react';
import '../css/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {


  return (

    <div className="nav-container">
      <div className="nav-bar" id="myNavBar">
      
        <Link to="/" >Home</Link>
        <Link to="/activities">Give Your Time</Link>
        <Link to="/rewards">Get Rewards</Link>      
        <Link to="/myaccount">My Account</Link>
      </div>
    </div>
  );
}

export default NavBar;