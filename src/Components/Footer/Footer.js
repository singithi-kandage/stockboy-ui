import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content footer__content--space_between">
        {/* Stay Connected column */}
        <div className="column column--width30">
          <h3 className="column__header">Author</h3>
          <p className="text--silver">Singithi Kandage</p>
          <ul className="column__list">
            <li className="column__list_item">
              <i className="fas fa-envelope"></i>singithi.kandage@gmail.com
            </li>
            <li className="column__list_item">
              <i className="fab fa-linkedin"></i>linkedin.com/in/skandage/
            </li>
            <li className="column__list_item">
              <i className="fab fa-github"></i>github.com/singithi-kandage
            </li>
            <li className="column__list_item">
              <i className="fas fa-star"></i>singithi-kandage.github.io/
            </li>
          </ul>
        </div>

        {/* Navigate column */}
        <div className="column column--width30">
          <h3 className="column__header">Navigate</h3>
          <ul className="column__list">
            <Link to="/" className="link">
              <li className="column__list_item">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="column__list_item">About</li>
            </Link>
            <Link to="/vendors" className="link">
              <li className="column__list_item">Vendors</li>
            </Link>
            <Link to="/products" className="link">
              <li className="column__list_item">Products</li>
            </Link>
            <Link to="/connect" className="link">
              <li className="column__list_item">Connect</li>
            </Link>
            <Link to="/blog" className="link">
              <li className="column__list_item">Blog</li>
            </Link>
            <Link to="/links" className="link">
              <li className="column__list_item">Links</li>
            </Link>
          </ul>
        </div>

        {/* Stay Connected column */}
        <div className="column column--width30">
          <h3 className="column__header">Stay Connected</h3>
          <form className="form">
            <legend className="form__legend form__legend--light ">
              Subscribe for more information
            </legend>
            <div className="form__group">
              <input
                className="input"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <button className="button button--alert button--half_width">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footer__content footer__content--center">
        <div className="line line--full_width line--silver"></div>
        <p className="">2019 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
