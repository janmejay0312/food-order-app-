import React, { useState } from "react";
import Meals from "./Component/Meals/Meals";
import Header from "./Component/Layout/Header";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isCartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
