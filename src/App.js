import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext.js";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider addItem={addItem} products={products}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/" />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
