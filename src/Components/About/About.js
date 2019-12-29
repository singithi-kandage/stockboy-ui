import React from "react";

const About = () => {
  return (
    <main>
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>About</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>

      <section className="section section--color_white">
        <header className="section__header">
          <h2>Farm to Fork</h2>
        </header>
        <div className="spacer"></div>
        <article className="section__content section__content--left_justified">
          <p>
            Whether your looking for farm-fresh produce, organic dairy products,
            grass-fed meat and free-range poultry, or homemade baked goods,
            StockBoy is here to help anyone interested in supporting local
            agriculture and getting the freshest and most ingredients from the
            farm gate to your kitchen.
          </p>
          <button className="button button--default button--half_width">
            Find out more
          </button>
        </article>
      </section>

      {/* Vendors Section */}
      <section className="section section--color_white">
        <header className="section__header">
          <h2>Boost Your Business</h2>
        </header>
        <div className="spacer"></div>
        <article className="section__content section__content--left_justified">
          <p>
            Attention farmers! Are you looking to improve your sales? Register
            as a Vendor with StockBoy to post your products, prices, and
            business hours, and expand your customer base.
          </p>
          <button className="button button--default button--half_width">
            Register now
          </button>
        </article>
      </section>
    </main>
  );
};

export default About;
