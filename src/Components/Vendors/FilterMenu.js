import React from "react";

const FilterMenu = () => {
  return (
    <aside className="aside">
      <div className="form_container form_container--column form_container--color_info">
        <header className="form_container__header form_container__header--color_info">
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
  );
};

export default FilterMenu;
