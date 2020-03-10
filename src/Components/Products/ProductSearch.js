import React, { Fragment } from "react";
import { connect } from "react-redux";

import Map from "../Map/Map";
import Pagination from "../Pagination/Pagination";
import image from "../../Assets/img/secondary_1.jpg";

const ProductSearch = () => {
  return (
    <Fragment>
      {/* Search Form */}
      <section className="section section--color_alert">
        <div className="section__content  section__content--width100">
          <form className="form form--row">
            {/* Column 1 */}
            <div className="column column--width20">
              <div className="form__group">
                <input className="input" type="text" placeholder="Keyword" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="column column--width20">
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
            <div className="column column--width20">
              <div className="form__group">
                <select className="select">
                  <option className="select__option"> -- Category --</option>
                  <option className="select__option">Fruits</option>
                  <option className="select__option">Vegetables</option>
                  <option className="select__option">Meat and Poultry</option>
                </select>
              </div>
            </div>

            {/* Column 4 */}
            <div className="column column--width20">
              <div className="form__group">
                <select className="select">
                  <option className="select__option"> -- Category --</option>
                  <option className="select__option">Fruits</option>
                  <option className="select__option">Vegetables</option>
                  <option className="select__option">Meat and Poultry</option>
                </select>
              </div>
            </div>

            {/* Column 5 */}
            <div className="column column--width20">
              <div className="form__group">
                <button className="button button--alert button--full_width">
                  Search
                </button>
                <button className="button button--alert button--full_width">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section section--color_white">
        <div className="section__content section__content--width100 section__content--divided">
          {/* Side menu */}
          <aside className="aside">
            <div className="list">
              <div className="list__header">Results</div>
              <div className="list_body">
                <div className="list_item">
                  <div className="list_item__image">
                    <img src={image} alt="Product Image" />
                  </div>
                  <div className="list_item__body">
                    <h3 className="list_item__product_name">
                      Sugar Pie Pumpkin
                    </h3>
                    <p className="list_item__vendor">Robby's Farm</p>
                    <p className="list_item__price">$2.99/lb</p>
                  </div>
                </div>
                <div className="list_item"></div>
                <div className="list_item"></div>
                <div className="list_item"></div>
                <div className="list_item"></div>
                <div className="list_item"></div>
              </div>
              <div className="list__trailer">
                <Pagination />
              </div>
            </div>
          </aside>

          {/* Split div */}
          <div className="split split--width_80">
            <Map />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default connect(state => ({}), {})(ProductSearch);
