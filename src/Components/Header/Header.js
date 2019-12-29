import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../Assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="container container--space-between">
          <span>
            <i className="fas fa-envelope"></i>singithi.kandage@gmail.com
          </span>

          <nav className="nav">
            <ul className="nav__menu nav__menu--width_10 ">
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
        </div>
        <div className="line line--full_width line--green "></div>
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
                <li className="nav__menuItem nav__menuItem--uppercase">Blog</li>
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
    </header>
  );
};

export default Header;
