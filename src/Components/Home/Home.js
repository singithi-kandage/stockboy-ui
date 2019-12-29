import React from "react";

import "./Home.scss";
import hero_image from "../../Assets/img/hero_image.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__block hero__block--overlay">
          <span className="centered__text centered__text--regular">
            Welcome to
          </span>
          <h1 className="centered__text centered__text--large">StockBoy</h1>
          <span className="centered__text centered__text--small">
            We're an online market place for fresh, local produce. Come see{" "}
            <br />
            what our vendors have for you!
          </span>
        </div>
        <div className="hero__block">
          <img className="hero__image" src={hero_image} alt="Hero" />
        </div>
      </section>

      {/* Extra Section */}
      <section className="extra">
        <div className="extra__card" id="card_1">
          <div className="extra__card_bullet">
            <div className="extra__card_bullet--overlay"></div>
          </div>
          <div className="overlay overlay--color_info">
            <h2 className="overlay__header_text">Fresh and Local</h2>
            <span className="overlay__text">
              We pride ourselves on beign able to bring fresh, local fruits and
              vegetables to your table.
            </span>
            <button className="button button--alert button--half_width">
              Check it out
            </button>
          </div>
        </div>
        <div className="extra__card" id="card_2">
          <div className="extra__card_bullet">
            <div className="extra__card_bullet--overlay"></div>
          </div>
          <div className="overlay overlay--color_info">
            <h2 className="overlay__header_text">Organic and Free Range</h2>
            <span className="overlay__text">
              Organic, grass-fed, or free range meat and poultry, seven days a
              week.
            </span>
            <button className="button button--alert button--half_width">
              Check it out
            </button>
          </div>
        </div>
        <div className="extra__card" id="card_3">
          <div className="extra__card_bullet">
            <div className="extra__card_bullet--overlay"></div>
          </div>
          <div className="overlay overlay--color_info">
            <h2 className="overlay__header_text">Meet our vendors</h2>
            <span className="overlay__text">
              Find out more about the amazing suppliers and vendors who we work
              with.
            </span>
            <button className="button button--alert button--half_width">
              Check it out
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section--color_white">
        <header className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Farm to Fork</h2>
          <div className="line line--half_width line--brown"></div>
        </header>
        <div className="spacer"></div>
        <article className="section__content section__content--centered">
          <p>
            Whether your looking for farm-fresh produce, <br />
            organic dairy products, grass-fed meat and free-range poultry, or
            homemade baked goods,
            <br />
            StockBoy is here to help anyone interested in supporting local
            agriculture
            <br />
            and getting the freshest and most ingredients from the
            <br />
            farm gate to your kitchen.
            <br />
          </p>
          <button className="button button--default button--half_width">
            Find out more
          </button>
        </article>
      </section>

      {/* Vendors Section */}
      <section className="section section--color_alert">
        <div className="spacer"></div>
        <header className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Boost Your Business</h2>
          <div className="line line--half_width line--brown"></div>
        </header>
        <div className="spacer"></div>
        <article className="section__content section__content--centered">
          <p>
            Attention farmers! Are you looking to improve
            <br />
            your sales? Register as a Vendor with StockBoy to post your
            <br />
            products, prices, and business hours, and expand <br />
            your customer base.
          </p>
          <button className="button button--default button--half_width">
            Register now
          </button>
        </article>
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default Home;
