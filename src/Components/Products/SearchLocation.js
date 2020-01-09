import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import hero_image from "../../Assets/img/hero_image2.jpg";

const SearchLocation = () => {
  return (
    <section className="hero">
      <div className="hero__block hero__block--overlay">
        <div
          className="form_container form_container--column form_container--color_info"
          style={{
            width: "50%",
            margin: "0 auto"
          }}
        >
          <header className="form_container__header form_container__header--color_alert">
            Filter Products by City
          </header>
          <form
            className="form"
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div className="form__group" style={{ width: "70%" }}>
              <input
                className="input"
                type="text"
                placeholder="City"
                value="Waterloo"
              />
            </div>
            <div className="form__group">
              <Link to="/products/search-products" className="link">
                <button className="button button--alert button--full_width">
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hero__block">
        <img className="hero__image" src={hero_image} alt="Hero" />
      </div>
    </section>
  );
};

export default connect(state => ({}), {})(SearchLocation);
