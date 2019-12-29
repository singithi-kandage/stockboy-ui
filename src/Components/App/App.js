import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Vendors from "../Vendors/Vendors";
import Products from "../Products/Products";
import Blog from "../Blog/Blog";
import Connect from "../Connect/Connect";
import Links from "../Links/Links";
import LoginRegistration from "../LoginRegistration/LoginRegistration";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Header />
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/products" component={Products} />
          <Route path="/connect" component={Connect} />
          <Route path="/blog" component={Blog} />
          <Route path="/links" component={Links} />
          <Route path="/login-signup" component={LoginRegistration} />
        </Fragment>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
