import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import Default from './pages/Default';
import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" exact component={SingleProductPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}


export default App;
