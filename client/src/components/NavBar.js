import { useState } from "react";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import { HamburgerSlider as Hamburger } from "react-animated-burgers";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  function close() {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  }

  function buttons(active) {
    if (active) {
      return (
        <>
          <Link to="/" onClick={() => close()}>
            Home
          </Link>
          <Link to="/activities" onClick={() => close()}>
            Give Your Time
          </Link>
          <Link to="/rewards" onClick={() => close()}>
            Get Rewards
          </Link>
          <Link to="/myaccount" onClick={() => close()}>
            My Account
          </Link>
        </>
      );
    }
  }

  return (
    <div className="nav-container">
      <div className="nav-bar" id="myNavBar">
        <Hamburger isActive={open} toggleButton={toggle} barColor="white" />
        {buttons(open)}
      </div>
    </div>
  );
};

export default NavBar;
