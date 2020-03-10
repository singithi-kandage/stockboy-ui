import React from "react";

import FilterMenu from "./FilterMenu";
import ResultsGrid from "./ResultsGrid";

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
        <div className="section__content section__content--width100 section__content--divided">
          {/* Side Filter Menu */}
          <FilterMenu />

          {/* Results */}
          <ResultsGrid />
        </div>
      </section>
    </main>
  );
};

export default Vendors;
