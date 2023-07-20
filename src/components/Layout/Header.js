import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../Css/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import CartHover from "./CartHover";
import CuisineCard from "../Card/CuisineCard";

const Header = () => {
  const [showCartHover, setShowCartHover] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => {
    setShowCartHover(true);
  };

  const handleCloseCartHover = () => {
    setShowCartHover(false);
  };

  return (
    <div className="header">
      <span className="restaurantName">The Indian Feast</span>
      <button className="cartContainer" onClick={handleCartClick}>
        <FiShoppingCart className="cartIcon" />
        <span className="cartText">Your Cart</span>
        <div className="cartValue">
          <span className="cartNumber">{cartItems.length}</span>
        </div>
      </button>
      {showCartHover &&
        ReactDOM.createPortal(
          <CartHover dishes={cartItems} onClose={handleCloseCartHover} />,
          document.body
        )}
      <CuisineCard updateCart={setCartItems} />
    </div>
  );
};

export default Header;
