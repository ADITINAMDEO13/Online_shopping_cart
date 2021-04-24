import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Pay from './components/Pay';


function App() {

  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/pay" exact component={Pay}/>
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
