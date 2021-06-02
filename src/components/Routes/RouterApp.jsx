import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import ItemListContainer from '../ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer';
import Cart from '../Cart';
import Checkout from '../Checkout/Checkout';
import Footer from '../Footer';

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <ItemListContainer />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
};

export default RouterApp;
