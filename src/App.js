import React from "react";
import Header from "./components/Layout/Header";
import WelcomeCart from "./components/Card/WelcomeCard";
import { CartProvider } from "./components/Context/CartContext"; 

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <WelcomeCart />
      </div>
    </CartProvider>
  );
}

export default App;
