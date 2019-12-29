import React from "react";

const Vendors = () => {
  return (
    <main>
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Vendors</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>

      <section className="section section--color_white">
        <div className="section__content section__content--divided">
          {/* Side Filter Menu */}
          <aside className="aside">
            <div className="form_container form_container--column">
              <header className="form_container__header form_container__header--color_alert">
                Search Filter
              </header>
              <form className="form">
                <div className="form__group">
                  <input className="input" type="text" placeholder="Keyword" />
                </div>
                <div className="form__group">
                  <select className="select">
                    <option className="select__option"> -- Category --</option>
                    <option className="select__option">Fruits</option>
                    <option className="select__option">Vegetables</option>
                    <option className="select__option">Meat and Poultry</option>
                  </select>
                </div>
                <div className="form__group">
                  <select className="select">
                    <option className="select__option"> -- Category --</option>
                    <option className="select__option">Fruits</option>
                    <option className="select__option">Vegetables</option>
                    <option className="select__option">Meat and Poultry</option>
                  </select>
                </div>
                <div className="form__group">
                  <select className="select">
                    <option className="select__option"> -- Category --</option>
                    <option className="select__option">Fruits</option>
                    <option className="select__option">Vegetables</option>
                    <option className="select__option">Meat and Poultry</option>
                  </select>
                </div>
                <div className="form__group">
                  <select className="select">
                    <option className="select__option"> -- Category --</option>
                    <option className="select__option">Fruits</option>
                    <option className="select__option">Vegetables</option>
                    <option className="select__option">Meat and Poultry</option>
                  </select>
                </div>

                <button className="button button--alert button--full_width">
                  Search
                </button>
              </form>
            </div>
          </aside>

          {/* Split div */}
          <div className="split split--width_75">
            <span>Results: </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vendors;
