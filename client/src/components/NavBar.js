import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {

  return (
    <div className="NavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activity-search">Activity Search</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>
    </div> 
  
  );

}

export default NavBar;