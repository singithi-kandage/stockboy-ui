import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SearchLocation from "./SearchLocation";
import ProductSearch from "./ProductSearch";

const Products = () => {
  let { path } = useRouteMatch();

  return (
    <main>
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Products</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>

      <Switch>
        <Route exact path={`${path}`}>
          <SearchLocation />
        </Route>
        <Route path={`${path}/search-products`}>
          <ProductSearch />
        </Route>
      </Switch>
    </main>
  );
};

export default Products;
