import React from "react";

import image from "../../Assets/img/secondary_1.jpg";
import Pagination from "../Pagination/Pagination";

const ResultsGrid = () => {
  return (
    <div className="split split--width_80">
      <div className="card_grid">
        <div className="card">
          <div className="card__image">
            <img src={image} alt="Vendor Image" />
          </div>
          <h3 className="card__product_name">Sugar Pie Pumpkin</h3>
          <p className="card__vendor">Robby's Farm</p>
          <p className="card__price">$2.99/lb</p>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ResultsGrid;
