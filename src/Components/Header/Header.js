import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../Assets/img/logo.png";

const Header = () => {
  let [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* Secondary Navbar */}
        <div className="container container--space-between">
          {/* Left Side */}
          <nav className="nav">
            <ul className="nav__menu nav__menu--width_10 ">
              <li className="nav__menuItem">
                <Link to="/" className="link">
                  <div className="brand brand--mobile">
                    <img className="brand__img" src={logo} alt="Logo" />
                    <h1 className="brand__title">StockBoy</h1>
                  </div>
                </Link>
              </li>
              <li
                className="nav__menuItem nav__menuItem--disabled"
                id="contact_link"
              >
                <span>
                  <i className="fas fa-envelope"></i>singithi.kandage@gmail.com
                </span>
              </li>
            </ul>
          </nav>

          {/* Right Side */}
          <nav className="nav" id="secondary_nav">
            <ul className="nav__menu nav__menu--width_10">
              <li className="nav__menuItem">
                <Link to="/login-signup" className="link">
                  <i className="fas fa-user-circle"></i>
                  Login/Sign Up
                </Link>
              </li>
              <li className="nav__menuItem">
                <i className="fas fa-heart"></i>
              </li>
            </ul>
          </nav>

          <nav className="nav" id="collapse_nav">
            <ul className="nav__menu nav__menu--width_10">
              <li
                className="nav__menuItem nav__menuItem--disabled"
                onClick={() => {
                  toggleCollapsed();
                }}
              >
                <span>
                  <i className="fas fa-bars" id="bars"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Navbar Line */}
        <div
          className="container container--centered"
          style={
            isCollapsed
              ? { display: "none", visibility: "visible" }
              : { display: "block", visibility: "visible" }
          }
        >
          <div className="line line--full_width line--green "></div>
        </div>

        {/* Main Navbar */}
        <div
          style={
            isCollapsed
              ? { display: "none", visibility: "visible" }
              : { display: "inline", visibility: "visible" }
          }
        >
          <div className="container container--centered">
            <nav className="nav">
              <ul className="nav__menu nav__menu--width_15">
                <Link to="/about" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    About
                  </li>
                </Link>
                <Link to="/vendors" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    Vendors
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    Products
                  </li>
                </Link>
              </ul>
            </nav>
            <Link to="/" className="link">
              <div className="brand">
                <img className="brand__img" src={logo} alt="Logo" />
                <h1 className="brand__title">StockBoy</h1>
              </div>
            </Link>
            <nav className="nav">
              <ul className="nav__menu nav__menu--width_15">
                <Link to="/connect" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    Connect
                  </li>
                </Link>
                <Link to="/blog" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    Blog
                  </li>
                </Link>
                <Link to="/links" className="link">
                  <li className="nav__menuItem nav__menuItem--uppercase">
                    Links
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
