import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdWaterDrop } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdWaterDrop className="navbar-icon" />
            AZURA
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">Sign Up</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Sign Up
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
