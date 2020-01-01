import React from "react";

import card_image from "../../Assets/img/secondary_1.jpg";

const Products = () => {
  return (
    <main>
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Products</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>

      <section className="section section--color_alert">
        <div className="section__content">
          <form className="form form--row">
            {/* Column 1 */}
            <div className="column">
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
            </div>

            {/* Column 2 */}
            <div className="column">
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
            </div>

            {/* Column 3 */}
            <div className="column">
              <div className="form__group">
                <select className="select">
                  <option className="select__option"> -- Category --</option>
                  <option className="select__option">Fruits</option>
                  <option className="select__option">Vegetables</option>
                  <option className="select__option">Meat and Poultry</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section section--color_white">
        <div className="section__content section__content--width100">
          <aside className="aside">
            <div className="card_list">
              <div className="card_list__header">Results</div>
              <div className="card_list_body">
                <div className="card">
                  <div className="card__image">
                    <img src={card_image} alt="card_image" />
                  </div>
                  <div className="card__body">
                    <h3 className="card__product_name">Sugar Pie Pumpkin</h3>
                    <p className="card__vendor">Robby's Farm</p>
                    <p className="card__price">$2.99/lb</p>
                  </div>
                </div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
              <div className="card_list__trailer">
                <div className="pagination">
                  <span className="pagination_link">
                    <i className="fas fa-caret-left"></i>
                  </span>
                  <span className="pagination_link">1</span>
                  <span className="pagination_link">2</span>
                  <span className="pagination_link">3</span>
                  <span className="pagination_link">4</span>
                  <span className="pagination_link">5</span>
                  <span className="pagination_link">
                    <i className="fas fa-caret-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Products;
